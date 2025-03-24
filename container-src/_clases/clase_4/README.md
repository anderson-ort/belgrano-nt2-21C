# Clase: Introducción a React

📃[DOCUMENTACION OFICIAL DE REACT](https://react.dev/learn)

📃[RUN REACT VITH VITE](https://vite.dev/guide/)

## Objetivos de la Clase
- Comprender la diferencia entre programación declarativa e imperativa.
- Aprender los fundamentos de React y su modelo de componentes.
- Conocer JSX, props y estado en React.
- Explorar los hooks más importantes y cómo usarlos.
- Presentar algunos trucos y mejores prácticas para trabajar con React.

---

## 1. ¿Qué es React?
React es una biblioteca de JavaScript desarrollada por Facebook que permite crear interfaces de usuario de forma declarativa y componetizada. Nos permite escribir vistas que “reaccionan” a cambios en el modelo de datos.

### Ventajas de React:
- **Declarativo:** Escribimos lo que queremos hacer y React se encarga del DOM.
- **Componentes reutilizables:** Podemos dividir problemas complejos en componentes pequeños y reutilizables.
- **Virtual DOM:** Solo actualiza los elementos necesarios en el DOM, mejorando el rendimiento.

## 2. Programación Imperativa vs. Declarativa
### **Imperativa:**
Describe una serie de pasos para lograr un objetivo. Ejemplo:
```js
const list = document.getElementById('lista');
const item = document.createElement('li');
item.textContent = 'Nuevo ítem';
list.appendChild(item);
```
### **Declarativa (React):**
Nos enfocamos en qué queremos renderizar:
```jsx
function Lista() {
  return (
    <ul>
      <li>Nuevo ítem</li>
    </ul>
  );
}
```

---

## 3. JSX: JavaScript + XML
JSX es una sintaxis extendida de JavaScript similar a XML/HTML.
- Se transpila a JavaScript puro.
- Etiquetas en minúsculas son tratadas como HTML/SVG.
- Etiquetas con mayúsculas son tratadas como componentes.

Ejemplo de JSX:
```jsx
const element = <h1>¡Hola, mundo!</h1>;
```

---

## 4. Props y Estado
### **Props (Propiedades)**
Los props permiten pasar información a los componentes como si fueran atributos en HTML.
Ejemplo:
```jsx
function Saludo({ nombre }) {
  return <h1>Hola, {nombre}!</h1>;
}
```
Uso:
```jsx
<Saludo nombre="Andru" />
```

### **Estado (State)**
El estado permite manejar cambios en la interfaz en tiempo real. Se gestiona con `useState()`:
```jsx
import { useState } from 'react';

function Contador() {
  const [contador, setContador] = useState(0);
  return (
    <div>
      <p>Contador: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
    </div>
  );
}
```
---

## 5. Hooks más importantes en React
Los hooks permiten agregar funcionalidades a los componentes funcionales.

### **1. useState()**
Maneja el estado local de un componente.

### **2. useEffect()**
Ejecuta código en momentos específicos del ciclo de vida del componente.
```jsx
useEffect(() => {
  console.log('Componente montado o actualizado');
}, []); // Se ejecuta solo al montarse
```

### **3. useContext()**
Permite acceder a valores globales sin prop drilling.
```jsx
const ThemeContext = React.createContext('light');

function Componente() {
  const theme = useContext(ThemeContext);
  return <p>El tema actual es {theme}</p>;
}
```

### **4. useRef()**
Mantiene referencias sin provocar re-renderizados.
```jsx
const inputRef = useRef(null);

function enfocar() {
  inputRef.current.focus();
}
```

### **5. useMemo() y useCallback()**
Optimización de rendimiento evitando cálculos innecesarios.
```jsx
const valorMemoizado = useMemo(() => calcularAlgo(pesado), [dependencias]);
```

---

## 6. Trucos y buenas prácticas
- **Separar lógica y presentación:** Usar hooks para manejar la lógica y componentes para la UI.
- **Usar Fragment (`<>...</>`)** en lugar de `div` innecesarios.
- **Optimizar renderizados** con `React.memo()`.
- **Evitar estados innecesarios**, usar `useRef()` cuando no sea necesario re-renderizar.
- **Usar PropTypes** o TypeScript para validar props.

---

## 7. Crear una Mini App con Vite
Para iniciar un proyecto React con Vite:
```sh
npm create vite@latest mi-app --template react
cd mi-app
npm install
npm run dev
```
Ejemplo de `App.jsx`:
```jsx
function App() {
  return <h1>¡Hola desde Vite!</h1>;
}
export default App;
```

---

## 8. React Native
Framework basado en React para crear apps móviles en iOS y Android.
```sh
npx react-native init MiApp
cd MiApp
npx react-native start
```

---

## Conclusión
React es una herramienta poderosa para el desarrollo frontend moderno. Entender su modelo declarativo, los hooks y las mejores prácticas te permitirá construir aplicaciones eficientes y mantenibles.

### **Tareas:**
1. Crear un contador con `useState()`.
2. Implementar un efecto con `useEffect()`.
3. Crear un componente reutilizable que reciba props.
4. Optimizar un cálculo con `useMemo()`.



