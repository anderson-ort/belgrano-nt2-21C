# Clase: Fundamentos y Características Modernas de JavaScript

## 1. Introducción: ECMAScript vs JavaScript

### ¿Qué es ECMAScript?
ECMAScript (ES) es el estándar en el que se basa JavaScript. Las versiones más conocidas incluyen:
- **ES5 (2009)**: Amplia compatibilidad con navegadores.
- **ES6 (2015)**: Introducción de `let`, `const`, arrow functions, clases, template literals, etc.
- **ES2016, ES2017 y posteriores**: Mejoras como `async/await`, `includes()`, spread/rest operator.

### ¿Qué soportan la mayoría de los entornos?
Los navegadores modernos soportan ES6 y posteriores, pero se usa **Babel** o **TypeScript** para compatibilidad.

### ¿Qué sintaxis debería usar?
Se recomienda usar **ES6+**, pero asegurando compatibilidad con transpilers como Babel o TypeScript.

## 2. Closures
Los closures permiten que una función acceda al ámbito donde fue creada.

```js
function contador() {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  };
}

const incrementar = contador();
incrementar(); // 1
incrementar(); // 2
```

## 3. Funciones de Primer Nivel
En JavaScript, las funciones son ciudadanos de primera clase, lo que significa que pueden ser asignadas a variables, pasadas como argumentos y devueltas desde otras funciones.

```js
const saludar = function(nombre) {
  return `Hola, ${nombre}!`;
};

const imprimirMensaje = (fn, nombre) => console.log(fn(nombre));

imprimirMensaje(saludar, "Andru");
// Output: Hola, Andru!
```

## 4. Asincronía en JavaScript
JavaScript es un lenguaje de un solo hilo, pero maneja tareas asíncronas con:
- **Callbacks**
- **Promises**
- **Async/Await**

```js
setTimeout(() => console.log("Esto se ejecuta después de 2 segundos"), 2000);
```

### Promesas:
```js
const promesa = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Operación exitosa!"), 2000);
});

promesa.then(respuesta => console.log(respuesta));
```

### Async/Await:
```js
async function obtenerDatos() {
  let respuesta = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  let datos = await respuesta.json();
  console.log(datos);
}

obtenerDatos();
```

## 5. Desafío: Simulación de Carga de Datos con JavaScript Moderno

### Descripción:
Crea una función `cargarDatos()` que simule la carga de datos desde un servidor con `setTimeout`. Debe devolver una promesa que, tras 3 segundos, resuelva con una lista de usuarios ficticios.

Luego, usa **async/await** para esperar la respuesta y mostrarla en consola.

### Requisitos:
- Usar una función asíncrona.
- Simular una carga de datos con `setTimeout`.
- Retornar una promesa.
- Usar `async/await` para consumir la función.

**Ejemplo esperado:**
```js
async function ejecutarCarga() {
  let datos = await cargarDatos();
  console.log("Usuarios cargados:", datos);
}

ejecutarCarga();
```

