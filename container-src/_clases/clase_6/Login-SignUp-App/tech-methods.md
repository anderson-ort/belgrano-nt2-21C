## 🧠 **Clase: Routing, Global Storage y Data Fetching en React**

### 🎯 Objetivos de la clase
- Entender cómo funciona el enrutamiento en una SPA con React Router.
- Implementar almacenamiento global con Zustand.
- Utilizar React Query para manejo eficiente de datos asincrónicos.
- Aplicar conceptos de login, manejo de usuarios y autenticación.
- Usar herramientas como Axios, json-server y linters como Biome.
- (Opcional) Introducción a Firebase o Supabase para auth real.

---

### 🧱 1. **Setup del Proyecto**
```bash

npm install react-router
npm install zustand
npm install @tanstack/react-query
npm install axios
npm install -g json-server@0.17.4
npm install --save-dev --save-exact @biomejs/biome
npx @biomejs/biome init
```

---

### 🌐 2. **Routing con React Router**
- 📺 [Video oficial](https://www.youtube.com/watch?v=c02YoWR9gSY)
- 🔁 Rutas: `/`, `/login`, `/profile`
- 🔨 Componentes: `<BrowserRouter>`, `<Routes>`, `<Route>`
- 💡 Actividad práctica:
  - Crear una app con 3 páginas enlazadas por rutas.
  - Agregar links de navegación.

---

### 🗃️ 3. **Global Storage con Zustand**
- 📺 [Video de introducción](https://www.youtube.com/watch?v=1Ytp_M3P6Xc)
- 👤 Crear store de usuario (login/logout)
- 💡 Actividad práctica:
  - Guardar el usuario logueado en Zustand.
  - Mostrar datos en la barra de navegación.

---

### 🔄 4. **Data Fetching con React Query**
- 📺 [Video explicativo](https://www.youtube.com/watch?v=B1M5wLscVxU)
- 🔌 Setup del `QueryClient` y `QueryClientProvider`.
- 🧪 Fetch de usuarios desde GitHub o `json-server`.
- 💡 Actividad práctica:
  - Crear una tabla o lista de usuarios usando `useQuery`.

---

### 🔐 5. **Login Básico + Validación**
- 🧱 Componente Login: form con username y password.
- 🔎 Validación local vs. llamada a `json-server`.
- 💡 Actividad práctica:
  - Validar usuario y guardar en Zustand.
  - Redireccionar al profile si está logueado.

---

### ⚙️ 6. **Axios + Interceptors**
- ➕ Agregar un `axiosInstance` centralizado.
- 🔐 Usar interceptor para agregar headers (ej: token).
- 💡 Actividad práctica:
  - Probar agregar un header falso para autenticación.

---

### ☁️ 7. **(Opcional) Firebase / Supabase** _no se llegara a ver pero sugiero hacerlo_
- Demostración rápida de Auth con Firebase.
- Mostrar cómo conectar login con Firebase SDK.

---


### 📁 Propuesta de estructura de carpetas:
```bash
├───components              # Componentes reutilizables y páginas principales
│   ├───LandingPage         # Página principal o bienvenida
│   ├───Loader              # Indicador de carga para queries o navegación
│   ├───Login               # Formulario de login con validación
│   ├───LogOut              # Botón o lógica de logout
│   ├───NavBtn              # Botón de navegación, útil para barra superior
│   ├───NotFoundPage        # Página 404 para rutas no definidas
│   ├───Profile             # Página protegida con info del usuario logueado
│   ├───RepositoryCard      # Card para mostrar repos (GitHub, json-server)
│   └───SignUp              # Formulario de registro (si lo implementás)
├───routes                  # Configuración de rutas y componentes protegidos
├───_constants              # Constantes como rutas, colores, textos
├───_helpers                # Funciones auxiliares: validación, auth, etc.
├───_hooks                  # Custom hooks: uso de Zustand, React Query, etc.
└───_store                  # Estado global: ejemplo `useUserStore.js`

```

---


# AuthenticationAutorizathion [FireBase|SupaBase](Optional)