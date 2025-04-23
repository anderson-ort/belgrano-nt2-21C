// ui/render-recetas.js
import { obtenerRecetas, eliminarReceta } from '../services/receta.service.js'

export async function renderRecetas() {
    const recetas = await obtenerRecetas()
    const container = document.getElementById('lista-recetas')
    container.innerHTML = ''
// mejorar este consumo y renderizado , usando mejores tecnicas de inyeccion de data
    recetas.forEach((r) => {
        const card = document.createElement('div')
        card.className = 'receta'
        card.innerHTML = `
      <h3 contenteditable="true" onblur="editarCampo(${r.id}, 'titulo', this.textContent)">${r.titulo}</h3>
      ${r.imagen ? `<img src="${r.imagen}" width="200" />` : ''}
      <p><strong>Ingredientes:</strong> <span contenteditable="true" onblur="editarCampo(${r.id}, 'ingredientes', this.textContent)">${r.ingredientes}</span></p>
      <p><strong>Preparación:</strong> <span contenteditable="true" onblur="editarCampo(${r.id}, 'preparacion', this.textContent)">${r.preparacion}</span></p>
      <button onclick="eliminarReceta(${r.id})">Eliminar</button>
    `
        container.appendChild(card)
    })
}
