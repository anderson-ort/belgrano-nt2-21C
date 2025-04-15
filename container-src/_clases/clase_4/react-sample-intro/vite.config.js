import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';



import { fileURLToPath } from 'url'
import { dirname } from 'path'


const __dirname = (dirname(fileURLToPath(import.meta.url)))


// https://vitejs.dev/config/
export default defineConfig(() => {
  // Carga las variables del entorno correcto según el modo (dev/prod/etc.)

  return {
    plugins: [react()],
    server: {
      host: '0.0.0.0', // 👈 IMPORTANTE para exponerlo fuera del container
      port: 3001,
      open: false,
      hmr: {
        port: 3001,
      },
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    // define: {
    //   __APP_ENV__: JSON.stringify(import.meta.env.VITE_APP_PORT), // Ejemplo para usar en el código
    // },
  };
});