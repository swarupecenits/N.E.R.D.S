import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.glb'], // Added support for .glb files
  server: {
    proxy: {
      '/gs-proxy': {
        target: 'https://script.google.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/gs-proxy/, ''),
        secure: false,
      },
    },
  },
});
