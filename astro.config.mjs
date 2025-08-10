import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output: "static",
  site: "https://eliascelis.dev",
  build: {
    assets: "assets",
  },
  integrations: [tailwind()],
});
