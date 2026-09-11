import posts from '@/data/posts'
import projects from '@/data/projects'
import { pageMeta, shortSummary, SITE_URL } from '@/utils/meta'
import en from '@/i18n/en'

const stripTags = value => String(value).replace(/<[^>]*>/g, '')

/**
 * Nom de fichier de la couverture d'un article, sans son empreinte.
 *
 * `post.cover` est un import ESM : sa valeur est une adresse produite par
 * l'outil de construction, et elle diffère selon qui exécute ce module. Seule
 * la racine du nom est commune, et elle suffit à retrouver le fichier haché
 * dans `dist/spa/assets/`.
 */
export function coverBaseName(cover) {
  const file = String(cover).split('?')[0].split('/').pop()
  return file.replace(/\.[a-z0-9]+$/i, '')
}

/**
 * Les routes qu'un moissonneur peut atteindre, chacune avec le descripteur que
 * la page correspondante déclare à `usePageMeta`.
 *
 * Les textes viennent du paquet anglais : les trois langues partagent une même
 * adresse, il n'y a donc qu'un instantané par route, et l'anglais est la langue
 * par défaut du site.
 */
export function prerenderedRoutes() {
  const routes = [
    { path: '/', title: en.seo.home.title, description: en.seo.home.description },
    { path: '/about', title: en.seo.about.title, description: en.seo.about.description },
    { path: '/projects', title: en.seo.projects.title, description: en.seo.projects.description },
    { path: '/blog', title: en.seo.blog.title, description: en.seo.blog.description },
    { path: '/contact', title: en.seo.contact.title, description: en.seo.contact.description }
  ]

  for (const project of projects) {
    if (project.target !== 'internal') continue
    routes.push({
      path: `/projects/${project.link}`,
      title: project.name,
      // Chaque fiche porte sa propre description : les cinq partageaient celle,
      // générique, de `seo.project.description`.
      description: shortSummary(en.projects.texts[project.infoKey]) || en.seo.project.description,
      image: `/screenshots/${project.img}.webp`
    })
  }

  for (const post of posts) {
    routes.push({
      path: `/blog/${post.slug}`,
      title: en[post.key].title,
      description: stripTags(en[post.key].title2),
      cover: coverBaseName(post.cover),
      lastmod: post.date,
      article: { published: post.date }
    })
  }

  // L'accueil et l'index du blog changent avec le dernier article publié : ils
  // ont donc une date réelle à annoncer. Les autres routes n'en ont aucune, et
  // en inventer une vaudrait moins que de n'en donner aucune.
  const derniere = posts.map(post => post.date).sort().at(-1)
  for (const route of routes) {
    if (route.path === '/' || route.path === '/blog') route.lastmod = derniere
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
    path: '/404',
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
      const loc = `    <loc>${escape(SITE_URL + (route.path === '/' ? '/' : route.path))}</loc>`
      const lastmod = route.lastmod ? `\n    <lastmod>${route.lastmod}</lastmod>` : ''
      return `  <url>\n${loc}${lastmod}\n  </url>`
    })
    .join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>\n`
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
