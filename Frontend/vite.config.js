import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import rewriteAll from "vite-plugin-rewrite-all";

export default defineConfig({
  plugins: [
    react(),
    rewriteAll([
      { match: "/api/(.*)", replacement: "http://localhost:8800/api/$1" },
    ]),
  ],
});
