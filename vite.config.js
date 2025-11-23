// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Cambia REPO_NAME por el nombre exacto de tu repo en GitHub
export default defineConfig({
  plugins: [react()],
  base: '/shrek-spa/', // ej: '/shrek-spa/'
})
