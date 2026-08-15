import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'

export default defineConfig({
  plugins: [
    vue({ template: { transformAssetUrls } }),
    quasar({ sassVariables: fileURLToPath(new URL('./src/css/quasar.variables.sass', import.meta.url)) })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      // Boot files import from '#q-app'; the tests only need defineBoot to be a
      // pass-through, so point the specifier at a local stub.
      '#q-app': fileURLToPath(new URL('./test/stubs/q-app.js', import.meta.url))
    }
  },
  test: {
    environment: 'jsdom',
    include: ['test/**/*.spec.js'],
    setupFiles: ['./test/setup.js']
  }
})
