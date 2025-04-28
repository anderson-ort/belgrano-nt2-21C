# Clase: Desarrollo Frontend Avanzado con React

## Objetivos de Aprendizaje

En esta clase, exploraremos conceptos avanzados de desarrollo frontend con React, incluyendo:
- Implementación de autenticación (Login/Signup) con Firebase
- Navegación con React Router
- Gestión de estado global con Zustand
- Conversión de aplicaciones React en PWA (Progressive Web Applications)
- Introducción a React Native

## 1. Autenticación con React y Firebase

Firebase ofrece una solución completa para implementar autenticación en aplicaciones React, permitiendo login/signup con email/contraseña, redes sociales y más.

### Ejemplo: Configuración de Firebase

```javascript
// src/firebase/config.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };

```

### Ejemplo: Componentes de Login y Signup

```jsx
// src/components/Login.jsx
import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/config';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/dashboard');
    } catch (error) {
      setError('Error al iniciar sesión: ' + error.message);
    }
  };

  return (
    <div className="login-container">
      <h2>Iniciar Sesión</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
            required 
          />
        </div>
        <div>
          <label>Contraseña:</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
            required 
          />
        </div>
        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
}

// src/components/Signup.jsx
import { useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../firebase/config';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCredential.user, {
        displayName: name
      });
      navigate('/dashboard');
    } catch (error) {
      setError('Error al registrarse: ' + error.message);
    }
  };

  return (
    <div className="signup-container">
      <h2>Registrarse</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSignup}>
        <div>
          <label>Nombre:</label>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)}
            required 
          />
        </div>
        <div>
          <label>Email:</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
            required 
          />
        </div>
        <div>
          <label>Contraseña:</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
            required 
          />
        </div>
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
}

```

## 2. Navegación con React Router

React Router es la biblioteca de enrutamiento estándar para React, que permite crear aplicaciones de página única (SPA) con navegación entre componentes.

### Ejemplo: Configuración básica de React Router

```jsx
// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase/config';

// Componentes
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';

export default function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
    <Router>
      <Navbar user={user} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute user={user}>
              <Dashboard />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </Router>
  );
}

// src/components/ProtectedRoute.jsx
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ user, children }) {
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

// src/components/Navbar.jsx
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/config';

export default function Navbar({ user }) {
  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Mi Aplicación</Link>
      </div>
      <div className="navbar-menu">
        <Link to="/">Inicio</Link>
        {user ? (
          <>
            <Link to="/dashboard">Dashboard</Link>
            <button onClick={handleLogout}>Cerrar Sesión</button>
          </>
        ) : (
          <>
            <Link to="/login">Iniciar Sesión</Link>
            <Link to="/signup">Registrarse</Link>
          </>
        )}
      </div>
    </nav>
  );
}

```

## 3. Gestión de Estado Global con Zustand

Zustand es una biblioteca de gestión de estado minimalista pero poderosa que utiliza los hooks de React, ofreciendo una alternativa más ligera a Redux.

### Ejemplo: Creación de un store con Zustand

```javascript
// src/store/useAuthStore.js
import { create } from 'zustand';
import { auth } from '../firebase/config';
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged 
} from 'firebase/auth';

const useAuthStore = create((set) => ({
  user: null,
  loading: true,
  error: null,
  
  // Inicialización del store
  init: () => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      set({ user, loading: false });
    });
    return unsubscribe;
  },
  
  // Login
  login: async (email, password) => {
    try {
      set({ loading: true, error: null });
      await signInWithEmailAndPassword(auth, email, password);
      // No necesitamos actualizar el usuario aquí, ya que onAuthStateChanged lo hará
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },
  
  // Signup
  signup: async (email, password) => {
    try {
      set({ loading: true, error: null });
      await createUserWithEmailAndPassword(auth, email, password);
      // onAuthStateChanged actualizará el usuario
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },
  
  // Logout
  logout: async () => {
    try {
      set({ loading: true, error: null });
      await signOut(auth);
      // onAuthStateChanged actualizará el usuario a null
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },
  
  // Limpiar errores
  clearError: () => set({ error: null })
}));

export default useAuthStore;

// src/store/useTaskStore.js - Un ejemplo adicional de store
import { create } from 'zustand';

const useTaskStore = create((set) => ({
  tasks: [],
  loading: false,
  error: null,
  
  // Cargar tareas
  fetchTasks: async (userId) => {
    set({ loading: true });
    try {
      // Aquí iría la lógica para obtener tareas de Firebase o API
      const mockTasks = [
        { id: '1', title: 'Completar proyecto', completed: false, userId },
        { id: '2', title: 'Estudiar React Router', completed: true, userId },
        { id: '3', title: 'Aprender Zustand', completed: false, userId }
      ];
      
      set({ tasks: mockTasks, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },
  
  // Añadir tarea
  addTask: (newTask) => set((state) => ({ 
    tasks: [...state.tasks, newTask] 
  })),
  
  // Completar tarea
  toggleTask: (taskId) => set((state) => ({
    tasks: state.tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    )
  })),
  
  // Eliminar tarea
  deleteTask: (taskId) => set((state) => ({
    tasks: state.tasks.filter(task => task.id !== taskId)
  }))
}));

export default useTaskStore;

```

### Ejemplo: Uso de Zustand en componentes

```jsx
// src/components/Login.jsx (Refactorizado para usar Zustand)
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuthStore from '../store/useAuthStore';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  
  const { login, user, error, clearError } = useAuthStore();
  
  useEffect(() => {
    // Redirigir si el usuario ya está autenticado
    if (user) {
      navigate('/dashboard');
    }
  }, [user, navigate]);
  
  const handleLogin = async (e) => {
    e.preventDefault();
    await login(email, password);
  };
  
  return (
    <div className="login-container">
      <h2>Iniciar Sesión</h2>
      {error && (
        <div className="error">
          <p>{error}</p>
          <button onClick={clearError}>Cerrar</button>
        </div>
      )}
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
            required 
          />
        </div>
        <div>
          <label>Contraseña:</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
            required 
          />
        </div>
        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
}

// src/pages/Dashboard.jsx
import { useEffect } from 'react';
import useAuthStore from '../store/useAuthStore';
import useTaskStore from '../store/useTaskStore';

export default function Dashboard() {
  const { user } = useAuthStore();
  const { tasks, loading, error, fetchTasks, toggleTask, deleteTask } = useTaskStore();
  
  useEffect(() => {
    if (user) {
      fetchTasks(user.uid);
    }
  }, [user, fetchTasks]);
  
  if (loading) return <div>Cargando tareas...</div>;
  if (error) return <div>Error: {error}</div>;
  
  return (
    <div className="dashboard">
      <h2>Bienvenido, {user?.displayName || 'Usuario'}</h2>
      <h3>Tus Tareas</h3>
      
      <ul className="task-list">
        {tasks.map(task => (
          <li key={task.id} className={task.completed ? 'completed' : ''}>
            <input 
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
            />
            <span>{task.title}</span>
            <button onClick={() => deleteTask(task.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
      
      {tasks.length === 0 && <p>No tienes tareas pendientes.</p>}
    </div>
  );
}

```

## 4. Conversión de React App a PWA

Una Progressive Web App (PWA) ofrece una experiencia de usuario similar a una aplicación nativa pero usando tecnologías web.

### Pasos para convertir una aplicación React en PWA:

1. **Crear un Service Worker**
2. **Configurar un Manifest Web**
3. **Implementar características de PWA como caching**
4. **Configurar la instalabilidad**

```javascript
// public/manifest.json
{
  "short_name": "Mi App",
  "name": "Mi Aplicación React PWA",
  "icons": [
    {
      "src": "favicon.ico",
      "sizes": "64x64",
      "type": "image/x-icon"
    },
    {
      "src": "logo192.png",
      "type": "image/png",
      "sizes": "192x192"
    },
    {
      "src": "logo512.png",
      "type": "image/png",
      "sizes": "512x512"
    }
  ],
  "start_url": ".",
  "display": "standalone",
  "theme_color": "#000000",
  "background_color": "#ffffff"
}

// public/service-worker.js
const CACHE_NAME = 'mi-app-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/static/js/main.chunk.js',
  '/static/js/0.chunk.js',
  '/static/js/bundle.js',
  '/static/css/main.chunk.css',
  '/manifest.json',
  '/favicon.ico',
  '/logo192.png',
  '/logo512.png'
];

// Instalación del Service Worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Cache abierto');
        return cache.addAll(urlsToCache);
      })
  );
});

// Activación del Service Worker
self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Intercepta las peticiones
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Cache hit - devuelve la respuesta desde cache
        if (response) {
          return response;
        }
        
        // Clonar la petición
        const fetchRequest = event.request.clone();
        
        return fetch(fetchRequest).then(
          (response) => {
            // Comprueba si la respuesta es válida
            if(!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }
            
            // Clonar la respuesta
            const responseToCache = response.clone();
            
            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, responseToCache);
              });
              
            return response;
          }
        );
      })
  );
});

// src/index.js - Registrar el Service Worker
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Registra el service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then(registration => {
        console.log('Service Worker registrado con éxito:', registration);
      })
      .catch(error => {
        console.log('Error al registrar el Service Worker:', error);
      });
  });
}

```

## 5. Introducción a React Native

React Native es un framework que permite desarrollar aplicaciones móviles nativas para iOS y Android usando React.

### Ejemplo básico de React Native:

```jsx
// App.js
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView, FlatList } from 'react-native';

export default function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [taskIdCounter, setTaskIdCounter] = useState(1);

  const addTask = () => {
    if (task.trim() !== '') {
      const newTask = {
        id: taskIdCounter.toString(),
        text: task,
        completed: false
      };
      
      setTasks([...tasks, newTask]);
      setTask('');
      setTaskIdCounter(taskIdCounter + 1);
    }
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map(item => 
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(item => item.id !== id));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Lista de Tareas</Text>
      </View>
      
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={task}
          onChangeText={setTask}
          placeholder="Agregar nueva tarea"
        />
        <TouchableOpacity style={styles.addButton} onPress={addTask}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
      
      <FlatList
        data={tasks}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.taskItem}>
            <TouchableOpacity onPress={() => toggleTask(item.id)}>
              <Text 
                style={[
                  styles.taskText, 
                  item.completed && styles.completedTask
                ]}
              >
                {item.text}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.deleteButton} 
              onPress={() => deleteTask(item.id)}
            >
              <Text style={styles.deleteButtonText}>X</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#4285F4',
    padding: 20,
    alignItems: 'center',
  },
  headerText: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 20,
  },
  input: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
    fontSize: 16,
  },
  addButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: 44,
  },
  addButtonText: {
    color: '#ffffff',
    fontSize: 24,
  },
  taskItem: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 10,
  },
  taskText: {
    fontSize: 16,
    flex: 1,
  },
  completedTask: {
    textDecorationLine: 'line-through',
    color: '#888888',
  },
  deleteButton: {
    backgroundColor: '#FF5252',
    padding: 8,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: 32,
    height: 32,
  },
  deleteButtonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

```

### Principales diferencias entre React y React Native:

1. **Componentes**: React utiliza elementos HTML mientras que React Native utiliza componentes nativos.
2. **Estilos**: React usa CSS, mientras que React Native usa un sistema de estilos similar a CSS-in-JS con algunas limitaciones.
3. **Navegación**: React Native tiene soluciones específicas como React Navigation.
4. **Plataforma**: React Native compila a código nativo para iOS y Android.

## Ejercicios Prácticos

### Ejercicio 1: React Router Dom
Crear una aplicación con al menos 5 rutas diferentes, incluyendo rutas anidadas y parámetros.

**Instrucciones:**
1. Configurar React Router v6
2. Crear páginas para: Home, About, Products, Product Detail y Contact
3. Implementar rutas anidadas en Products
4. Usar parámetros en Product Detail (productId)
5. Crear una navegación y breadcrumbs

### Ejercicio 2: Zustand (Estado Global)
Crear una aplicación de lista de compras con Zustand para gestionar el estado.

**Instrucciones:**
1. Crear un store para productos con las acciones: añadir, eliminar, marcar como comprado
2. Implementar filtros para mostrar: todos, comprados, pendientes
3. Guardar el estado en localStorage
4. Agregar funcionalidad para categorías

### Ejercicio 3: Login/Signup con Firebase
Implementar autenticación completa con Firebase.

**Instrucciones:**
1. Configurar Firebase en la aplicación
2. Crear formularios de login y registro
3. Implementar autenticación con email/password
4. Agregar login con Google
5. Crear rutas protegidas
6. Gestionar la persistencia de la sesión

## Bibliografía

### React Router
- [Documentación oficial de React Router](https://reactrouter.com/en/main)
- Aceto, T. (2023). *React Router 6: The Complete Guide*. Packt Publishing.
- [Tutorial completo de React Router v6](https://blog.logrocket.com/react-router-v6-guide/)

### Zustand
- [Documentación oficial de Zustand](https://github.com/pmndrs/zustand)
- Banks, A., & Porcello, E. (2023). *Learning React: A Hands-On Guide to Building Web Applications Using React and Redux*. O'Reilly Media.
- [Zustand: Estado simple en React](https://dev.to/franciscomendes10866/zustand-a-lightweight-redux-alternative-3hei)

### Firebase Auth
- [Documentación oficial de Firebase Authentication](https://firebase.google.com/docs/auth)
- Wieruch, R. (2023). *The Road to React with Firebase*. Self-published.
- [Guía completa de autenticación con Firebase](https://firebase.google.com/docs/auth/web/start)

### PWA
- [Web.dev - Progressive Web Apps](https://web.dev/progressive-web-apps/)
- Ater, T. (2023). *Building Progressive Web Apps: Bringing the Power of Native to the Browser*. O'Reilly Media.
- [MDN Web Docs - Service Workers API](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API)

### React Native
- [Documentación oficial de React Native](https://reactnative.dev/docs/getting-started)
- Dabit, N. (2022). *Full Stack React Native: The Complete Guide to React Native*. Self-published.
- [Expo Documentation](https://docs.expo.dev/)