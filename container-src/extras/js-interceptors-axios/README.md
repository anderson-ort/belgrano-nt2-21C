# Clase: Implementación de Interceptores en React con Axios

## Objetivos de la clase:
- Entender qué son los interceptores en Axios y cómo utilizarlos.
- Aprender a manejar respuestas y errores globalmente con interceptores.
- Aplicar interceptores en una aplicación React para manejar autenticación, manejo de errores y más.

## Pre-requisitos:
- Conocimientos básicos de React.
- Familiaridad con el uso de Axios para realizar peticiones HTTP.
- Conocimiento de las promesas y async/await en JavaScript.

## Conceptos clave:
### ¿Qué son los interceptores en Axios?
Los interceptores permiten ejecutar código o modificar una solicitud o respuesta antes de que se envíe o después de que se reciba. Son útiles para:
- Añadir cabeceras de autorización.
- Manejar respuestas y errores globalmente.
- Hacer transformaciones en las respuestas.

### Tipos de interceptores:
1. **Interceptors de solicitud**: Se ejecutan antes de que la solicitud sea enviada al servidor. Útil para agregar cabeceras o manipular datos de la solicitud.
2. **Interceptors de respuesta**: Se ejecutan cuando se recibe una respuesta del servidor. Puedes utilizarlos para manejar errores globalmente o formatear las respuestas.

---

## Ejemplo Práctico

### Paso 1: Instalar Axios

Si aún no tienes Axios en tu proyecto, puedes instalarlo con el siguiente comando:

```bash
npm install axios
```

### Paso 2: Crear un archivo `axios.js` para configurar Axios

En el archivo `src/axios.js`, configuraremos Axios con un interceptor de solicitud y uno de respuesta.

```javascript
import axios from 'axios';

// Crear una instancia de Axios
const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/', // URL base para las peticiones
});

// Interceptor de solicitud
instance.interceptors.request.use(
  (config) => {
    // Aquí puedes agregar un token de autenticación a cada solicitud
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptor de respuesta
instance.interceptors.response.use(
  (response) => {
    // Modificar la respuesta antes de devolverla
    return response;
  },
  (error) => {
    // Manejo global de errores
    if (error.response) {
      switch (error.response.status) {
        case 401:
          alert('No autorizado. Inicia sesión.');
          break;
        case 500:
          alert('Error interno del servidor.');
          break;
        default:
          alert('Algo salió mal.');
          break;
      }
    } else {
      alert('Verifica tu conexión a Internet.');
    }
    return Promise.reject(error);
  }
);

export default instance;
```

### Paso 3: Usar Axios en un componente React

Ahora, vamos a crear un componente React que haga una solicitud GET a la API.

```javascript
import React, { useEffect, useState } from 'react';
import axios from './axios'; // Importamos la instancia de Axios

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Hacer la solicitud GET para obtener los usuarios
    axios.get('users')
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h1>Lista de Usuarios</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
```

### Explicación del código:

1. **Instancia de Axios**: Creamos una instancia de Axios personalizada para incluir interceptores de solicitud y respuesta.
2. **Interceptor de solicitud**: Antes de enviar cada solicitud, comprobamos si hay un token de autenticación en el almacenamiento local y lo añadimos a las cabeceras.
3. **Interceptor de respuesta**: Después de recibir la respuesta, si ocurre un error (como un error 401 o 500), mostramos una alerta global.
4. **Componente React**: En el componente `UserList`, usamos Axios para hacer una solicitud GET a la API y mostrar los usuarios en una lista.


## Conclusión
Los interceptores son herramientas poderosas que permiten manipular las solicitudes y respuestas de Axios de manera centralizada. Esto es muy útil para tareas como la autenticación, el manejo de errores globales y la modificación de datos antes de que lleguen a los componentes.
