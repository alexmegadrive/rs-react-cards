import { readFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import express from "express";
import process from "process";
import { ViteDevServer, createServer as createViteServer } from "vite";
import App from "./src/App";
import { renderToPipeableStream } from "react-dom/server";

// const resolve = (p: string) => path.resolve(__dirname, p);
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const port = 5173;
// const isProd = !process.env.NODE_ENV;

async function createServer() {
  const app = express();

  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: "custom",
  });

  // Use vite's connect instance as middleware. If you use your own
  // express router (express.Router()), you should use router.use
  app.use(vite.middlewares);
  // let vite: ViteDevServer;

  // if (!isProd) {
  //   vite = await createViteServer({
  //     server: { middlewareMode: true },
  //     appType: "custom",
  //   });
  //   app.use(vite.middlewares);
  // } else {
  //   app.use((await import("compression")).default());
  //   app.use(
  //     (await import("serve-static")).default(resolve("dist/client"), {
  //       index: false,
  //     })
  //   );
  // }

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
      const appHtml = await render(url);

      // 5. Inject the app-rendered HTML into the template.
      const html = template.replace(`<!--ssr-outlet-->`, appHtml);

      // 6. Send the rendered HTML back.
      res.status(200).set({ "Content-Type": "text/html" }).end(html);

      // const { pipe } = renderToPipeableStream(<App />, {
      //   bootstrapScripts: ["/main.js"],
      //   onShellReady() {
      //     res.setHeader("content-type", "text/html");
      //     pipe(res);
      //   },
      //   onShellError(error) {
      //     res.statusCode = 500;
      //     res.setHeader("content-type", "text/html");
      //     res.send("<h1>Something went wrong</h1>");
      //   },
      //   onError(error) {
      //     console.error(error);
      //     // logServerCrashReport(error);
      //   },
      // });
    } catch (e: unknown) {
      // If an error is caught, let Vite fix the stack trace so it maps back
      // to your actual source code.
      // vite.ssrFixStacktrace(e);
      next(e);
    }
  });

  return { app };
}

createServer().then(({ app }) =>
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}/`);
  })
);
