import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

const site = process.env.SITE_URL ?? "https://nikman.tech";

export default defineConfig({
  site,
  output: "static",
  integrations: [
    sitemap({
      filter: (page) =>
        !page.includes("/notes/") &&
        !page.endsWith("/404.html") &&
        !page.endsWith("/content.json"),
    }),
  ],
  build: {
    assets: "_assets",
  },
  compressHTML: true,
  vite: {
    server: {
      host: "0.0.0.0",
    },
  },
});
