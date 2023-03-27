import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/rs-react-cards/",
  test: {
    globals: true,
    environment: "jsdom",
    coverage: {
      reportsDirectory: "./tests/coverage",
      reporter: ["text", "json", "html"],
      provider: "istanbul",
    },
  },
});
