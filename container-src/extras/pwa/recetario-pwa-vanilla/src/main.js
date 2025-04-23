import { initDB } from '../db/recetas-db.js'
import { guardarReceta, obtenerRecetas, eliminarReceta, editarCampo, toBase64 } from '../services/receta.service.js'
import { renderRecetas } from '../ui/render-recetas.js'
import { registerServiceWorker } from './sw-register.js'

initDB()
registerServiceWorker()

const form = document.getElementById('form-receta')
form.addEventListener('submit', async (e) => {
  e.preventDefault()
  const data = {
    titulo: e.target.titulo.value,
    ingredientes: e.target.ingredientes.value,
    preparacion: e.target.preparacion.value,
    imagen: await toBase64(e.target.imagen.files[0])
  }
  await guardarReceta(data)
  e.target.reset()
  renderRecetas()
})

window.eliminarReceta = eliminarReceta
window.editarCampo = editarCampo

window.addEventListener('load', renderRecetas)

// Fake sync demo
setInterval(async () => {
  const recetas = await obtenerRecetas(false) // no sincronizadas
  if (recetas.length > 0) {
    console.log(`[Sync] Enviando ${recetas.length} recetas pendientes...`)
    for (const r of recetas) {
      await new Promise(res => setTimeout(res, 500))
      r.sincronizado = true
      await guardarReceta(r)
    }
    console.log('[Sync] Completada')
    renderRecetas()
  }
}, 10000) // cada 10s
