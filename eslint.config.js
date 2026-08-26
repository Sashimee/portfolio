import js from '@eslint/js'
import globals from 'globals'
import pluginVue from 'eslint-plugin-vue'
import pluginQuasar from '@quasar/app-vite/eslint'
import prettierSkipFormatting from '@vue/eslint-config-prettier/skip-formatting'

export default [
  ...pluginQuasar.configs.recommended(),
  js.configs.recommended,
  ...pluginVue.configs['flat/essential'],

  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',

      globals: {
        ...globals.browser,
        ...globals.node, // config files
        process: 'readonly' // process.env.*
      }
    },

    rules: {
      'prefer-promise-reject-errors': 'off',

      // allow debugger during development only
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
    }
  },

  // Le service de courriel tourne sous Node, pas dans un navigateur : il n'a
  // ni `window` ni `document`, et il a bien `process`.
  {
    files: ['service/**/*.js'],
    languageOptions: {
      globals: {
        ...globals.node
      }
    }
  },

  {
    files: ['test/**/*.js'],
    languageOptions: {
      globals: {
        ...globals.node
      }
    }
  },

  // Formatting is not this project's concern; keep ESLint on correctness only.
  prettierSkipFormatting
]
