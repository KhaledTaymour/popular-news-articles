/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: "/src",
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 3006,
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./setupTests.ts"],
    css: true,
    exclude: ["node_modules/**", "*.spec.ts", "**/*.spec.ts"],
    coverage: {
      reporter: ["text", "json", "html"],
    },
  },
  build: {
    outDir: "build",
  },
});
