# 🍽️ PWA con Vanilla JS - Clase completa

> **Objetivo:** Aprender a construir una PWA 100% funcional usando solo HTML, CSS y JavaScript. Vamos a desarrollar una "Recipe App" que funciona offline, permite tomar fotos y guardar recetas localmente.

---

## 1️⃣ ¿Qué es una PWA?

**Progressive Web App (PWA)** es una app web con superpoderes:

- Se puede **instalar** en el dispositivo
- Funciona **offline**
- Se comporta como una app **nativa**
- Usa solo tecnologías web estándar

💡 Ejemplos: Twitter Lite, Spotify Web, YouTube PWA

---

## 2️⃣ Componentes fundamentales de una PWA

Para que sea una PWA real, necesitamos:

- `manifest.json`: identidad y apariencia
- `service worker`: funcionalidad offline y cache
- `HTTPS`: obligatorio (excepto en localhost)
- **Opcional pero recomendado:** IndexedDB para guardar datos

---

## 3️⃣ `manifest.json`: la identidad de la app

```json
{
  "name": "Cocina Offline",
  "short_name": "Recetas",
  "start_url": "/index.html",
  "display": "standalone",
  "background_color": "#fff8f0",
  "theme_color": "#ff7043",
  "icons": [
    {
      "src": "/icons/icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/icons/icon-512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```

📌 Este archivo permite:
- Que el navegador la muestre como instalable
- Definir íconos, colores y modo de visualización
- Integración con el sistema operativo

---

## 4️⃣ `sw.js`: el service worker

```js
const CACHE_NAME = 'receta-cache-v1'
const urlsToCache = [
  '/',
  '/index.html',
  '/styles.css',
  '/app.js',
  '/indexeddb.js',
  '/icons/icon-192.png',
  '/icons/icon-512.png'
]

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  )
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  )
})

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  )
})
```

📌 ¿Qué hace el SW?
- Cachea archivos estáticos
- Responde offline
- Se instala una sola vez y se actualiza si cambió

---

## 5️⃣ IndexedDB: almacenamiento local estructurado

```js
async function guardarReceta(receta) {
  const db = await openDB()
  const tx = db.transaction('recetas', 'readwrite')
  const store = tx.objectStore('recetas')
  store.put(receta)
  return tx.complete
}
```

📌 ¿Por qué usar IndexedDB?
- Almacena datos estructurados
- Soporta blobs (fotos)
- Funciona offline
- Ideal para recetas, tareas, notas, etc.

---

## 6️⃣ Aplicación práctica: App de Recetas Offline

🛠️ Características:

- Formulario para nueva receta
- Captura de foto desde cámara
- Guardado en IndexedDB
- Cache estático con Service Worker
- Manifest para instalación

📷 Captura:  
`<input type="file" accept="image/*" capture="environment" />`

---

## 7️⃣ Mejores prácticas y futuro

✅ **Buenas prácticas:**
- Usar `register()` para service worker con manejo de errores
- Separar lógica de datos (IndexedDB) de UI
- Usar `async/await` para claridad

🔮 **Posibles mejoras:**
- Background sync para enviar recetas cuando vuelva la red
- Workbox (si se quiere evitar escribir SW a mano)
- Notificaciones push
- Edición y eliminación de recetas

---

## 🎤 Conclusión

> **Una PWA es la evolución natural de las apps web.**
>  
> Con solo HTML, CSS y JavaScript, podés construir experiencias instalables, offline, modernas y sin depender de frameworks.

---

## 🎒 Tareas sugeridas para estudiantes

- [ ] Implementar búsqueda de recetas
- [ ] Agregar función de editar receta
- [ ] Sincronizar con una API backend (cuando haya conexión)
- [ ] Crear una versión con React, Vue o Svelte para comparar

---

## 🚀 Recursos recomendados

- [web.dev/progressive-web-apps](https://web.dev/progressive-web-apps/)
- [MDN: Service Workers](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API)
- [Lighthouse PWA Checks](https://developers.google.com/web/tools/lighthouse#devtools)
- [PWA Medium](https://medium.com/spidernitt/pwa-understanding-progressive-web-apps-b81309394e47)
- [IndexedDB](https://es.javascript.info/indexeddb)