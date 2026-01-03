// @ts-check
import react from "@astrojs/react";
import { defineConfig } from "astro/config";
import rehypeExternalLinks from "rehype-external-links";

import tailwindcss from "@tailwindcss/vite";

import vercel from "@astrojs/vercel";
import path from "node:path";

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
  ],
  markdown: {
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          target: "_blank",
          rel: ["nofollow", "noopener", "noreferrer"],
          content: { type: 'text', value: ' 🔗' }
        },
      ],
    ],
  },
  vite: {
    css: {
      transformer: "lightningcss",
    },
    plugins: [tailwindcss()],
    resolve: {
       alias: {
        "@": path.resolve("./src"),
      },
    }
  },

  redirects: {
    "/association": "/association/a-propos",
    "/prevention": "/prevention/bonnes-pratiques",
    "/reportages": "/reportages/articles",
  },

  output: "server",
  prefetch: { prefetchAll: true, defaultStrategy: "viewport" },

  image:{
    domains: ["ch-chalon71.fr"]
  },
  adapter: vercel(
    { imageService: true, }
  )
});