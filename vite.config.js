import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Set base to the repository name for GitHub Pages deployments
export default defineConfig({
  base: '/react-counter-form/',
  plugins: [react()],
})
