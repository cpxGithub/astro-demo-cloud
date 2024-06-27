import { defineConfig } from 'astro/config';
import nodePolyfills from 'rollup-plugin-node-polyfills';

import astroI18next from "astro-i18next";
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  output: "server",
  integrations: [astroI18next()],
  adapter: cloudflare({
    // mode: 'directory',
    // platformProxy: {
    //   enabled: true
    // }
  }),
  vite: {
    // plugins: [
    //   nodePolyfills({
    //     process: false
    //   })
    // ],
    ssr: {
      external: [
        // "i18next",
        // "i18next-browser-languagedetector",
        // "i18next-http-backend",
        // "i18next-fs-backend",
        // "astro-i18next"
      ]
    }
  }
});