// db/recetas-db.js
import Dexie from 'https://cdn.jsdelivr.net/npm/dexie@3.2.4/dist/dexie.mjs'

export const db = new Dexie('RecetasDB')

// La inicializacion de la base de datos directamente usando una libreria
export function initDB() {
    db.version(1).stores({
        recetas: '++id,titulo,ingredientes,preparacion,imagen,sincronizado'
    })
}
