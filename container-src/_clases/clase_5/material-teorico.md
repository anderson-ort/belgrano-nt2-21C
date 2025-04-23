# Desarrollo con React Native y Comparación con ReactJS

## 1. Introducción a React Native

### ¿Qué es React Native?
- **Framework basado en React**
- Permite construir aplicaciones móviles usando **solo código JavaScript**
- Filosofía: "Learn once, write anywhere" (Aprende una vez, escribe en cualquier lugar)
- Soporta iOS y Android

## 2. ¿Cómo funciona React Native?

### Arquitectura y funcionamiento
- Funciona a base de código JavaScript
  - Es transpilado y minificado
- Separa hilo de trabajo para UI, Layout y JavaScript
- Comunicación asíncrona mediante un "puente"
  - Hilo de ejecución JS hace solicitud al UI para mostrar elementos
  - JS puede ser bloqueado y el UI continuará su trabajo

## 3. React Native vs ReactJS

### Similitudes fundamentales
- Ambos usan JSX y componentes
- Utilizan los mismos Hooks (useState, useEffect, etc.)
- Filosofía de React (componentes, props, estado)
- Ciclo de vida similar

### Diferencias principales

| Característica | ReactJS | React Native |
|---------------|---------|--------------|
| **Renderizado** | DOM Virtual → DOM del navegador | Virtual DOM → Componentes nativos |
| **Plataforma** | Web (navegadores) | iOS y Android |
| **Elementos base** | `<div>`, `<span>`, `<p>`, etc. | `<View>`, `<Text>`, `<ScrollView>`, etc. |
| **Estilos** | CSS (clases, archivos .css) | StyleSheet (objetos JavaScript) |
| **Navegación** | React Router, etc. | React Navigation, etc. |
| **Eventos** | onClick, onChange, etc. | onPress, onChangeText, etc. |

## 4. Componentes: React Native vs ReactJS

### Ejemplo comparativo: Contador

#### ReactJS:
```jsx
// Contador en ReactJS
import React, { useState } from 'react';

const ContadorReactJS = () => {
  const [contador, setContador] = useState(0);
  
  return (
    <div className="contador-container">
      <p>Contador: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>
        Incrementar
      </button>
    </div>
  );
};

// Estilos en CSS
// .contador-container {
//   padding: 20px;
//   text-align: center;
// }
```

#### React Native:
```jsx
// Contador en React Native
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ContadorReactNative = () => {
  const [contador, setContador] = useState(0);
  
  return (
    <View style={styles.container}>
      <Text>Contador: {contador}</Text>
      <Button 
        title="Incrementar" 
        onPress={() => setContador(contador + 1)} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  }
});
```

## 5. Hooks en React y React Native

Los hooks funcionan de manera idéntica en React y React Native. La principal diferencia está en cómo se utilizan con los componentes específicos de cada plataforma.

### useState
- Funcionalidad idéntica en ambas plataformas
- Diferencias solo en la presentación del estado

### useEffect
- Mismo comportamiento en ambas plataformas
- Puede interactuar con APIs específicas de cada entorno

#### ReactJS:
```jsx
import React, { useState, useEffect } from 'react';

const FetchDataReactJS = () => {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(json => setData(json));
  }, []);
  
  return (
    <div>
      {data ? <p>{data.message}</p> : <p>Cargando...</p>}
    </div>
  );
};
```

#### React Native:
```jsx
import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

const FetchDataReactNative = () => {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(json => setData(json));
  }, []);
  
  return (
    <View>
      {data ? <Text>{data.message}</Text> : <Text>Cargando...</Text>}
    </View>
  );
};
```

### useContext
- Implementación idéntica en ambas plataformas
- Usado para gestión de estado global

#### ReactJS:
```jsx
import React, { createContext, useContext } from 'react';

const ThemeContext = createContext('light');

const ThemedComponentReactJS = () => {
  const theme = useContext(ThemeContext);
  
  return (
    <div style={{ 
      backgroundColor: theme === 'dark' ? '#333' : '#fff',
      color: theme === 'dark' ? '#fff' : '#333'
    }}>
      Tema actual: {theme}
    </div>
  );
};
```

#### React Native:
```jsx
import React, { createContext, useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ThemeContext = createContext('light');

const ThemedComponentReactNative = () => {
  const theme = useContext(ThemeContext);
  
  return (
    <View style={[
      styles.container,
      { backgroundColor: theme === 'dark' ? '#333' : '#fff' }
    ]}>
      <Text style={{ color: theme === 'dark' ? '#fff' : '#333' }}>
        Tema actual: {theme}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  }
});
```

## 6. Estilos: CSS vs StyleSheet

### ReactJS: CSS
```jsx
// ReactJS con CSS
const ComponenteReactJS = () => {
  return (
    <div className="container">
      <h1 className="title">Título</h1>
      <p className="description">Descripción</p>
    </div>
  );
};

// En un archivo .css
// .container {
//   padding: 20px;
//   background-color: #f0f0f0;
// }
// .title {
//   font-size: 24px;
//   color: #333;
// }
// .description {
//   font-size: 16px;
//   color: #666;
// }
```

### React Native: StyleSheet
```jsx
// React Native con StyleSheet
import { View, Text, StyleSheet } from 'react-native';

const ComponenteReactNative = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Título</Text>
      <Text style={styles.description}>Descripción</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    color: '#333',
  },
  description: {
    fontSize: 16,
    color: '#666',
  }
});
```

## 7. Manejo de Eventos

### ReactJS vs React Native
| Evento | ReactJS | React Native |
|--------|---------|--------------|
| Click/Tap | `onClick` | `onPress` |
| Cambio | `onChange` | `onChangeText` |
| Focus | `onFocus` | `onFocus` |
| Blur | `onBlur` | `onBlur` |
| Submit | `onSubmit` | `onSubmitEditing` |

## 8. Expo: Herramienta de desarrollo

### ¿Qué es Expo?
- Plataforma para construir aplicaciones React (web y native)
- Set de herramientas que acelera el desarrollo de React Native

### Componentes de Expo:
1. **Snack**: Ejecuta aplicaciones React Native en la web
2. **XDE**: Interfaz gráfica para ejecutar, compartir o publicar apps
3. **CLI**: Líneas de comando que permite ejecutar, compartir o publicar apps
4. **Client (mobile)**: Permite ejecutar la app en el celular mientras se desarrolla

## 9. Instalación y configuración

### Requisitos:
- Node.js ([Descargar](https://nodejs.org/en/download/))
- NPM (viene con la instalación de Node.js)

### Instalación de Expo:
```bash
npm install -g expo-cli
```

### Crear mi primera app:
```bash
expo init my-app
cd my-app
npm start
```

## Actividad práctica

1. Crear una aplicación simple tanto en ReactJS como en React Native:
   - Implementar un contador usando useState
   - Implementar un componente que consuma una API usando useEffect
   - Implementar un sistema de tema claro/oscuro usando useContext
   - Comparar las diferencias en la implementación entre ambas plataformas

2. Para React Native específicamente:
   - Usar StyleSheet para estilos
   - Implementar componentes táctiles
   - Probar la app en un dispositivo usando Expo Go

## Conclusiones

- React Native permite a los desarrolladores de React crear aplicaciones móviles nativas
- Los conceptos fundamentales son los mismos, pero los componentes y estilos difieren
- Los hooks funcionan idénticamente en ambas plataformas
- La curva de aprendizaje es suave para desarrolladores familiarizados con React

## Recursos útiles
- [Documentación oficial de React Native](https://reactnative.dev/docs/getting-started)
- [Documentación de Expo](https://docs.expo.dev/)
- [Documentación de React](https://reactjs.org/docs/getting-started.html)
- [Repositorio de ejemplos](https://github.com/react-native-community)