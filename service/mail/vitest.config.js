import { defineConfig } from 'vitest/config'

/**
 * Sans ce fichier, Vitest remonte et prend celui de la racine — qui monte jsdom,
 * charge les greffons Vue/Quasar et attend `test/setup.js`. Le service n'a
 * besoin d'aucun des trois.
 */
export default defineConfig({
  test: {
    environment: 'node',
    include: ['test/**/*.spec.js']
  }
})
