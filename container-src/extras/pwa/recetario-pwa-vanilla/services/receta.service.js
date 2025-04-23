// services/receta.service.js
import { db } from '../db/recetas-db.js'
import { renderRecetas } from '../ui/render-recetas.js'

export async function guardarReceta(data) {
    data.sincronizado ??= false
    await db.recetas.put(data)
}

export async function obtenerRecetas(onlyUnsynced = null) {
    if (onlyUnsynced === true) return await db.recetas.where('sincronizado').equals(false).toArray()
    return await db.recetas.toArray()
}

export async function eliminarReceta(id) {
    await db.recetas.delete(id)
    renderRecetas()
}

export async function editarCampo(id, campo, valor) {
    const receta = await db.recetas.get(id)
    receta[campo] = valor
    receta.sincronizado = false
    await db.recetas.put(receta)
    renderRecetas()
}

export function toBase64(file) {
    return new Promise((res, rej) => {
        if (!file) return res(null)
        const reader = new FileReader()
        reader.onload = () => res(reader.result)
        reader.onerror = (err) => rej(err)
        reader.readAsDataURL(file)
    })
}
