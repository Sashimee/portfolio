import { config } from '@vue/test-utils'
import { AddressbarColor, Cookies, Dark, Notify, Quasar } from 'quasar'
import { createI18n } from 'vue-i18n'
import messages from '@/i18n'

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: 'en',
  fallbackLocale: 'en',
  messages
})

config.global.plugins = [
  [Quasar, { plugins: { AddressbarColor, Cookies, Dark, Notify } }],
  i18n
]
