import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  esbuild: {
    target: 'esnext',
    platform: 'linux',
  },
  plugins: [react(),
    tailwindcss()],
  base: process.env.VITE_BASE_PATH || "/React_demo_prj",
})
