// Configuration for your app
// https://v2.quasar.dev/quasar-cli-vite/quasar-config-file

import { defineConfig } from '#q-app'

export default defineConfig(ctx => {
  return {
    // app boot file (/src/boot)
    // --> boot files are part of "main.js"
    // https://v2.quasar.dev/quasar-cli-vite/boot-files
    boot: ['i18n', 'preferences', 'axios', 'analytics', 'recap', 'addressbar-color'],

    // https://v2.quasar.dev/quasar-cli-vite/quasar-config-file#css
    css: ['app.sass'],

    // https://github.com/quasarframework/quasar/tree/dev/extras
    // Roboto n'est plus chargé : la typographie courante utilise la pile
    // système et Lexend (auto-hébergé) pour les titres.
    extras: ['material-icons', 'fontawesome-v7'],

    // https://v2.quasar.dev/quasar-cli-vite/quasar-config-file#build
    build: {
      vueRouterMode: 'history', // available values: 'hash', 'history'

      // Injecté dans le bundle à la construction, et lu par src/boot/axios.js
      // sous `import.meta.env.API_BASE_URL`. Surchargeable au build
      // (API_BASE_URL=… npm run build) pour viser une instance de recette.
      //
      // `defineEnv`, et non `env` : en @quasar/app-vite v3, `build.env` n'est
      // plus une carte de variables mais la configuration des fichiers .env
      // (folder, files, prefix, filter). Y poser une variable ne définit rien
      // et ne lève rien — le bundle sort avec `import.meta.env.X` non résolu.
      defineEnv: {
        API_BASE_URL: process.env.API_BASE_URL || 'https://api.baskewitsch.lu/api'
      },

      // The pages and the layout are written with the Options API; app-vite v3
      // tree-shakes it out by default, which silently disables data/computed/
      // mounted/meta at runtime.
      vueOptionsAPI: true,

      vitePlugins: [
        [
          '@intlify/unplugin-vue-i18n/vite',
          {
            ssr: ctx.mode.ssr,

            // Messages live in .js files (src/i18n/{en,fr}/index.js), which the
            // plugin does not pre-compile, so the runtime compiler must stay in.
            runtimeOnly: false,

            include: [ctx.appPaths.resolve.app('src/i18n')]
          }
        ]
      ]
    },

    // https://v2.quasar.dev/quasar-cli-vite/quasar-config-file#devserver
    devServer: {
      port: 8080,
      open: true // opens browser window automatically
    },

    // https://v2.quasar.dev/quasar-cli-vite/quasar-config-file#framework
    framework: {
      iconSet: 'material-icons', // Quasar icon set
      lang: 'en-US', // Quasar language pack

      config: {
        // The persisted preference is applied by src/boot/preferences.js;
        // 'auto' only decides what a first-time visitor sees.
        dark: 'auto'
      },

      // Quasar plugins
      plugins: ['AddressbarColor', 'Notify', 'Cookies', 'Meta', 'LocalStorage']
    },

    // Les transitions sont écrites à la main dans src/css/app.sass :
    // plus besoin d'embarquer animate.css en entier.
    // https://v2.quasar.dev/options/animations
    animations: []
  }
})
