import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import EnvironmentPlugin from "vite-plugin-environment";

export default defineConfig({
  plugins: [
    sveltekit(),
    EnvironmentPlugin({
      VITE_NOTION_API_KEY: "secret_Cxqe9YB8Hr5yQDr1irvyyXsLABmnDQtCuaqNyDYiAZs",
      VITE_NOTION_DATABASE_ID: "d0cceabd34b54d03a2d6c3bedb2df826",
    }),
  ],
  server: {
    port: 3000,
  },
});
