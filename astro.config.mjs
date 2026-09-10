import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const site = process.env.SITE_URL || 'https://example.com';

export default defineConfig({
  site,
  output: 'static',
  compressHTML: true,
  trailingSlash: 'never',
  markdown: {
    syntaxHighlight: false,
  },
  integrations: [sitemap({
    namespaces: {
      news: false,
      video: false,
      xhtml: false,
    },
  })],
  security: {
    csp: true,
  },
  build: {
    format: 'directory',
  },
});
