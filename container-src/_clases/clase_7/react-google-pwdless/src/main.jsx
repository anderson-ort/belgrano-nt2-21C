import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { registerSW } from 'virtual:pwa-register'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

if (window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone) {
  console.log('Estamos en modo standalone 🎉');
} else {
  console.log('Estamos en el navegador 😕');
}

// Register service worker with refresh handling
const updateSW = registerSW({
  onNeedRefresh() {
    // Show an update notification to the user
    if (confirm('Nueva versión disponible. ¿Actualizar ahora?')) {
      updateSW()
    }
  },
  onOfflineReady() {
    console.log('La aplicación está lista para funcionar sin conexión 🚀')
  },
  immediate: true
})