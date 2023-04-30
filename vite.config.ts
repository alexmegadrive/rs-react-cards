import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: { port: 3000 },
  base: "/rs-react-cards/",
  test: {
    globals: true,
    environment: "jsdom",
    coverage: {
      reportsDirectory: "./tests/coverage",
      reporter: ["text", "json", "html"],
      provider: "istanbul",
      all: true,
    },
  },
});
