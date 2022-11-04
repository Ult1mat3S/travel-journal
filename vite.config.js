import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/travel-journal-vite/",
  server: {
    open: true,
  },
  plugins: [react()],
  build: {
    emptyOutDir: true,
  },
});
