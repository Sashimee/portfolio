import { defineBoot } from '#q-app'
import { VueReCaptcha } from 'vue-recaptcha-v3'

export default defineBoot(({ app }) => {
  app.use(VueReCaptcha, {
    siteKey: '6LfnC4kaAAAAAEzdI0EOMI4d6AWcuQu8M_F4Ez3i',
    loaderOptions: { autoHideBadge: true }
  })
})
