import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  // Ensure assets are resolved from the site root on Firebase Hosting
  base: '/',
  plugins: [react()],
})
