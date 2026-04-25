import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://immobilien-koeln.example.com',
  integrations: [tailwind()],
  build: {
    format: 'file',
    dirty: true
  }
});
