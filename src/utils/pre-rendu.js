import posts from '@/data/posts'
import projects from '@/data/projects'
import { pageMeta, shortSummary, SITE_URL } from '@/utils/meta'
import messages from '@/i18n'
import { AVAILABLE_LOCALES, DEFAULT_LOCALE } from '@/utils/preferences'
import { localeAlternates, localePath } from '@/utils/locale-paths'

const en = messages[DEFAULT_LOCALE]

const stripTags = value => String(value).replace(/<[^>]*>/g, '')

/**
 * Les routes qu'un moissonneur peut atteindre, chacune avec le descripteur que
 * la page correspondante déclare à `usePageMeta`.
 *
 * **Une par langue depuis le lot 28** : les trois partageaient une adresse, et
 * l'instantané était en anglais. Chaque langue a désormais son préfixe, son
 * instantané, son texte, et les `hreflang` des deux autres.
 */
export function prerenderedRoutes() {
  const routes = []

  for (const locale of AVAILABLE_LOCALES) {
    const paquet = messages[locale]

    const pages = [
      { path: '/', title: paquet.seo.home.title, description: paquet.seo.home.description },
      { path: '/about', title: paquet.seo.about.title, description: paquet.seo.about.description },
      {
        path: '/projects',
        title: paquet.seo.projects.title,
        description: paquet.seo.projects.description
      },
      { path: '/blog', title: paquet.seo.blog.title, description: paquet.seo.blog.description },
      {
        path: '/contact',
        title: paquet.seo.contact.title,
        description: paquet.seo.contact.description
      }
    ]

    for (const project of projects) {
      if (project.target !== 'internal') continue
      pages.push({
        path: `/projects/${project.link}`,
        title: project.name,
        // Chaque fiche porte sa propre description : les cinq partageaient celle,
        // générique, de `seo.project.description`.
        description:
          shortSummary(paquet.projects.texts[project.infoKey]) || paquet.seo.project.description,
        image: `/screenshots/${project.img}.webp`
      })
    }

    for (const post of posts) {
      pages.push({
        path: `/blog/${post.slug}`,
        title: paquet[post.key].title,
        description: stripTags(paquet[post.key].title2),
        image: post.cover,
        lastmod: post.date,
        article: { published: post.date }
      })
    }

    // L'accueil et l'index du blog changent avec le dernier article publié : ils
    // ont donc une date réelle à annoncer. Les autres routes n'en ont aucune, et
    // en inventer une vaudrait moins que de n'en donner aucune.
    const derniere = posts.map(post => post.date).sort().at(-1)

    for (const page of pages) {
      if (page.path === '/' || page.path === '/blog') page.lastmod = derniere
      routes.push({
        ...page,
        locale,
        path: localePath(page.path, locale),
        alternates: localeAlternates(page.path)
      })
    }
  }

  return routes
}

/**
 * La route que sert le serveur pour ce qui ne correspond à aucun instantané.
 *
 * Elle n'est pas dans `prerenderedRoutes()` : le plan du site ne la cite pas,
 * et son instantané est déposé à part, en `404.html`. Un même document répond
 * à toutes les adresses inconnues, donc il ne peut pas déclarer de canonique —
 * elle désignerait `/404` depuis `/projects/jeanne`. Il porte `noindex`.
 */
export function notFoundRoute() {
  return {
    // Un seul document répond à toutes les adresses inconnues, dans les trois
    // langues : il ne peut donc ni porter de préfixe, ni déclarer d'alternates.
    path: '/404',
    locale: DEFAULT_LOCALE,
    title: en.seo.notFound.title,
    description: en.seo.notFound.description,
    noindex: true
  }
}

const escape = value =>
  String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')

/**
 * Les balises d'une route, en HTML.
 *
 * Toutes portent `data-prerendered` : au démarrage, `use-page-meta` les retire
 * avant que le greffon Meta de Quasar ne pose les siennes. Sans cela le
 * document en porterait deux de chaque — la raison pour laquelle `index.html`
 * n'en déclare aucune.
 */
export function renderHeadTags(route) {
  const descriptor = pageMeta({
    title: route.title,
    description: route.description,
    path: route.path,
    image: route.image,
    locale: route.locale || DEFAULT_LOCALE,
    article: route.article,
    noindex: route.noindex === true
  })

  const tags = [`<title data-prerendered>${escape(descriptor.title)}</title>`]

  for (const tag of Object.values(descriptor.meta)) {
    const attribute = tag.name ? 'name' : 'property'
    const key = tag.name || tag.property
    tags.push(`<meta ${attribute}="${escape(key)}" content="${escape(tag.content)}" data-prerendered>`)
  }

  // Un instantané `noindex` répond à toutes les adresses inconnues : la seule
  // canonique qu'il pourrait écrire désignerait une autre page que celle
  // demandée.
  if (!route.noindex) {
    tags.push(`<link rel="canonical" href="${escape(descriptor.link.canonical.href)}" data-prerendered>`)

    // Les trois adresses d'une page se déclarent l'une l'autre, plus le
    // `x-default`. Sans ces liens, un instantané français est un document sans
    // rapport avec son équivalent anglais — au mieux, un duplicata.
    for (const [clef, lien] of Object.entries(descriptor.link)) {
      if (clef === 'canonical') continue
      tags.push(
        `<link rel="alternate" hreflang="${escape(lien.hreflang)}" href="${escape(lien.href)}" data-prerendered>`
      )
    }
  }

  if (descriptor.script?.ldJson) {
    tags.push(
      `<script type="application/ld+json" data-prerendered>${descriptor.script.ldJson.innerHTML}</script>`
    )
  }

  return tags.join('\n    ')
}

/**
 * Retire d'un document les balises d'un pré-rendu précédent.
 *
 * Le script lit `dist/spa/index.html` comme gabarit, et y écrit aussi
 * l'instantané de l'accueil : sans ce nettoyage, une seconde exécution sur la
 * même construction empilerait les balises de l'accueil sur toutes les routes.
 *
 * Le titre est retiré quel que soit son marquage, y compris celui du gabarit :
 * un document en portait deux, et c'est le générique qui venait en premier —
 * donc celui que `document.title` et les moteurs retiennent.
 */
export function stripPrerenderedTags(html) {
  // L'espace qui précède est repris avec la balise : sans cela l'indentation
  // resterait derrière, et s'ajouterait à chaque exécution.
  return html
    .replace(/\s*<title\b[^>]*>[\s\S]*?<\/title>/g, '')
    .replace(/\s*<link\b[^>]*\bdata-font-preload\b[^>]*>/g, '')
    .replace(/\s*<script\b[^>]*\bdata-prerendered\b[^>]*>[\s\S]*?<\/script>/g, '')
    .replace(/\s*<(?:meta|link)\b[^>]*\bdata-prerendered\b[^>]*>/g, '')
}

/**
 * Précharge la graisse des titres.
 *
 * Elle n'est demandée qu'une fois la feuille de style analysée — 60 Ko
 * compressés plus tard — et `font-display: swap` fait alors permuter le texte
 * déjà peint. `data-font-preload` plutôt que `data-prerendered` : le nettoyage
 * au démarrage retire les secondes, et retirer un préchargement en vol
 * annulerait la requête.
 */
export function renderFontPreload(href) {
  return `<link rel="preload" as="font" type="font/woff2" href="${escape(href)}" crossorigin data-font-preload>`
}

/** Le plan du site : toutes les routes pré-rendues, la 404 exclue par nature. */
export function renderSitemap(routes) {
  const entries = routes
    .map(route => {
      const loc = `    <loc>${escape(SITE_URL + route.path)}</loc>`
      const lastmod = route.lastmod ? `\n    <lastmod>${route.lastmod}</lastmod>` : ''
      // Les trois adresses d'une page sont déclarées sur chacune des trois :
      // c'est la forme que Google demande, et elle double le rôle des
      // `hreflang` du document, qu'un plan de site ne remplace pas.
      const alternates = (route.alternates || [])
        .map(
          alt =>
            `\n    <xhtml:link rel="alternate" hreflang="${escape(alt.locale)}" href="${escape(SITE_URL + alt.path)}"/>`
        )
        .join('')
      return `  <url>\n${loc}${lastmod}${alternates}\n  </url>`
    })
    .join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${entries}\n</urlset>\n`
}

/**
 * Les démos de `public/projects_folder/` sont servies telles quelles, avec le
 * balisage de leur gabarit d'origine — des titres comme « Document » ou
 * « Liberty - Responsive One Page Template », sans canonique. Indexées, elles
 * concurrencent la fiche de projet qui les présente. Le plan du site ne les
 * cite pas ; ceci l'écrit aussi pour les moissonneurs.
 */
export function renderRobots() {
  return [
    'User-agent: *',
    'Allow: /',
    'Disallow: /projects_folder/',
    '',
    `Sitemap: ${SITE_URL}/sitemap.xml`,
    ''
  ].join('\n')
}
