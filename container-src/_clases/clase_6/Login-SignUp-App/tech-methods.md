# Routing [ReactRouter](https://reactrouter.com/)
```bash
# Instalacion de la dependecia de routing  
npm i react-router
```
[Video de referencia de React Router](https://www.youtube.com/watch?v=c02YoWR9gSY)
[Alternativa de FaztWeb](https://www.youtube.com/watch?v=42tFXd1PdCk&t=2154s)
- Herramienta adicionla  Biome -> Linter
```bash
npm install --save-dev --save-exact @biomejs/biome
```
# Global Storage [Zustand]()
# AuthenticationAutorizathion [FireBase|SupaBase]


## Login usando dos opciones evitando la parte de server -> 

- Firebase
- SupaBase



```bash
src/
├── auth/
│   ├── authStore.js         // Zustand store
│   ├── firebase-config.js   // Config: | Firebase | Supabase -- ambas opciones son totalmente viables -> cambia un poco la interfaz
│   ├── useAuthInit.js       // Hook para inicializar estado
│   ├── Login.js             // Componente Login
│   ├── Signup.js            // Componente Signup
│
├── api/
│   └── client.js            // Axios client (con token si se usa)
│
├── styles/
│   └── auth.css             // Estilos vanilla
│
├── App.js                   // App principal
└── index.js                 // Render

```

creacion de project en google account opcion authentication
```bash
npm install firebase
```


