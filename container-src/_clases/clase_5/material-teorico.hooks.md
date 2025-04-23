
# 🧠 Clase: React Hooks – Introducción y Casos Prácticos

## 🎯 Objetivos de la clase

Al finalizar la clase, los estudiantes serán capaces de:
- Comprender qué son los Hooks y por qué existen.
- Utilizar los principales Hooks de React (`useState`, `useEffect`, `useContext`, etc.).
- Aplicarlos en componentes funcionales con casos prácticos.

---

## 🪝 ¿Qué son los Hooks?

> Los Hooks son funciones que permiten usar estado, ciclo de vida y otras características de React en componentes funcionales.

📌 Antes: solo los **componentes de clase** podían manejar estado y efectos.

📌 Ahora: los **componentes funcionales** + hooks = más simples y reutilizables.

---

## 1. **useState** → Gestión de estado
```jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    
      Contador: {count}
       setCount(count + 1)}>
        Incrementar
      
    
  );
}
```
**Clave:**  
- `count` almacena el valor actual.  
- `setCount` actualiza el estado y provoca re-renderizado[2][4].

---

## 2. **useEffect** → Efectos secundarios
```jsx
import { useEffect, useState } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(s => s + 1);
    }, 1000);

    return () => clearInterval(interval); // Limpieza
  }, []); // Dependencias vacías = solo al montar

  return Tiempo: {seconds} segundos;
}
```
**Casos de uso:**  
- Peticiones HTTP  
- Suscripciones a eventos  
- Manipulación del DOM[3][5][7].

---

## 3. **useContext** → Acceso al contexto
```jsx
import { createContext, useContext } from 'react';

const ThemeContext = createContext('light');

function App() {
  return (
    
      
    
  );
}

function Toolbar() {
  const theme = useContext(ThemeContext);
  return Tema actual: {theme};
}
```
**Uso típico:**  
- Temas de diseño  
- Preferencias de usuario[4][5].

---

## 4. **useRef** → Referencias mutables
```jsx
import { useRef } from 'react';

function TextInput() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <>
      
      Enfocar
    
  );
}
```
**Características:**  
- No causa re-renderizados  
- Útil para almacenar valores persistentes[5][6].

---

## 5. **useCallback** → Memoización de funciones
```jsx
import { useCallback, useState } from 'react';

function List({ items }) {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(c => c + 1);
  }, []); // Sin dependencias = función estable

  return (
    
      Clicks: {count}
      {items.map(item => (
        
          {item}
        
      ))}
    
  );
}
```
**Optimización:**  
- Evita recrear funciones en renderizados sucesivos[1][6].

---

## 6. **useMemo** → Memoización de valores
```jsx
import { useMemo, useState } from 'react';

function ExpensiveComponent({ a, b }) {
  const result = useMemo(() => {
    return a * b; // Cálculo costoso
  }, [a, b]); // Solo recalcula si a/b cambian

  return Resultado: {result};
}
```
**Aplicación:**  
- Optimizar cálculos intensivos[5][7].

---

## 7. **useReducer** → Estado complejo
```jsx
import { useReducer } from 'react';

function counterReducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <>
      Count: {state.count}
       dispatch({ type: 'increment' })}>+
       dispatch({ type: 'decrement' })}>-
    
  );
}
```
**Ventaja:**  
- Manejo centralizado de lógica de estado[6][7].

---

### **Mejores prácticas**:
1. Usa `useEffect` con dependencias explícitas para evitar bucles infinitos[7]. --_Evitar los effects en lo mayor posible[Video Referencia](https://www.youtube.com/watch?v=qilWcNKAM2o)_
2. Emplea `useCallback` y `useMemo` solo cuando sea necesario para optimización[1][5].
3. Organiza hooks en componentes pequeños y reutilizables[7].

Estos hooks forman la base para construir componentes funcionales robustos en React, permitiendo manejar desde estados simples hasta lógica compleja con optimizaciones de rendimiento.

Bibliografia recomendada:

- [📎 Referencia # 1] https://dev.to/abhisheknaiidu/10-react-hooks-explained-3ino
- [📎 Referencia # 2] https://es.legacy.reactjs.org/docs/hooks-state.html
- [📎 Referencia # 3] https://legacy.reactjs.org/docs/hooks-overview.html
- [📎 Referencia # 4] https://www.almabetter.com/bytes/tutorials/reactjs/reactjs-hooks
- [📎 Referencia # 5] https://vabadus.es/blog/otros/conoce-los-hooks-disponibles-en-react-y-como-utilizarlos-en-tus-componentes
- [📎 Referencia # 6] https://www.uxpin.com/studio/blog/react-hooks/
- [📎 Referencia # 7] https://blog.logrocket.com/react-hooks-cheat-sheet-solutions-common-problems/
- [📎 Referencia # 8] https://www.w3schools.com/react/react_hooks.asp
- [📎 Referencia # 9] https://legacy.reactjs.org/docs/hooks-reference.html
- [📎 Referencia # 10] https://legacy.reactjs.org/docs/hooks-overview.html
- [📎 Referencia # 11] https://legacy.reactjs.org/docs/hooks-effect.html
- [📎 Referencia # 12] https://react.dev/reference/react/hooks
- [📎 Referencia # 13] https://www.reddit.com/r/react/comments/11ftu0p/what_are_hooks/
- [📎 Referencia # 14] https://www.youtube.com/watch?v=LlvBzyy-558
- [📎 Referencia # 15] https://daily.dev/blog/react-hooks-explained-simply
- [📎 Referencia # 16] https://www.telerik.com/kendo-react-ui/react-hooks-guide/
- [📎 Referencia # 17] https://www.youtube.com/watch?v=xfKYYRE6-TQ
- [📎 Referencia # 18] https://react.dev/reference/react/useState
- [📎 Referencia # 19] https://www.w3schools.com/react/react_hooks.asp
- [📎 Referencia # 20] https://builtin.com/software-engineering-perspectives/react-hooks
- [📎 Referencia # 21] https://www.freecodecamp.org/news/react-19-new-hooks-explained-with-examples/
- [📎 Referencia # 22] https://www.reddit.com/r/reactjs/comments/1h4reok/how_to_use_use_a_guide_on_react_19s_use_hook/
- [📎 Referencia # 23] https://dev.to/ishakmohmed/react-hooks-usecontext-useeffect-usestate-useref-summarized-like-crazy-short-concise-article-254k
- [📎 Referencia # 24] https://stackoverflow.com/questions/53371356/how-can-i-use-react-hooks-in-react-classic-class-component
- [📎 Referencia # 25] https://stateside.agency/insights/react-hooks-useestate-useeffect-usecontext/
- [📎 Referencia # 26] https://designcode.io/react-hooks-handbook-usereducer-with-usecontext-1/
- [📎 Referencia # 27] https://react.dev/reference/rules/rules-of-hooks
- [📎 Referencia # 28] https://blog.logrocket.com/react-hooks-cheat-sheet-solutions-common-problems/
- [📎 Referencia # 29] https://dev.to/arafat4693/15-useful-react-custom-hooks-that-you-can-use-in-any-project-2ll8
- [📎 Referencia # 30] https://www.reddit.com/r/reactjs/comments/11hcuxt/trying_to_combine_usestate_usecontext_and/
- [📎 Referencia # 31] https://stackoverflow.com/questions/54646553/usestate-vs-usereducer



---
Mini ejercicio
## 🧪 Actividad final (15 min)

### "Mini proyecto":  
Crear un componente de **ToDo List** que use:
- `useState` para las tareas.
- `useEffect` para guardar en `localStorage`.
- `useRef` para enfocar input.
- `useReducer` como bonus.
