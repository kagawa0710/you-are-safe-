import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: process.env.GITHUB_PAGES
  ? 'you-are-safe-' // レポジトリ名を設定
  : './',
  // define: { 'process.env': {} },
});
