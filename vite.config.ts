import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import imagemin from 'unplugin-imagemin/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    imagemin({
      compress: {
        png: { quality: 80 },
        jpg: { quality: 80 },
        jpeg: { quality: 80 },
        webp: { quality: 80 },
      },
      conversion: [
        { from: 'png', to: 'webp' },
        { from: 'jpg', to: 'webp' },
        { from: 'jpeg', to: 'webp' },
        { from: 'png', to: 'avif' },
        { from: 'jpg', to: 'avif' },
        { from: 'jpeg', to: 'avif' },
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
