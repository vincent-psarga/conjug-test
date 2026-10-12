import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  // Relative paths so the build works under GitHub Pages' /conjug-test/ sub-path.
  base: "./",
  plugins: [react()],
});
