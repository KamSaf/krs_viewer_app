import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 4000,
    host: true,
  },
  plugins: [react(), tsconfigPaths()],
  optimizeDeps: {
    exclude: ["vite"],
  },
});
