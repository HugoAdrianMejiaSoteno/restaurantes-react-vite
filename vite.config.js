import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import replace from '@rollup/plugin-replace'; // Libreria para manejar las variables de entorno
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), replace({
    'process.env': JSON.stringify(import.meta.env) //Este es para poder usar la variable de entorno de google
  })]
})