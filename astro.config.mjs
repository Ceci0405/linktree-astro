import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  build: {
    // CSS y JS en archivos externos: permite una CSP estricta sin 'unsafe-inline'
    inlineStylesheets: 'never',
  },
  vite: {
    build: { assetsInlineLimit: 0 },
  },
});
