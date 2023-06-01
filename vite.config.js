import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import EnvironmentPlugin from "vite-plugin-environment";

export default defineConfig({
  plugins: [
    sveltekit(),
    EnvironmentPlugin(["VITE_NOTION_API_KEY", "VITE_NOTION_DATABASE_ID"]),
  ],
  server: {
    port: 3000,
  },
});
