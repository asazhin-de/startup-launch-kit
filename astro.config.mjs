import { defineConfig } from "astro/config";

// Static output: Astro builds plain HTML/CSS/JS into ./dist,
// and Cloudflare serves it from the edge (see wrangler.jsonc).
export default defineConfig({
  output: "static",
});
