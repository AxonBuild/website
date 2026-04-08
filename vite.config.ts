import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Custom domain (axonbuild.com) → root base. For project Pages URLs like /repo-name/, set base to '/repo-name/'.
export default defineConfig({
  plugins: [react()],
  base: "/",
});
