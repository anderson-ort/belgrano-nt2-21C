# Progressive Web Applications (PWA) vs React Native

Las Progressive Web Applications (PWA) y React Native son dos enfoques modernos para el desarrollo de aplicaciones, cada uno con características distintivas. Aquí una clase estructurada para compararlas:

## 📌 Definiciones y Componentes Clave

### 1. **PWA (Progressive Web Application)**

Aplicaciones web que se comportan como aplicaciones nativas utilizando tecnologías web estándar (HTML, CSS, JavaScript).

**Componentes principales:**

* **Manifest.json**: Define metadatos como nombre, iconos y tema de color para facilitar la instalación.
* **Service Workers**: Scripts que corren en segundo plano para funciones como caché offline y notificaciones push.
* **App Shell Model**: Estructura básica almacenada en caché para una carga inicial rápida.

**Fundamentos:**

* Funciona en cualquier navegador moderno (multiplataforma).
* Soporta actualizaciones automáticas mediante service workers.
* Requiere HTTPS para seguridad.

---

### 2. **React Native**

Framework creado por Meta que permite desarrollar aplicaciones móviles nativas utilizando JavaScript y React.

**Componentes principales:**

* **Componentes básicos**: `View`, `Text`, `Image`, `ScrollView`, entre otros .
* **APIs específicas**: Acceso a funcionalidades del dispositivo como cámara, GPS, sensores.
* **Puente nativo**: Comunicación entre JavaScript y código nativo (Java/Kotlin, Swift/Obj-C) .

**Fundamentos:**

* Alto rendimiento, cercano al de las apps nativas.
* Reutilización de hasta un 90% del código entre iOS y Android.
* Comunidad activa y respaldo de Meta.

---

## ✅ Puntos Fuertes por Tecnología

### **Ventajas de PWA**

| Área                | Detalle                                                               |
| ------------------- | --------------------------------------------------------------------- |
| **Multiplataforma** | Ejecutable desde cualquier navegador moderno.                |
| **Actualización**   | No necesita stores; se actualiza automáticamente.            |
| **Coste**           | Menor coste de desarrollo (usa tecnologías web conocidas) .   |
| **SEO**             | Indexable por motores de búsqueda, mejorando la visibilidad . |

### **Ventajas de React Native**

| Área                       | Detalle                                                             |
| -------------------------- | ------------------------------------------------------------------- |
| **Rendimiento**            | Acceso nativo a hardware y sistema operativo.              |
| **Experiencia de usuario** | Interfaz fluida y con gestos como una app nativa .          |
| **Ecosistema**             | Gran variedad de librerías (React Navigation, Expo, etc.) . |
| **Mantenimiento**          | Base de código compartida entre plataformas móviles .       |

---

## 📊 Tabla Comparativa: PWA vs React Native

| Criterio                | PWA                                      | React Native                                 |
| ----------------------- | ---------------------------------------- | -------------------------------------------- |
| **Tecnología base**     | HTML/CSS/JavaScript             | JavaScript + Módulos nativos        |
| **Rendimiento**         | Aceptable para apps ligeras \[5]     | Alto, cercano a nativo               |
| **Acceso a hardware**   | Limitado (funciones básicas)         | Completo (GPS, cámara, sensores)     |
| **Actualizaciones**     | Automáticas vía service workers | Manuales (requieren revisión de stores)  |
| **Coste de desarrollo** | \~30–50% más bajo                | Mayor por puentes nativos y testing  |
| **Distribución**        | Mediante URL (sin stores)       | Requiere publicación en App/Play Store   |

---

## 🎯 ¿Cuándo elegir una sobre otra?

### ✅ **Elegir PWA si:**

* Necesitas lanzar rápido en múltiples plataformas con presupuesto limitado .
* Tu aplicación no requiere acceso profundo al hardware (por ejemplo, apps informativas o de contenido) .
* Estás mejorando un sitio web existente\[5].

### ✅ **Elegir React Native si:**

* Se necesita una experiencia fluida y nativa (por ejemplo, apps empresariales o interactivas) .
* Se requiere acceso a sensores, notificaciones, Bluetooth u otras funcionalidades del sistema.
* Tienes el equipo o recursos para mantener una app móvil completa .

---

## 📌 Conclusión

Ambas tecnologías tienen fortalezas claras:

* **PWA** es ideal para accesibilidad universal y desarrollo rápido/económico.
* **React Native** es la mejor opción para apps móviles ricas en funcionalidades y rendimiento.

La elección depende del **presupuesto**, **objetivos del proyecto** y **experiencia de usuario esperada**.

---

Bibliografia:
- [1] https://es.wikipedia.org/wiki/Aplicaci%C3%B3n_web_progresiva
- [2] https://seocom.agency/blog/introduccion-pwa/
- [3] https://es.wikipedia.org/wiki/React_Native
- [4] https://paulogalarza.com/componentes-principales-de-react-native/
- [5] https://digital55.com/blog/que-es-pwa-ventajas-desventajas/
- [6] https://www.ttandem.com/blog/desarrollo-que-son-las-pwa-o-progressive-web-applications/ventajas-y-desventajas-de-las-pwa/
- [7] https://keepcoding.io/blog/ventajas-e-inconvenientes-de-react-native/
- [8] https://www.carmatec.com/es_mx/blog/pwa-vs-aplicaciones-nativas-que-elegir/
- [9] https://openwebinars.net/blog/comparativa-react-native-y-diferentes-frameworks/
- [10] https://magenest.com/en/pwa-vs-react-native/
- [11] https://developer.mozilla.org/es/docs/Web/Progressive_web_apps
- [12] https://codigofacilito.com/articulos/que-es-react-native
- [13] https://learn.microsoft.com/es-es/microsoft-edge/progressive-web-apps-chromium/
- [14] https://appmaster.io/es/blog/aplicaciones-web-progresivas-pwa-frente-a-aplicaciones-nativas-que-tipo-es-mejor-en-2022
- [15] https://flatirons.com/blog/pwa-vs-react-native/
- [16] https://rootstack.com/es/learning/que-es-react-native-y-para-que-sirve
- [17] https://www.doonamis.com/react-native-que-es-ventajas-desventajas/
- [18] https://www.toolify.ai/es/ai-news-es/cmo-crear-un-pwa-con-react-native-y-expo-web-750547
- [19] https://neoattack.com/blog/progressive-web-app/
- [20] https://openwebinars.net/cursos/fundamentos-progressive-web-apps/
- [21] https://immune.institute/blog/que-es-pwa/
- [22] https://www.imaginae.net/pwa-que-es-una-progressive-web-app-y-cuales-son-sus-ventajas/
- [23] https://training.genexus.com/es/aprendiendo/pdf/aplicaciones-web-progresivas-pwa-introduccion-pdf-6105114
- [24] https://geoinnova.org/blog-territorio/como-convertir-una-web-en-pwa-progressive-web-app/
- [25] https://iydt.wordpress.com/wp-content/uploads/2023/05/3_09_pwa-arquitectura-de-aplicaciones-web-progresivas.pdf
- [26] https://web.dev/learn/pwa/welcome
- [27] https://www.youtube.com/watch?v=h6yc2Y5L48s
- [28] https://developer.mozilla.org/es/docs/Web/Progressive_web_apps/Tutorials/js13kGames/App_structure
- [29] https://www.youtube.com/watch?v=HoNo69Qykd0
- [30] https://learn.microsoft.com/es-es/microsoft-edge/progressive-web-apps-chromium/how-to/
- [31] https://keepcoding.io/blog/componentes-en-react-native/
- [32] https://bitkollegen.de/es/desarrollo-react-native-la-guia-definitiva/
- [33] https://www.reanimasoluciones.com/actualidad/322-que-es-react-native-y-su-aplicacion-en-el-desarrollo-de-aplicaciones
- [34] https://fullstackopen.com/es/part10/conceptos_basicos_de_react_native
- [35] https://www.youtube.com/watch?v=IfAxduRrujg
- [36] https://www.doonamis.com/react-native-que-es-ventajas-desventajas/
- [37] https://es.react.dev/learn/your-first-component
- [38] https://blog.soyhenry.com/aprendemos-sobre-react-native/
- [39] https://reactnative.dev
- [40] https://reactnative.dev/docs/components-and-apis
- [41] https://www.dongee.com/tutoriales/que-es-react-native/
- [42] https://www.freecodecamp.org/espanol/news/react-js-vs-react-native-cual-es-la-diferencia/
- [43] https://developer.mozilla.org/es/docs/Web/Progressive_web_apps/Tutorials/js13kGames
- [44] https://rootstack.com/es/blog/react-native-ventajas-y-desventajas-de-este-framework
- [45] https://appmaster.io/es/blog/ventajas-de-seguridad-de-pwas
- [46] https://medac.es/blogs/informatica/pwa-o-aplicacion-web-progresiva
- [47] https://www.ttandem.com/blog/desarrollo-que-son-las-pwa-o-progressive-web-applications/compatibilidades-de-las-pwa-segun-el-navegador-y-el-sistema-operativo/
- [48] https://platzi.com/blog/experiencias-usuarios-aplicaciones-curso-web-progresivas-pwa/
- [49] https://baturamobile.com/blog/comparativa-react-native-vs-flutter/
- [50] https://www.humanlevel.com/blog/seo/progressive-web-apps-pwa-que-son-y-por-que-van-a-mejorar-mis-visitas.html
- [51] https://evolbit.net/blog/que-tan-bueno-es-react-native/
- [52] https://googleseo.marketing/web-apps-progresivas-pwa-ventajas-seo/
- [53] https://openwebinars.net/blog/comparativa-react-native-y-diferentes-frameworks/
- [54] https://nexia.io/2021/02/03/app-nativa-o-pwa-cual-elegir/
- [55] https://www.reddit.com/r/reactjs/comments/19bhtpy/react_pwa_vs_react_native/?tl=es-es
- [56] https://cazzcode.com/articulos/pwa-ventajas-que-puedes-aprovechar-para-el-desarrollo-de-tus-apps.html
- [57] https://www.youtube.com/watch?v=Zy9CYnf7vDk
- [58] https://appscrip.com/es/blog/choose-react-native-for-mobile-app-development/
- [59] https://bisiesto.es/pwa-o-web-app-alternativas/
- [60] https://www.icalia.es/w/aplicaciones-nativas-multiplataforma-h%C3%ADbridas-y-pwa-%C2%BFcu%C3%A1l-es-la-mejor-opci%C3%B3n-para-tu-proyecto-
- [61] https://www.youtube.com/watch?v=w6VftnnNHL8
- [62] https://www.reddit.com/r/react/comments/17rfnbv/should_i_use_react_or_react_native_for_a_pwa/?tl=es-es
- [63] https://artoonsolutions.com/react-native-vs-pwa/
- [64] https://digital55.com/blog/que-es-pwa-ventajas-desventajas/
- [65] https://www.linkedin.com/pulse/pwa-vs-react-native-detailed-look-happiest-team
- [66] https://appmaster.io/es/blog/aplicaciones-web-progresivas-pwa-frente-a-aplicaciones-nativas-que-tipo-es-mejor-en-2022
- [67] https://www.reddit.com/r/PWA/comments/1i55ulg/undecided_between_native_and_pwa/?tl=es-419
- [68] https://www.diva-portal.org/smash/get/diva2:1770631/FULLTEXT01.pdf
- [69] https://es.linkedin.com/advice/1/how-do-you-compare-progressive-web-app-frameworks?lang=es
- [70] https://innowise.com/es/blog/desarrollo-de-aplicaciones-nativas-y-multiplataforma/
- [71] https://aws.amazon.com/es/compare/the-difference-between-web-apps-native-apps-and-hybrid-apps/
- [72] https://www.xataka.com/basics/que-es-una-aplicacion-web-progresiva-o-pwa
- [73] https://learn.microsoft.com/es-es/microsoft-edge/progressive-web-apps-chromium/
- [74] https://www.iebschool.com/blog/progressive-web-apps-analitica-usabilidad/
- [75] https://learn.microsoft.com/es-es/windows/dev-environment/javascript/react-native-for-windows
- [76] https://www.youtube.com/watch?v=i1uoJCsAxWc
- [77] https://openwebinars.net/blog/react-native-que-es-para-que-sirve/
- [78] https://aulasoftwarelibre.github.io/taller-de-react-native-docs/react-fundamentals/
- [79] https://www.ionos.com/es-us/digitalguide/paginas-web/desarrollo-web/progressive-web-apps-pros-y-contras/
- [80] https://www.seidor.com/es-ar/blog/que-es-una-pwa
- [81] https://itop.academy/blog/item/diferencias-entre-app-y-pwa-pros-y-contras.html
- [82] https://clickup.com/es-ES/blog/243886/react-native-vs-flutter
- [83] https://www.reddit.com/r/react/comments/17rfnbv/should_i_use_react_or_react_native_for_a_pwa/?tl=es-419
- [84] https://pwaexperts.io/tutoriales/desarrolla-primera-pwa-react
- [85] https://emma.io/blog/tipos-aplicaciones-caracteristicas-ejemplos/
- [86] https://iscap.us/proceedings/2023/pdf/5944.pdf
- [87] https://www.ttandem.com/blog/desarrollo-que-son-las-pwa-o-progressive-web-applications/ventajas-y-desventajas-de-las-pwa/

