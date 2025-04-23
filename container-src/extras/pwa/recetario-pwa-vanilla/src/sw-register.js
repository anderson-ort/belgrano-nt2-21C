// src/sw-register.js
export function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/sw.js')
                .then(reg => console.log('[SW] Registrado correctamente:', reg.scope))
                .catch(err => console.error('[SW] Error al registrar:', err))
        })
    }
}
