// @ts-check
import react from "@astrojs/react";
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],

  vite: {
    plugins: [tailwindcss()],
  },

  redirects: {
    "/association": "/association/a-propos",
    "/prevention": "/prevention/bonnes-pratiques",
    "/reportages": "/reportages/articles",
  },

  adapter: vercel()
});