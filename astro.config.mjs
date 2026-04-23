import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://efendilergrup.com',
  trailingSlash: 'never',
  output: 'static',
  i18n: {
    defaultLocale: 'tr',
    locales: ['tr', 'en', 'ru'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [sitemap()],
  build: {
    format: 'directory',
  },
});
