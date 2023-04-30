import { readFile } from "fs/promises";
import { fileURLToPath } from "url";
import path from "path";
import express from "express";
import { createServer as createViteServer } from "vite";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const port = 5100;

async function createServer() {
  const app = express();

  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: "custom",
  });

  app.use(vite.middlewares);

  app.use("*", async (req, res, next) => {
    const url = req.originalUrl;

    try {
      // 1. Read index.html
      let template = await readFile(
        path.resolve(__dirname, "index.html"),
        "utf-8"
      );

      // 2. Apply Vite HTML transforms. This injects the Vite HMR client,
      //    and also applies HTML transforms from Vite plugins, e.g. global
      //    preambles from @vitejs/plugin-react
      template = await vite.transformIndexHtml(url, template);

      // 3. Load the server entry. ssrLoadModule automatically transforms
      //    ESM source code to be usable in Node.js! There is no bundling
      //    required, and provides efficient invalidation similar to HMR.
      const render = (await vite.ssrLoadModule("/src/entry-server.tsx")).render;

      // 4. render the app HTML. This assumes entry-server.js's exported
      //     `render` function calls appropriate framework SSR APIs,
      //    e.g. ReactDOMServer.renderToString()
      // 5. Inject the app-rendered HTML into the template.
      // 6. Send the rendered HTML back.

      // 6. Send the rendered HTML back.

      const chunks = template.split("<!--ssr-outlet-->");

      const { pipe } = await render(url, {
        onShellReady() {
          res.write(chunks[0]);
          pipe(res);
        },
        onShellError(err: Error) {
          console.error(err);
        },
        onAllReady() {
          res.end(chunks[1]);
        },
        onError(err: Error) {
          console.error(err);
        },
      });
    } catch (e: unknown) {
      if (e instanceof Error) {
        vite.ssrFixStacktrace(e);
        next(e);
      }
    }
  });

  return { app };
}

createServer().then(({ app }) =>
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}/`);
  })
);
