// sw.js
const CACHE_NAME = 'recetas-cache-v2'
const FILES_TO_CACHE = [
    '/',
    '/index.html',
    '/styles/styles.css',
    '/icons/icon-192.png',
    '/icons/icon-512.png',
    'https://cdn.jsdelivr.net/npm/dexie@3.2.4/dist/dexie.mjs',
    '/offline.html' // fallback
]

self.addEventListener('install', (event) => {
    console.log('[SW] Instalando...')
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(FILES_TO_CACHE)
        })
    )
})

self.addEventListener('activate', (event) => {
    console.log('[SW] Activado')
    event.waitUntil(
        caches.keys().then((keyList) =>
            Promise.all(
                keyList.map((key) => {
                    if (key !== CACHE_NAME) {
                        console.log('[SW] Borrando cache viejo:', key)
                        return caches.delete(key)
                    }
                })
            )
        )
    )
})

self.addEventListener('fetch', (event) => {
    if (event.request.method !== 'GET') return

    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request)
        }).catch(() => {
            return caches.match('/offline.html')
        })
    )
})
