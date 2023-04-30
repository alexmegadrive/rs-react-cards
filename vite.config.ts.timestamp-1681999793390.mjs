// vite.config.ts
import { defineConfig } from "file:///C:/_FRONTEND%20%D0%9E%D0%91%D0%A3%D0%A7%D0%95%D0%9D%D0%98%D0%95/rs-react-cards/node_modules/vitest/dist/config.js";
import react from "file:///C:/_FRONTEND%20%D0%9E%D0%91%D0%A3%D0%A7%D0%95%D0%9D%D0%98%D0%95/rs-react-cards/node_modules/@vitejs/plugin-react/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [react()],
  server: { port: 3e3 },
  base: "/rs-react-cards/",
  test: {
    globals: true,
    environment: "jsdom",
    coverage: {
      reportsDirectory: "./tests/coverage",
      reporter: ["text", "json", "html"],
      provider: "istanbul",
      all: true
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxfRlJPTlRFTkQgXHUwNDFFXHUwNDExXHUwNDIzXHUwNDI3XHUwNDE1XHUwNDFEXHUwNDE4XHUwNDE1XFxcXHJzLXJlYWN0LWNhcmRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxfRlJPTlRFTkQgXHUwNDFFXHUwNDExXHUwNDIzXHUwNDI3XHUwNDE1XHUwNDFEXHUwNDE4XHUwNDE1XFxcXHJzLXJlYWN0LWNhcmRzXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9fRlJPTlRFTkQlMjAlRDAlOUUlRDAlOTElRDAlQTMlRDAlQTclRDAlOTUlRDAlOUQlRDAlOTglRDAlOTUvcnMtcmVhY3QtY2FyZHMvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZXN0L2NvbmZpZ1wiO1xyXG5pbXBvcnQgcmVhY3QgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIHBsdWdpbnM6IFtyZWFjdCgpXSxcclxuICBzZXJ2ZXI6IHsgcG9ydDogMzAwMCB9LFxyXG4gIGJhc2U6IFwiL3JzLXJlYWN0LWNhcmRzL1wiLFxyXG4gIHRlc3Q6IHtcclxuICAgIGdsb2JhbHM6IHRydWUsXHJcbiAgICBlbnZpcm9ubWVudDogXCJqc2RvbVwiLFxyXG4gICAgY292ZXJhZ2U6IHtcclxuICAgICAgcmVwb3J0c0RpcmVjdG9yeTogXCIuL3Rlc3RzL2NvdmVyYWdlXCIsXHJcbiAgICAgIHJlcG9ydGVyOiBbXCJ0ZXh0XCIsIFwianNvblwiLCBcImh0bWxcIl0sXHJcbiAgICAgIHByb3ZpZGVyOiBcImlzdGFuYnVsXCIsXHJcbiAgICAgIGFsbDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgfSxcclxufSk7XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBOFUsU0FBUyxvQkFBb0I7QUFDM1csT0FBTyxXQUFXO0FBRWxCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVMsQ0FBQyxNQUFNLENBQUM7QUFBQSxFQUNqQixRQUFRLEVBQUUsTUFBTSxJQUFLO0FBQUEsRUFDckIsTUFBTTtBQUFBLEVBQ04sTUFBTTtBQUFBLElBQ0osU0FBUztBQUFBLElBQ1QsYUFBYTtBQUFBLElBQ2IsVUFBVTtBQUFBLE1BQ1Isa0JBQWtCO0FBQUEsTUFDbEIsVUFBVSxDQUFDLFFBQVEsUUFBUSxNQUFNO0FBQUEsTUFDakMsVUFBVTtBQUFBLE1BQ1YsS0FBSztBQUFBLElBQ1A7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
