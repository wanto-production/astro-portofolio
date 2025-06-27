// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import solidJs from '@astrojs/solid-js';

import sitemap from '@astrojs/sitemap';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: "https://portofolio-ikhwan.vercel.app/",
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [solidJs(), sitemap()],
  adapter: vercel()
});
