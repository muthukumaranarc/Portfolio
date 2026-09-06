import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  // Ensure assets are resolved from the site root on Firebase Hosting
  base: '/',
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        // Keep React in its own chunk so app-only updates don't bust its cache
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
        },
      },
    },
  },
})