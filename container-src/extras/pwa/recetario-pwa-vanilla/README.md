```bash
/public
├── index.html                  # Estructura principal
├── manifest.json               # Identidad de la app
├── sw.js                       # Service Worker (offline/cache)
├── /icons                      # Íconos para la app instalable
│   ├── icon-192.png
│   └── icon-512.png
├── /styles
│   └── styles.css              # Estilos base de la app
├── /db
│   └── recetas-db.js              # Inicializa Dexie y esquema de recetas
├── /services
│   └── receta.service.js          # Lógica: guardar, editar, eliminar, obtener recetas
├── /ui
│   └── render-recetas.js          # Solo renderiza el DOM
├── /src
│   ├── main.js                    # Punto de entrada principal
│   └── sw-register.js             # Registro del Service Worker con manejo de errores
```