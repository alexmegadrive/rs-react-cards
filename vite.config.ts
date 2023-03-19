import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  test: {
    globals: true,
    environment: "jsdom",
    coverage: {
      reportsDirectory: "./tests/coverage",
      reporter: ["text", "json", "html"],
      provider: "c8",
    },
  },
});
