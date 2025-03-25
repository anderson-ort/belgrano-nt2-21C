import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite';
import path from 'path'

import { fileURLToPath } from 'url'
import { dirname } from 'path'


const __dirname = (dirname(fileURLToPath(import.meta.url)))

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: { port: 3001 },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@uicomponents': path.resolve(__dirname, './src/components/ui')
    }
  }
})
