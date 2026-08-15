// The portfolio is served from the alex. subdomain; the apex baskewitsch.lu
// currently answers with the hosting provider's placeholder page.
export const SITE_URL = 'https://alex.baskewitsch.lu'
export const SITE_NAME = 'Alex Baskewitsch'
export const DEFAULT_OG_IMAGE = '/screenshots/og.png'

function absolute(path) {
  if (typeof path !== 'string' || path === '') return SITE_URL + '/'
  if (path.startsWith('http')) return path
  return SITE_URL + (path.startsWith('/') ? path : '/' + path)
}

/**
 * Builds a Quasar Meta plugin descriptor for a page.
 * Every route used to share the single title/description of index.html.
 *
 * @param {object} options
 * @param {string} options.title      page title, without the site name suffix
 * @param {string} options.description
 * @param {string} options.path       route path, e.g. "/projects"
 * @param {string} [options.image]    OG/Twitter image, absolute or root-relative
 * @param {string} [options.locale]   BCP 47 language of the page
 * @param {boolean} [options.noindex] keep the page out of search results
 */
export function pageMeta({ title, description, path, image, locale, noindex = false }) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME
  const url = absolute(path)
  const imageUrl = absolute(image || DEFAULT_OG_IMAGE)

  const meta = {
    description: { name: 'description', content: description },

    ogType: { property: 'og:type', content: 'website' },
    ogSiteName: { property: 'og:site_name', content: SITE_NAME },
    ogUrl: { property: 'og:url', content: url },
    ogTitle: { property: 'og:title', content: fullTitle },
    ogDescription: { property: 'og:description', content: description },
    ogImage: { property: 'og:image', content: imageUrl },

    twitterCard: { name: 'twitter:card', content: 'summary_large_image' },
    twitterUrl: { name: 'twitter:url', content: url },
    twitterTitle: { name: 'twitter:title', content: fullTitle },
    twitterDescription: { name: 'twitter:description', content: description },
    twitterImage: { name: 'twitter:image', content: imageUrl }
  }

  if (noindex === true) {
    meta.robots = { name: 'robots', content: 'noindex, follow' }
  }

  return {
    title: fullTitle,
    titleTemplate: title => title,
    htmlAttr: { lang: locale || 'en' },
    meta,
    link: {
      canonical: { rel: 'canonical', href: url }
    }
  }
}
