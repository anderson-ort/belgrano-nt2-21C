import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'



// manifesto -> necesario para ser reconocida por la depedencia.
//
const manifestForPlugin = {
  registerType: 'autoUpdate',
  includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'chile.png'],
  strategies: 'generateSW',
  manifest: {
    name: 'Recetario',
    short_name: 'Taskio',
    description: 'App de recetas offline',
    theme_color: '#1a1a1a',
    background_color: '#1a1a1a',
    start_url: '/',
    scope: '/',
    display: 'standalone',
    orientation: 'portrait',
    icons: [
      {
        src: 'chile.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any'
      },
      {
        src: 'chile.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any maskable'
      }
    ]
  },
  devOptions: {
    enabled: true,
    navigateFallback: 'index.html'
  }
}

// configurador de la dependencia.
export default defineConfig({
  plugins: [react(), tailwindcss(), VitePWA(manifestForPlugin)],

  server: {
    host: true
  },
  build: {
    sourcemap: true
  }
});
