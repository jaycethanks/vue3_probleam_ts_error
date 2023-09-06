import { fileURLToPath, URL } from "url";
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve:{
    alias:{
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@req": fileURLToPath(new URL("./src/utils/request.js", import.meta.url)),
    }
  }
})
