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

### Empecemos con lo basico


### 📦 ¿Qué es un **componente** en React?

Un **componente** es una **función** (o clase con herencia de Component, pero hoy se usa casi siempre funciones) que retorna **JSX**, que es una mezcla entre HTML y JS.

Pensalo como una **pieza reutilizable de la interfaz**. Por ejemplo, un botón, una tarjeta de usuario, una navbar, etc.

```jsx
function Boton() {
  return <button>Click me</button>;
}
```

Ese `Boton` se puede usar en otra parte como si fuera una etiqueta HTML:

```jsx
<Boton />
```

---

### 📨 ¿Qué son las **props**?

Las **props** (abreviación de *properties*) son los **valores que le pasás a un componente** desde otro componente. Es como si le pasaras argumentos a una función.

Ejemplo:

```jsx
function Saludo(props) {
  return <h1>Hola, {props.nombre}</h1>;
}
```

Uso:

```jsx
<Saludo nombre="Andru" />
```

> Props = datos de **solo lectura** que fluyen **de padre a hijo**.

---

### 🔁 ¿Qué es el **estado (state)**?

El **estado** representa los **datos internos** de un componente que **pueden cambiar con el tiempo**, como un contador, el valor de un input, si algo está visible o no, etc.

Usamos `useState`, que es un **hook** (una función especial de React).

```jsx
import { useState } from 'react';

function Contador() {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <p>Contador: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>Sumar</button>
    </div>
  );
}
```

---

### 🧠 Unos conceptos básicos que nos conviene conocer antes o mientras aprendés React

1. **JSX**  
   Es una sintaxis que parece HTML, pero es JavaScript. Podés usar lógica JS dentro de `{}`:

   ```jsx
   const nombre = "Andru";
   return <p>Hola, {nombre}</p>;
   ```

2. **Componentes son funciones puras**  
   Cada vez que se renderiza, React vuelve a ejecutar la función del componente.

3. **Estado y props actualizan la UI automáticamente**  
   Si cambian, React vuelve a renderizar el componente (o parte de él) con los nuevos valores.

4. **Virtual DOM**  
   React no modifica el DOM directamente, sino que usa una copia virtual, hace los cambios ahí, y luego actualiza el DOM real eficientemente.

5. **Unidirectional data flow**  
   Los datos fluyen de arriba hacia abajo (de padres a hijos). Nunca al revés, a menos que uses callbacks.
