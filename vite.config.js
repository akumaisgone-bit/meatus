import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  server: {
    watch: {
      usePolling: true,
      interval: 100
    }
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        products: resolve(__dirname, 'products.html'),
        gallery: resolve(__dirname, 'gallery.html'),
        reviews: resolve(__dirname, 'reviews.html'),
        contact: resolve(__dirname, 'contact.html'),
        admin: resolve(__dirname, 'admin/index.html'),
        admin_dashboard: resolve(__dirname, 'admin/dashboard.html')
      }
    }
  }
});
