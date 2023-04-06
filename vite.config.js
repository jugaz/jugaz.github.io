import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  base: '/jugaz.github.io/',
  build: {
    outDir: "./docs",
    assetsInlineLimit:0,
    emptyOutDir: true,
    manifest: false,
  },
})
