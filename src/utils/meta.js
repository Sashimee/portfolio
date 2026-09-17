import links from '@/data/links'
import { localeAlternates, localePath, splitLocalePath } from '@/utils/locale-paths'
import { DEFAULT_LOCALE } from '@/utils/preferences'

// The portfolio is served from the alex. subdomain; the apex baskewitsch.lu
// currently answers with the hosting provider's placeholder page.
export const SITE_URL = 'https://alex.baskewitsch.lu'
export const SITE_NAME = 'Alex Baskewitsch'
export const DEFAULT_OG_IMAGE = '/screenshots/og.png'

/**
 * Résumé court pour une méta-description.
 *
 * Les cinq fiches de projet partageaient une description générique, identique
 * au caractère près : Google écarte un doublon et fabrique son propre extrait,
 * si bien que les pages se concurrençaient au lieu de porter leur nom.
 * `projects.texts.*` tient déjà un texte propre à chacune, et traduit — il est
 * seulement trop long pour l'usage.
 */
export function shortSummary(text, max = 160) {
  const flat = String(text || '')
    .replace(/<[^>]*>/g, '')
    .replace(/\s+/g, ' ')
    .trim()

  if (flat.length <= max) return flat

  const cut = flat.slice(0, max)
  const espace = cut.lastIndexOf(' ')
  return `${(espace > max * 0.6 ? cut.slice(0, espace) : cut).replace(/[\s,;:.\u2014-]+$/, '')}…`
}

/**
 * Les liens `hreflang` d'une page, plus le `x-default`.
 *
 * Réciproques, et c'est la condition que Google pose : chacune des trois
 * adresses déclare les trois. Sans eux, les versions FR et DE d'une page se
 * présentent comme des documents sans rapport — ou, pire, comme un duplicata.
 * `x-default` désigne l'anglais, la langue vers laquelle `/` redirige.
 */
export function alternateLinks(path) {
  const liens = {}

  for (const { locale, path: chemin } of localeAlternates(path)) {
    liens[`alternate_${locale}`] = {
      rel: 'alternate',
      hreflang: locale,
      href: absolute(chemin)
    }
  }

  liens.alternate_default = {
    rel: 'alternate',
    hreflang: 'x-default',
    href: absolute(localePath(path, DEFAULT_LOCALE))
  }

  return liens
}

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
 * @param {object} [options.article]  `{ published, modified }` — bascule la page
 *   en `og:type: article`. Les cinq articles se présentaient en `website`, donc
 *   sans date : ni LinkedIn ni Google ne les lisaient comme des billets datés,
 *   alors que `posts.js` porte déjà le jour de parution.
 */
export function pageMeta({
  title,
  description,
  path,
  image,
  locale,
  noindex = false,
  article = null
}) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME
  const url = absolute(path)
  const imageUrl = absolute(image || DEFAULT_OG_IMAGE)

  const meta = {
    description: { name: 'description', content: description },

    ogType: { property: 'og:type', content: article ? 'article' : 'website' },
    ogSiteName: { property: 'og:site_name', content: SITE_NAME },
    ogUrl: { property: 'og:url', content: url },
    ogTitle: { property: 'og:title', content: fullTitle },
    ogDescription: { property: 'og:description', content: description },
    ogImage: { property: 'og:image', content: imageUrl },
    // Une vignette sans alternative textuelle est muette pour qui lit la carte
    // au lecteur d'écran, dans la messagerie comme sur la page.
    ogImageAlt: { property: 'og:image:alt', content: fullTitle },
    ogLocale: { property: 'og:locale', content: (locale || 'en').replace('-', '_') },

    twitterCard: { name: 'twitter:card', content: 'summary_large_image' },
    twitterUrl: { name: 'twitter:url', content: url },
    twitterTitle: { name: 'twitter:title', content: fullTitle },
    twitterDescription: { name: 'twitter:description', content: description },
    twitterImage: { name: 'twitter:image', content: imageUrl }
  }

  if (article) {
    meta.articlePublished = {
      property: 'article:published_time',
      content: article.published
    }
    meta.articleModified = {
      property: 'article:modified_time',
      content: article.modified || article.published
    }
    meta.articleAuthor = { property: 'article:author', content: SITE_NAME }
  }

  if (noindex === true) {
    meta.robots = { name: 'robots', content: 'noindex, follow' }
  }

  const descriptor = {
    title: fullTitle,
    titleTemplate: title => title,
    htmlAttr: { lang: locale || 'en' },
    meta,
    link: {
      canonical: { rel: 'canonical', href: url },
      ...alternateLinks(path)
    }
  }

  const donnees = structuredData({
    title: fullTitle,
    description,
    path,
    image,
    locale: locale || DEFAULT_LOCALE,
    article,
    sameAs: links.map(lien => lien.url)
  })

  if (donnees) {
    descriptor.script = {
      ldJson: { type: 'application/ld+json', innerHTML: serializeJsonLd(donnees) }
    }
  }

  return descriptor
}

/**
 * `</script>` dans une valeur refermerait la balise qui la porte : le `<` est
 * échappé, ce que JSON-LD accepte et qu'aucun analyseur ne distingue.
 */
export function serializeJsonLd(data) {
  return JSON.stringify(data).replaceAll('<', '\\u003c')
}

/**
 * Données structurées de la page, en JSON-LD.
 *
 * Le site n'en portait aucune : ni auteur, ni date d'article, ni fil d'Ariane.
 * C'est la surface de résultat enrichi la moins chère pour un portfolio, et la
 * seule que l'on puisse poser sans toucher au routage — contrairement au
 * multilinguisme des adresses, qui reste ouvert.
 */
export function structuredData({
  title,
  description,
  path,
  image,
  locale = DEFAULT_LOCALE,
  article = null,
  sameAs = []
}) {
  const url = absolute(path)
  const auteur = {
    '@type': 'Person',
    name: SITE_NAME,
    url: SITE_URL + '/',
    ...(sameAs.length ? { sameAs } : {})
  }

  if (article) {
    return {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: title,
      description,
      image: absolute(image || DEFAULT_OG_IMAGE),
      datePublished: article.published,
      dateModified: article.modified || article.published,
      author: auteur,
      publisher: auteur,
      mainEntityOfPage: { '@type': 'WebPage', '@id': url },
      inLanguage: locale
    }
  }

  // L'accueil d'une langue est `/en`, `/fr` ou `/de` : c'est sa racine une fois
  // le préfixe retiré. Avant le lot 28, la comparaison portait sur `/`.
  if (path === undefined || splitLocalePath(path).path === '/') {
    return {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: SITE_NAME,
      url: SITE_URL + '/',
      description,
      author: auteur,
      inLanguage: locale
    }
  }

  return null
}
