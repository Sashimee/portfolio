import { defineBoot } from '#q-app'
import { loadAnalytics, trackPageview } from '@/utils/analytics'

// Page views were duplicated in every page's mounted() hook; one router hook
// covers all routes and stays silent until the visitor opts in.
export default defineBoot(({ router }) => {
  loadAnalytics()

  router.afterEach(to => {
    trackPageview(to.fullPath)
  })
})
