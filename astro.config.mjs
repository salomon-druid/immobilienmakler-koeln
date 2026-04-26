import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  site: 'https://immobilien-koeln.example.com',
  integrations: [tailwind()],
  output: 'server',
  adapter: vercel(),
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
