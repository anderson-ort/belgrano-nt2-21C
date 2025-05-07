## 🧑‍🏫 Clase: Autenticación con Supabase, React Query y Progressive Web Apps (PWA) con Vite

---

### 1. 🔐 Autenticación con Supabase

#### Teoría breve:

* **Supabase** es una alternativa open-source a Firebase, que proporciona autenticación, base de datos, almacenamiento y funciones serverless.
* Usa Postgres + API REST generada automáticamente + SDKs (incluyendo uno para React).
* Proceso básico de autenticación:

  * Registro de usuario (`signUp`)
  * Inicio de sesión (`signInWithPassword`)
  * Observación del estado del usuario (`onAuthStateChange`)
  * Cierre de sesión (`signOut`)

#### Lectura adicional:

* [Documentación oficial de Supabase Auth](https://supabase.com/docs/guides/auth)


---

### 2. 🔄 React Query: Casos de Uso y Custom Hook _[Material Extra]_

#### Teoría:

* React Query maneja el fetching, caching, sincronización y actualización de datos del servidor.
* Reemplaza el uso de `useEffect` + `useState` para llamadas a APIs.
* Beneficios:

  * Refetch automático
  * Cache persistente
  * Manejo del estado de carga/error
* **Comparación con `useEffect`**: `useEffect` no maneja estados complejos ni cache por sí solo.

#### Lectura adicional:

* [React Query Docs](https://tanstack.com/query/v4)

---

### 3. 🌐 ¿Qué es una PWA?

#### Teoría:

Una PWA es una app web que se comporta como una app nativa:

* Se puede instalar
* Funciona offline
* Carga rápido gracias al caching

#### Componentes clave:

* `manifest.json`: define nombre, íconos, orientación, color, etc.
* `service worker`: maneja cache y offline.
* `HTTPS`: obligatorio (excepto en `localhost`)
* *Opcional*: IndexedDB para almacenamiento local avanzado.

#### Lectura adicional:

* [MDN - PWA](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps)
* [Google Developers: PWA](https://web.dev/progressive-web-apps/)

---

### 4. ⚙️ Transformar una App Vite a PWA

#### Pasos resumidos:

1. Instalar plugin:

```bash
npm install -D vite-plugin-pwa
npm install workbox-precaching workbox-routing workbox-strategies workbox-expiration workbox-background-sync --save
```

2. Configurar en `vite.config.ts`:

```ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg'],
      manifest: {
        name: 'Mi App React Vite PWA',
        short_name: 'AppPWA',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          }
        ]
      }
    })
  ]
});
```



## 🧠 ¿Qué es un Service Worker?

Un **Service Worker** es como un proxy entre tu aplicación web y la red. Corre en segundo plano (incluso cuando la app está cerrada) y puede interceptar peticiones, cachear recursos, manejar notificaciones push, entre otras cosas.

### 🔧 ¿Para qué sirve?

* Cachear assets y datos (para trabajar offline)
* Cargar más rápido en visitas repetidas (estrategias tipo "cache first")
* Enviar notificaciones push
* Manejar sincronización en background

---

## ⚙️ ¿Qué hace `vite-plugin-pwa` con el Service Worker?

Cuando usás el plugin:

```ts
VitePWA({
  registerType: 'autoUpdate',
  // ...
});
```

1. Te genera un `service-worker.js` automáticamente.
2. Usa [**Workbox**](https://developer.chrome.com/docs/workbox/) por debajo (de Google) para no escribir el service worker a mano.
3. El SW intercepta tus requests y usa **estrategias de caching** que vos podés configurar.

---

## 🔄 ¿Y qué es el "Workbox runtime" o "workrun"?

Esto se refiere a las **estrategias en runtime** que usa Workbox para decidir cómo manejar cada request.

Ejemplo de estrategias:

* `CacheFirst`: si está en cache, devuelve eso. Si no, lo busca de la red.
* `NetworkFirst`: intenta ir a la red, si no puede, devuelve el cache.
* `StaleWhileRevalidate`: devuelve el cache **rápido** y actualiza en segundo plano.

Podés configurarlo así:

```ts
VitePWA({
  workbox: {
    runtimeCaching: [
      {
        urlPattern: /^https:\/\/mi-api.com\/tareas/,
        handler: 'NetworkFirst',
        options: {
          cacheName: 'api-cache',
          expiration: {
            maxEntries: 50,
            maxAgeSeconds: 60 * 60 * 24, // 1 día
          },
        },
      },
    ],
  },
});
```

Eso significa: "cuando la app haga requests a `/tareas`, usá `NetworkFirst` y cachealo por un día".

---

## 🧱 ¿Cómo se registra el Service Worker?

El plugin mete en tu app un snippet que hace esto al cargar:

```ts
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js'); // o el archivo generado por vite-plugin-pwa
  });
}
```

Si usás `registerType: 'autoUpdate'`, también verifica si hay una versión nueva del service worker para reemplazarlo automáticamente.

---

## 🧪 En resumen:

| Elemento        | Qué hace                                         |
| --------------- | ------------------------------------------------ |
| Service Worker  | Proxy JS en background para interceptar requests |
| Workbox runtime | Decide *cómo* manejar las requests (estrategias) |
| vite-plugin-pwa | Automatiza todo el lio de arriba               |



[Transformacion de una React-App con Vite a PWA](https://medium.com/@rakeshdhariwal61/converting-your-react-vite-app-into-pwa-d7211e9cd0c5)
