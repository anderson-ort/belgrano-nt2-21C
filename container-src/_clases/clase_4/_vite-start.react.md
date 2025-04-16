
# Intro a ReactJs



### 🪄 **0. Instalacion de Vite**
[Instalacion de Vite en el entorno de NodeJs](https://vite.dev/guide/)
```bash
npm install -D vite
```

### 🚀 **1. Crear un proyecto React con Vite**

Abrí tu terminal y corré lo siguiente:

```bash
npm create vite@latest
```

Te va a preguntar algunas cosas:

1. **Nombre del proyecto** → `react-sample-intro` (o el nombre que quieras)
2. **Framework** → `React`
3. **Variant** → `JavaScript` (si no estás usando TypeScript)

Luego, entrá al proyecto y levantalo:

```bash
cd react-sample-intro
npm install
npm run dev
```

Vite va a levantar un servidor en `http://localhost:5173`. -- lo ideal seria aprenderlo a cambiar con `vite.config.js`

---

### 🧱 **2. Estructura básica del proyecto**

Adentro de `src/` vas a ver archivos como:

- `main.jsx` → punto de entrada
- `App.jsx` → tu primer componente principal
- `index.css` → estilos base

---

### 👨‍🏫 **3. Ejemplo con componentes, props y estado**

Vamos a hacer una app con:

- Un componente `Saludo` que recibe un nombre por `props`
- Un componente `Contador` con `useState`


## 🧠 Usemos el patrón Contenedor/Presentación

- **Componente de presentación**: solo muestra datos. Recibe props y no maneja estado.
- **Componente contenedor**: maneja el estado y la lógica, y se lo pasa al presentacional.


### `src/App.jsx` (sin cambios)

```jsx
import Saludo from './components/Saludo';
import ContadorContainer from './components/ContadorContainer';

function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <Saludo nombre="Andru" />
      <ContadorContainer />
    </div>
  );
}

export default App;
```

---

### `src/components/Contador.jsx` (componente **presentacional**)

```jsx
function Contador({ contador, onSumar }) {
  return (
    <div>
      <p>Contador: {contador}</p>
      <button onClick={onSumar}>Sumar</button>
    </div>
  );
}

export default Contador;
```

---

### `src/components/ContadorContainer.jsx` (componente **contenedor**)

```jsx
import { useState } from 'react';
import Contador from './Contador';

function ContadorContainer() {
  const [contador, setContador] = useState(0);

  const manejarSuma = () => {
    setContador(prev => prev + 1);
  };

  return (
    <Contador contador={contador} onSumar={manejarSuma} />
  );
}

export default ContadorContainer;
```

---

## ✅ Ventajas del patrón

- Separás la UI de la lógica.
- Podés testear el presentacional sin preocuparte por estados.
- Podés reutilizar `Contador` con distinta lógica (por ejemplo, usando Redux, contexto, etc.)

---

### ✨ Bonus: Estilos rápidos

Podés agregarle algo de estilo a `index.css` o usar clases directamente con Tailwind o CSS Modules, pero si estás empezando, podés seguir con `style={{}}` como arriba para mantenerlo simple.

---

¿Querés que armemos juntos una mini app como una **lista de tareas** o algo más interactivo? También podemos ver temas como **eventos**, **renderizado condicional**, **listas con `.map()`**, o incluso **formulario controlado**. Vos decime 😄


### 📁 Archivo: `vite.config.js`

Este archivo te permite configurar todo el comportamiento de Vite. Acá va un ejemplo con:

- Puerto personalizado
- Alias `@` apuntando a `/src`
- HMR (recarga en caliente) con puerto custom (opcional)
- `open` para que el navegador abra solo

```js
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';


// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Carga las variables del entorno correcto según el modo (dev/prod/etc.)
  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [react()],
    server: {
      port: parseInt(env.VITE_PORT) || 3000, // Usa variable de entorno si existe
      open: true,
      hmr: {
        port: parseInt(env.VITE_HMR_PORT) || 3000,
      },
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    define: {
      __APP_ENV__: JSON.stringify(env.VITE_APP_ENV), // Ejemplo para usar en el código
    },
  };
});
```

---

### 📌 ¿Cómo usar el alias `@`?

Supongamos que tenés un archivo `src/components/Saludo.jsx`.

En vez de hacer esto:

```js
import Saludo from '../../components/Saludo';
```

Podés hacer esto:

```js
import Saludo from '@/components/Saludo';
```

Es más limpio, más fácil de mantener, y muy útil cuando el proyecto crece.

---

### 🔧 Otros ajustes útiles

1. **Base URL (para deploys en subdirectorios)**  
   Si vas a subir tu app a un subdirectorio (por ejemplo GitHub Pages), podés definir:

   ```js
   base: '/mi-proyecto/',
   ```

2. **OutDir (ruta de compilación)**  
   Cambiá la carpeta donde se genera el build si lo necesitás:

   ```js
   build: {
     outDir: 'dist', // podés poner 'build' o lo que prefieras
   },
   ```

3. **Env variables**  
   Podés crear archivos `.env`, `.env.development`, etc., y acceder a ellos con `import.meta.env`.


    ### ✅ Opción simple: usar `.env` sin tocar `vite.config.js`

    1. 📄 **Creá un archivo `.env`** en la raíz del proyecto (¡sin extensión `.js`!):

    ```env
    VITE_API_URL=https://mi-api.com
    VITE_APP_NAME=MiAppReact
    ```

    > Recordá: todas las variables deben comenzar con `VITE_`.

    2. 🧠 **No hace falta tocar `vite.config.js`** si no querés usar las variables ahí. Vite ya las expone automáticamente en el código fuente.

    ---

    ### 🧪 Usarlas en cualquier archivo `.jsx` o `.js`

    ```jsx
    const apiUrl = import.meta.env.VITE_API_URL;
    console.log('La API está en:', apiUrl);
    ```

    ---

    ### 💡 ¿Cuándo usar `loadEnv` en `vite.config.js`?

    Solo si necesitás **usar variables de entorno dentro del propio `vite.config.js`**, por ejemplo para cambiar el `port` dinámicamente o pasar cosas a `define`.

    ---

    ### 📦 Archivos .env específicos por entorno

    Vite carga automáticamente según el modo:

    | Archivo               | Se usa cuando corrés...        |
    |----------------------|--------------------------------|
    | `.env`               | Siempre                        |
    | `.env.development`   | `npm run dev`                  |
    | `.env.production`    | `npm run build` o `preview`    |
