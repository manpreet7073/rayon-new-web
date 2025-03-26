import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import SitemapPlugin from 'vite-plugin-sitemap'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    SitemapPlugin({
      baseUrl: 'https://rayonweb.com',  // Replace with your actual domain
      sitemapPath: 'sitemap.xml',          // The location where the sitemap will be generated
    }),
  ],
  server: {
    port: 3000,
  },
})
