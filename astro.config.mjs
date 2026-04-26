import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  site: 'https://immobilien-koeln.example.com',
  integrations: [tailwind()],
  output: 'static',
  i18n: {
    defaultLocale: 'de',
    locales: ['de', 'en'],
  },
  vite: {
    resolve: {
      alias: {
        '@': resolve(__dirname, './src')
      }
    }
  },
  build: {
    format: 'file',
    dirty: true
  }
});