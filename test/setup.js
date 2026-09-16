import { config } from '@vue/test-utils'
import { AddressbarColor, Cookies, Dark, Notify, Quasar } from 'quasar'
import { createI18n } from 'vue-i18n'
import messages from '@/i18n'
import { localeLinks } from '@/utils/locale-paths'
import { currentLocale } from '@/boot/i18n'

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: 'en',
  fallbackLocale: 'en',
  messages
})

config.global.plugins = [
  [Quasar, { plugins: { AddressbarColor, Cookies, Dark, Notify } }],
  i18n,
  // Les liens internes des gabarits passent par `$lp` : sans lui, monter une
  // composante lève « $lp is not a function ». La langue est lue là où
  // `TheHeader` la lit — l'instance du fichier d'amorçage, celle que `setLocale`
  // fait bouger. Celle d'ici ne porte que les messages, chargés d'un bloc.
  [localeLinks, { locale: currentLocale }]
]
