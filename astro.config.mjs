import { defineConfig } from "astro/config";
// import astroI18next from "astro-i18next";

import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  output: 'server',
  // integrations: [astroI18next()],
  adapter: cloudflare(),
});