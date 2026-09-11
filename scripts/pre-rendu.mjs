#!/usr/bin/env node
/**
 * Écrit, après construction, un instantané HTML par route publique.
 *
 * Pourquoi : `src/utils/meta.js` compose un descripteur soigné par page, et le
 * greffon Meta de Quasar le pose **depuis le navigateur**. Une messagerie n'en
 * voit donc rien. Mesuré sur la production avant ce script :
 *
 *     curl -A "facebookexternalhit/1.1" .../blog/royaume-foot-3d-for-children
 *     <title>Alex Baskewitsch</title>        ← ni og:*, ni description, ni canonique
 *
 * C'est le sujet de `blogPost3` : un lien partagé n'affiche pas la page, il
 * affiche une carte moissonnée plus tôt. Le site plaidait pour une chose qu'il
 * ne faisait pas.
 *
 * Chaque instantané est le `index.html` de la construction, augmenté des balises
 * de sa route ; l'application démarre par-dessus comme avant. `try_files
 * $uri $uri/index.html $uri/ =404` les sert à l'adresse qu'ils déclarent, le
 * fichier étant déposé en `dist/spa/<route>/index.html` ; ce qui ne correspond à
 * aucun d'eux tombe sur `404.html`, écrit ici aussi, et servi en statut 404.
 */
import { existsSync } from 'node:fs'
import { readdir, readFile, mkdir, writeFile } from 'node:fs/promises'
import { dirname, join, resolve } from 'node:path'
import { pathToFileURL } from 'node:url'
import { registerHooks } from 'node:module'

const RACINE = resolve(import.meta.dirname, '..')
const SORTIE = join(RACINE, 'dist/spa')
const ASSETS = join(SORTIE, 'assets')

// `src/utils/pre-rendu.js` est écrit pour l'application : il résout ses voisins
// en `@/…` et importe des images. Node ne sait faire ni l'un ni l'autre, d'où
// ces deux crochets — l'alternative aurait été de recopier ici la liste des
// articles et des projets, c'est-à-dire de la dédoubler.
const EXTENSIONS_IMAGE = /\.(webp|png|jpe?g|svg|gif)$/i

/** `@/data/posts` désigne un fichier, `@/i18n/en` un dossier : les deux formes servent. */
function fichierDuModule(chemin) {
  if (/\.[a-z0-9]+$/i.test(chemin)) return chemin
  return existsSync(`${chemin}.js`) ? `${chemin}.js` : join(chemin, 'index.js')
}

registerHooks({
  resolve(specifier, context, next) {
    // L'image d'abord : une couverture d'article s'importe en `@/assets/….webp`,
    // donc elle passerait par la branche de l'alias et Node buterait sur
    // l'extension.
    if (EXTENSIONS_IMAGE.test(specifier)) {
      const chemin = specifier.startsWith('@/')
        ? join(RACINE, 'src', specifier.slice(2))
        : new URL(specifier, `${dirname(context.parentURL ?? pathToFileURL(RACINE).href)}/`).pathname
      return { url: `image:${chemin}`, shortCircuit: true }
    }

    if (specifier.startsWith('@/')) {
      return next(pathToFileURL(fichierDuModule(join(RACINE, 'src', specifier.slice(2)))).href, context)
    }

    return next(specifier, context)
  },

  load(url, context, next) {
    if (url.startsWith('image:')) {
      return {
        format: 'module',
        source: `export default ${JSON.stringify(url.slice('image:'.length))}`,
        shortCircuit: true
      }
    }

    return next(url, context)
  }
})

const {
  notFoundRoute,
  prerenderedRoutes,
  renderHeadTags,
  renderSitemap,
  renderRobots,
  renderFontPreload,
  stripPrerenderedTags
} =
  await import(
    pathToFileURL(join(RACINE, 'src/utils/pre-rendu.js')).href
  )

/**
 * Retrouve la couverture hachée d'un article. Le nom sort de l'outil de
 * construction, donc il ne peut pas être écrit dans `posts.js` — seule sa
 * racine est stable.
 */
async function couvertureHachee(base) {
  const fichiers = await readdir(ASSETS)
  const trouve = fichiers.find(f => f.startsWith(`${base}-`) && EXTENSIONS_IMAGE.test(f))
  if (!trouve) {
    console.error(`✗ Couverture introuvable dans dist/spa/assets : « ${base}-*.webp ».`)
    process.exit(1)
  }
  return `/assets/${trouve}`
}

const gabarit = stripPrerenderedTags(await readFile(join(SORTIE, 'index.html'), 'utf8'))

if (!gabarit.includes('</head>')) {
  console.error("✗ Le index.html construit n'a pas de </head> : rien à augmenter.")
  process.exit(1)
}

/** La graisse 600 habille les titres, donc elle est peinte tout de suite. */
const fichiersAssets = await readdir(ASSETS)
const police = fichiersAssets.find(f => /^Lexend-SemiBold-.*\.woff2$/.test(f))
if (!police) {
  console.error('✗ Lexend-SemiBold-*.woff2 introuvable dans dist/spa/assets.')
  process.exit(1)
}
const preload = renderFontPreload(`/assets/${police}`)

const routes = prerenderedRoutes()

for (const route of routes) {
  if (route.cover) route.image = await couvertureHachee(route.cover)

  const tags = `${preload}\n    ${renderHeadTags(route)}`
  const document = gabarit.replace('</head>', `  ${tags}\n</head>`)
  const dossier = route.path === '/' ? SORTIE : join(SORTIE, route.path)

  await mkdir(dossier, { recursive: true })
  await writeFile(join(dossier, 'index.html'), document)
}

// L'instantané que NGINX sert, en statut 404, pour ce qui ne correspond à aucune
// route. Sans lui, `try_files … /index.html` répondait 200 avec le titre et la
// canonique de l'accueil : chaque faute de frappe devenait un duplicata.
const introuvable = notFoundRoute()
await writeFile(
  join(SORTIE, '404.html'),
  gabarit.replace('</head>', `  ${preload}\n    ${renderHeadTags(introuvable)}\n</head>`)
)

await writeFile(join(SORTIE, 'sitemap.xml'), renderSitemap(routes))
await writeFile(join(SORTIE, 'robots.txt'), renderRobots())

console.info(`✓ ${routes.length} instantanés de route, plus 404.html, sitemap.xml et robots.txt`)
