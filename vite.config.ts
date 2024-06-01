import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteTsconfigPaths from "vite-tsconfig-paths";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react(), viteTsconfigPaths(), svgr()],
  server: {
    open: true,
    port: 3000,
    host: true,
  },
  resolve: {
    alias: {
      src: "@",
    },
  },
});
