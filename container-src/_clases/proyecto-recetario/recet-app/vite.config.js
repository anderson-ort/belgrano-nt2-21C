import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

const manifestForPlugin = {
  registerType: 'autoUpdate',
  includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'chile.png'],
  strategies: 'generateSW',
  manifest: {
    name: 'recet-app',
    short_name: 'recet-App',
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

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA(manifestForPlugin)],
  server: {
    host: true
  },
  build: {
    sourcemap: true
  }
})

