# React The start
## Previo a entender lo que es React >> un par de detalles : 
### El frontend tiene varios **patrones de diseño** que ayudan a organizar mejor el código, hacerlo más escalable y mantenible. Acá te dejo algunos de los más importantes:  

### 🔹 **1. Patrón Contenedor-Presentacional**  
**¿Qué problema resuelve?**  
Evita que los componentes tengan demasiada responsabilidad, separando la lógica de negocio de la presentación.  

**¿Cómo funciona?**  
- **Componentes Presentacionales** → Se encargan de la UI, reciben props y renderizan sin lógica de negocio.  
- **Componentes Contenedores** → Manejan la lógica de estado, llamados a APIs y pasan datos a los presentacionales.  

**Ejemplo en React:**  
```tsx
// Contenedor
const UserContainer = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/api/user")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  return <UserProfile user={user} />;
};

// Presentacional
const UserProfile = ({ user }) => (
  <div>
    <h2>{user?.name}</h2>
    <p>{user?.email}</p>
  </div>
);
```

---

### 🔹 **2. Patrón de Hooks Personalizados (React)**  
**¿Qué problema resuelve?**  
Evita repetir lógica de estado y efectos en varios componentes.  

**¿Cómo funciona?**  
Encapsula lógica en un **custom hook** reutilizable.  

**Ejemplo:**  
```tsx
const useFetchUser = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/api/user")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  return user;
};

// Uso en cualquier componente
const UserComponent = () => {
  const user = useFetchUser();
  return <div>{user?.name}</div>;
};
```

---

### 🔹 **3. Atomic Design**  
**¿Qué problema resuelve?**  
Permite construir interfaces modulares y escalables dividiendo los componentes en niveles.  

**¿Cómo funciona?**  
Se basa en 5 niveles:  
1. **Átomos** → Botones, inputs, etiquetas (las piezas más básicas).  
2. **Moléculas** → Conjunto de átomos, como un formulario simple.  
3. **Organismos** → Secciones completas, como un header con navbar.  
4. **Templates** → Estructuras de página sin datos específicos.  
5. **Páginas** → La versión final con datos reales.  

---

### 🔹 **4. Patrón Singleton (Gestión de Estado - Redux, Signals, Context API, etc.)**  
**¿Qué problema resuelve?**  
Evita múltiples instancias de un mismo estado compartido en la aplicación.  

**¿Cómo funciona?**  
Crea una única instancia de un **store** o **servicio** para compartir datos en toda la app.  

Ejemplo con Zustand:  
```tsx
import create from "zustand";

const useUserStore = create((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));

const UserProfile = () => {
  const user = useUserStore((state) => state.user);
  return <p>{user?.name}</p>;
};
```

---

### 🔹 **5. Patrón Proxy (Lazy Loading & Caching)**  
**¿Qué problema resuelve?**  
Optimiza llamadas a la API evitando solicitudes innecesarias o cargando datos bajo demanda.  

**Ejemplo en JavaScript:**  
```js
const userService = {
  data: null,

  async fetchUser() {
    if (!this.data) {
      console.log("Llamando API...");
      const response = await fetch("/api/user");
      this.data = await response.json();
    }
    return this.data;
  },
};

// Uso
userService.fetchUser().then(console.log);
```

---

### 🔹 **6. Patrón Observer (Eventos y Reactividad)**  
**¿Qué problema resuelve?**  
Permite que varios componentes reaccionen a cambios de estado sin acoplarse entre sí.  

Ejemplo con **RxJS (Angular, React con signals)**:  
```ts
import { BehaviorSubject } from "rxjs";

const userSubject = new BehaviorSubject(null);

// Suscripción en cualquier componente
userSubject.subscribe((user) => console.log("Nuevo usuario:", user));

// Cambio de estado
userSubject.next({ name: "Juan" });
```

---

### 🔹 **7. Patrón Factory (Creación de Componentes o Servicios)**  
**¿Qué problema resuelve?**  
Facilita la creación de instancias de objetos sin exponer la lógica de construcción.  

Ejemplo en React con componentes dinámicos:  
```tsx
const createButton = (type) => {
  if (type === "primary") return <button className="btn-primary">Click</button>;
  if (type === "secondary") return <button className="btn-secondary">Click</button>;
};

const App = () => createButton("primary");
```

---

### **Conclusión**  
El frontend tiene varios patrones de diseño, pero la clave está en elegir el adecuado según el contexto. **Si tenés un frontend grande y modular, patrones como Contenedor-Presentacional, Atomic Design y Singleton te van a salvar la vida.** Si estás más en el mundo de la reactividad (Angular, React Signals, RxJS), el Observer es clave.  

---

En **React**, los enfoques **declarativo** e **imperativo** son dos formas de escribir código, cada uno con sus ventajas y casos de uso.  

---

### 🔵 **Programación Declarativa (Enfoque de React)**
Es una forma de escribir código en la que describimos **qué queremos lograr**, sin preocuparnos por **cómo hacerlo paso a paso**. React utiliza este enfoque porque permite escribir código más limpio  y fácil de mantener.  

✅ **Ejemplo en React (Declarativo)**  
```jsx
function App() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  );
}
```
🔹 **Explicación:**  
- No nos preocupamos por manipular el DOM manualmente.  
- Simplemente **declaramos** que queremos que el contador se actualice cuando el usuario haga clic.  
- React se encarga de actualizar la UI automáticamente.  

---

### 🔴 **Programación Imperativa**  
Aquí le decimos al programa **cómo hacer algo paso a paso**. En lugar de describir el resultado deseado, indicamos cada acción específica que debe ejecutarse.  

❌ **Ejemplo en JavaScript Puro (Imperativo)**  
```js
let count = 0;
const button = document.createElement("button");
button.innerText = "Incrementar";
document.body.appendChild(button);

const p = document.createElement("p");
p.innerText = `Contador: ${count}`;
document.body.appendChild(p);

button.addEventListener("click", () => {
  count++;
  p.innerText = `Contador: ${count}`;
});
```
🔹 **Explicación:**  
- Manipulamos el DOM directamente.  
- Creamos elementos manualmente (`document.createElement`).  
- Modificamos el texto de los elementos de forma explícita.  

---

### 🆚 **Comparación**
| Característica | Declarativa (React) | Imperativa (JS Puro) |
|--------------|------------------|----------------|
| Estilo de código | Describe qué queremos | Explica cómo hacerlo paso a paso |
| Mantenimiento | Más fácil | Más difícil, propenso a errores |
| Performance | Optimizado por React | Puede ser más costoso si no se maneja bien |
| Manipulación del DOM | Automática | Manual |

---

### 💡 **Conclusión**
React se basa en la **programación declarativa**, lo que facilita el desarrollo de interfaces de usuario al abstraer la manipulación del DOM. Sin embargo, en ciertos casos, la programación **imperativa** sigue siendo útil, por ejemplo, cuando trabajamos con APIs del navegador como `Canvas`, `WebGL`, o ciertas optimizaciones de rendimiento.
