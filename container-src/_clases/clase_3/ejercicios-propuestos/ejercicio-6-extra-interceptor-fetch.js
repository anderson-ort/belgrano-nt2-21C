const originalFetch = fetch;

// Configuración de reintentos y timeout
const MAX_RETRIES = 3;
const TIMEOUT_MS = 5000;

async function interceptorFetch(url, options = {}) {
  console.log("📤 Interceptando solicitud a:", url);
  console.log("🔍 Opciones:", options);

  let retries = 0;

  while (retries < MAX_RETRIES) {
    try {
      // Agregar timeout a la solicitud
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), TIMEOUT_MS);
      const fetchOptions = { ...options, signal: controller.signal };

      const response = await originalFetch(url, fetchOptions);
      clearTimeout(timeout);

      if (!response.ok) {
        throw new Error(`❌ HTTP Error: ${response.status} ${response.statusText}`);
      }

      // Clonar la respuesta para evitar perder el stream
      const clonedResponse = response.clone();
      const data = await clonedResponse.json();
      console.log("📥 Datos recibidos:", data);

      return response; // Retornar la respuesta original
    } catch (error) {
      retries++;
      console.error(`⚠️ Error en intento ${retries}/${MAX_RETRIES}:`, error.message);

      if (retries >= MAX_RETRIES) {
        console.error("❌ Se agotaron los reintentos. Abortando.");
        throw error;
      }

      console.log("🔄 Reintentando solicitud...");
    }
  }
};

// Prueba la interceptación con fetch
async function obtenerUsuarios() {
  try {
    const response = await fetch("https://randomuser.me/api/0.8/?results=5");
    const data = await response.json();
    console.log("👥 Usuarios:", data);
  } catch (error) {
    console.error("🚨 Error final en la obtención de usuarios:", error.message);
  }
}

obtenerUsuarios();
