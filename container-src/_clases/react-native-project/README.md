# Seteando el entorno de trabajo

[Expo](https://docs.expo.dev/get-started/set-up-your-environment/)
(Optional)[ Install Android](https://developer.android.com/studio)
[Set Up para tener un virtual device](https://docs.expo.dev/get-started/set-up-your-environment/?platform=android&device=simulated)


[React-Native Dev Documentation](https://reactnative.dev/)

[EXPO GO](https://docs.expo.dev/tutorial/introduction/)


```sh
#para generar la app
npx create-expo-app@latest --template
```

--- 

Entender FileBased Routing de React Native (principalmente con Expo Router), que es muy similar al de Next.js:

## Estructura Básica

El routing se basa en la estructura de carpetas dentro del directorio `app/`. Cada archivo automáticamente se convierte en una ruta.

## Convenciones de Nombres

### **Rutas Dinámicas con `[]`**
```
app/
  user/
    [id].js          → /user/123, /user/abc
    [...slug].js     → /user/a/b/c (catch-all)
```

- `[id].js` captura un parámetro dinámico
- `[...slug].js` captura múltiples segmentos (catch-all route)

### **Layouts con `_layout`**
```
app/
  _layout.js         → Layout raíz para toda la app
  (tabs)/
    _layout.js       → Layout específico para el grupo tabs
    home.js
    profile.js
```

Los `_layout.js` envuelven a todas las rutas hijas y permiten:
- Navegación persistente (tabs, drawer)
- Headers compartidos
- Estado compartido
- Autenticación

### **Grupos de Rutas con `()`**
```
app/
  (auth)/
    login.js         → /login
    register.js      → /register
  (tabs)/
    home.js          → /home
    profile.js       → /profile
```

Los paréntesis `()` crean grupos lógicos que:
- **No afectan la URL** (no aparecen en la ruta)
- Permiten organizar archivos
- Pueden tener sus propios layouts

### **Rutas Privadas con `_`**
```
app/
  _components/       → No se convierte en ruta
  _utils.js          → No se convierte en ruta
  home.js            → /home (sí es ruta)
```

## Ejemplo Práctico

```
app/
  _layout.js                    → Layout raíz
  index.js                      → / (pantalla inicial)
  
  (auth)/
    _layout.js                  → Layout para auth
    login.js                    → /login
    register.js                 → /register
  
  (tabs)/
    _layout.js                  → Tab navigator
    index.js                    → /
    profile.js                  → /profile
    
    products/
      _layout.js                → Layout para productos
      index.js                  → /products
      [id].js                   → /products/123
      create.js                 → /products/create
  
  modal.js                      → /modal (presentación modal)
  +not-found.js                 → 404 page
```

## Ventajas del File-Based Routing

1. **Organización clara**: La estructura de archivos refleja la navegación
2. **Menos configuración**: No necesitas configurar rutas manualmente
3. **Code splitting automático**: Cada ruta se carga por separado
4. **Layouts anidados**: Fácil manejo de navegación compleja
---


## **Stack Navigation**
Es la navegación básica donde las pantallas se apilan una sobre otra.

```javascript
// app/_layout.js
import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Home' }} />
      <Stack.Screen name="profile" options={{ title: 'Profile' }} />
    </Stack>
  );
}
```

**Características:**
- Navegación hacia adelante/atrás
- Botón "Back" automático
- Transiciones de deslizamiento
- Ideal para flujos lineales

## **Tab Navigation**
Pestañas en la parte inferior para cambiar entre secciones principales.

```javascript
// app/(tabs)/_layout.js
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen 
        name="index" 
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <HomeIcon color={color} />
        }} 
      />
      <Tabs.Screen 
        name="profile" 
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <ProfileIcon color={color} />
        }} 
      />
    </Tabs>
  );
}
```

**Características:**
- Navegación horizontal entre secciones
- Acceso rápido a funciones principales
- Estado persistente entre tabs
- Iconos y badges en pestañas

## **Screen**
No es un navegador, sino una configuración individual para cada pantalla.

```javascript
// Dentro de Stack o Tabs
<Stack.Screen 
  name="modal" 
  options={{ 
    presentation: 'modal',
    headerShown: false 
  }} 
/>
```

## **Otros Tipos de Navegación**

### **1. Drawer Navigation**
Menú lateral deslizable.

```javascript
// app/_layout.js
import { Drawer } from 'expo-router/drawer';

export default function DrawerLayout() {
  return (
    <Drawer>
      <Drawer.Screen name="home" options={{ title: 'Inicio' }} />
      <Drawer.Screen name="settings" options={{ title: 'Configuración' }} />
    </Drawer>
  );
}
```

### **2. Modal Presentation**
Pantallas que aparecen como modales.

```javascript
// app/_layout.js
<Stack>
  <Stack.Screen name="index" />
  <Stack.Screen 
    name="modal" 
    options={{ 
      presentation: 'modal',
      headerTitle: 'Modal Screen'
    }} 
  />
</Stack>
```

### **3. Nested Navigation**
Combinación de múltiples navegadores.

```javascript
// Estructura de archivos:
app/
  _layout.js          // Stack principal
  (tabs)/
    _layout.js        // Tab navigator
    index.js          // Tab 1
    profile.js        // Tab 2
    (profile)/
      _layout.js      // Stack dentro del tab
      edit.js
      settings.js
  modal.js            // Modal global
```

## **Ejemplo Práctico Completo**## 
**Navegación Programática**

```javascript
import { router } from 'expo-router';

// Navegar a una pantalla
router.push('/recipe/123');

// Navegar y reemplazar (no se puede volver)
router.replace('/login');

// Volver atrás
router.back();

// Volver al inicio del stack
router.dismissAll();

// Navegar con parámetros
router.push({
  pathname: '/recipe/[id]',
  params: { id: '123', category: 'italiana' }
});
```

## **Cuándo Usar Cada Tipo**

| Tipo | Uso Ideal | Ejemplo |
|------|-----------|---------|
| **Stack** | Flujos lineales, detalles | Home → Producto → Checkout |
| **Tabs** | Secciones principales | Home, Buscar, Perfil, Carrito |
| **Drawer** | Navegación secundaria | Configuración, Ayuda, Categorías |
| **Modal** | Acciones temporales | Filtros, Confirmaciones, Formularios |

## **Ventajas del File-Based Routing**

1. **Organización visual**: La estructura de carpetas refleja la navegación
2. **Menos configuración**: No necesitas definir rutas manualmente  
3. **Tipado automático**: TypeScript infiere las rutas automáticamente
4. **Lazy loading**: Las pantallas se cargan solo cuando se necesitan
5. **Deep linking**: URLs amigables automáticamente
---
