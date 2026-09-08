import { describe, expect, it } from 'vitest'
import { readFileSync } from 'node:fs'
import { flushPromises, mount } from '@vue/test-utils'
import { createMemoryHistory, createRouter } from 'vue-router'
import MainLayout from '@/layouts/MainLayout.vue'
import appRoutes from '@/router/routes'
import posts from '@/data/posts'
import projects from '@/data/projects'
import {
  coverBaseName,
  prerenderedRoutes,
  renderFontPreload,
  renderHeadTags,
  renderRobots,
  renderSitemap,
  stripPrerenderedTags
} from '@/utils/pre-rendu'

const routes = prerenderedRoutes()
const chemins = routes.map(route => route.path)

describe('les routes pré-rendues', () => {
  it('couvre les cinq pages fixes, les démos et tous les articles', () => {
    for (const chemin of ['/', '/about', '/projects', '/blog', '/contact']) {
      expect(chemins).toContain(chemin)
    }
    for (const post of posts) expect(chemins).toContain(`/blog/${post.slug}`)
    for (const project of projects.filter(p => p.target === 'internal')) {
      expect(chemins).toContain(`/projects/${project.link}`)
    }
  })

  it('donne à chaque route un titre et une description non vides', () => {
    for (const route of routes) {
      expect(route.title, route.path).toBeTruthy()
      expect(route.description, route.path).toBeTruthy()
    }
  })

  // Le sous-titre d'un article porte du balisage, que la page affiche mais
  // qu'une méta-description ne doit pas recopier telle quelle.
  it("ne laisse pas de balisage dans la description d'un article", () => {
    for (const route of routes.filter(r => r.path.startsWith('/blog/'))) {
      expect(route.description, route.path).not.toMatch(/[<>]/)
    }
  })

  // L'accueil et l'index du blog changent avec le dernier article : ils portent
  // une date réelle. Les autres n'en ont aucune à annoncer, et une date inventée
  // vaudrait moins qu'un silence.
  it('date les articles, plus les deux pages que le dernier article change', () => {
    const datees = new Set(['/', '/blog'])

    for (const route of routes) {
      if (route.path.startsWith('/blog/') || datees.has(route.path)) {
        expect(route.lastmod, route.path).toMatch(/^\d{4}-\d{2}-\d{2}$/)
      } else {
        expect(route.lastmod, route.path).toBeUndefined()
      }
    }

    const plusRecente = posts.map(post => post.date).sort().at(-1)
    for (const chemin of datees) {
      expect(routes.find(route => route.path === chemin).lastmod).toBe(plusRecente)
    }
  })

  it('pose des données structurées sur l\'accueil et sur les articles', () => {
    const ld = balises => {
      const trouve = balises.match(
        /<script type="application\/ld\+json" data-prerendered>([\s\S]*?)<\/script>/
      )
      return trouve ? JSON.parse(trouve[1].replaceAll('\\u003c', '<')) : null
    }

    const accueil = ld(renderHeadTags(routes.find(r => r.path === '/')))
    expect(accueil['@type']).toBe('WebSite')
    expect(accueil.author.sameAs).toContain('https://github.com/Sashimee')

    const article = ld(renderHeadTags(routes.find(r => r.path.startsWith('/blog/'))))
    expect(article['@type']).toBe('BlogPosting')
    expect(article.datePublished).toMatch(/^\d{4}-\d{2}-\d{2}$/)
    expect(article.image).toMatch(/^https:\/\//)

    // Une fiche de projet n'a pas de type schema.org qui lui aille : aucune
    // balise plutôt qu'une balise creuse.
    expect(ld(renderHeadTags(routes.find(r => r.path.startsWith('/projects/'))))).toBeNull()
  })

  it('n\'ouvre jamais la balise qui porte le JSON-LD', () => {
    // `</script>` dans un titre refermerait le bloc et déverserait le reste
    // dans le document.
    const balises = renderHeadTags({
      path: '/blog/x',
      title: 'Fin</script><script>alert(1)</script>',
      description: 'x',
      article: { published: '2026-09-08' }
    })

    expect(balises).not.toContain('</script><script>alert(1)')
    expect(balises).toContain('\\u003c/script')
  })

  it('donne à chaque fiche de projet sa propre description', () => {
    const fiches = routes.filter(route => route.path.startsWith('/projects/'))

    expect(fiches.length).toBeGreaterThan(1)
    expect(new Set(fiches.map(route => route.description)).size).toBe(fiches.length)
    for (const route of fiches) {
      expect(route.description.length, route.path).toBeLessThanOrEqual(161)
      expect(route.description, route.path).not.toMatch(/[<>]/)
    }
  })

  it("déclare un article comme un article, avec sa date", () => {
    for (const route of routes.filter(r => r.path.startsWith('/blog/'))) {
      expect(route.article).toEqual({ published: route.lastmod })
    }

    const balises = renderHeadTags(routes.find(r => r.path.startsWith('/blog/')))
    expect(balises).toContain('property="og:type" content="article"')
    expect(balises).toContain('property="article:published_time"')

    expect(renderHeadTags(routes.find(r => r.path === '/about'))).toContain(
      'property="og:type" content="website"'
    )
  })
})

describe('coverBaseName', () => {
  // La valeur d'un import d'image diffère selon qui exécute le module ; seule
  // la racine du nom est commune, et c'est elle qui retrouve le fichier haché.
  it("retire le dossier, l'empreinte de requête et l'extension", () => {
    expect(coverBaseName('/src/assets/aura-cover.webp')).toBe('aura-cover')
    expect(coverBaseName('/assets/aura-cover.webp?used')).toBe('aura-cover')
    expect(coverBaseName('aura-cover.webp')).toBe('aura-cover')
  })
})

describe('les balises écrites dans un instantané', () => {
  const balises = renderHeadTags({
    path: '/blog/exemple',
    title: 'Un titre',
    description: 'Une description',
    image: '/assets/couverture.webp'
  })

  it('porte titre, description, og:*, twitter:* et canonique', () => {
    expect(balises).toContain('<title data-prerendered>Un titre | Alex Baskewitsch</title>')
    expect(balises).toContain('property="og:title"')
    expect(balises).toContain('property="og:description"')
    expect(balises).toContain('name="twitter:card"')
    expect(balises).toContain('rel="canonical"')
  })

  it('absolutise les adresses', () => {
    expect(balises).toContain('content="https://alex.baskewitsch.lu/blog/exemple"')
    expect(balises).toContain('content="https://alex.baskewitsch.lu/assets/couverture.webp"')
  })

  it('marque tout ce qu\'il pose, pour que le démarrage puisse le retirer', () => {
    const posees = balises.match(/<(?:title|meta|link)\b/g).length
    const marquees = balises.match(/data-prerendered/g).length
    expect(marquees).toBe(posees)
  })

  // Un titre d'article contient des apostrophes et des guillemets ; non échappé,
  // il fermerait l'attribut et le reste de la balise deviendrait du balisage.
  it('échappe les guillemets et les chevrons', () => {
    const sortie = renderHeadTags({ path: '/x', title: 'a "b" & <c>', description: 'd' })
    expect(sortie).toContain('&quot;b&quot; &amp; &lt;c&gt;')
    expect(sortie).not.toMatch(/content="[^"]*"[a-z]/)
  })
})

describe('stripPrerenderedTags', () => {
  const gabarit =
    '<!doctype html><html><head><meta charset="utf-8"><title>Alex Baskewitsch</title></head><body></body></html>'
  const augmente = gabarit.replace(
    '</head>',
    `${renderFontPreload('/assets/Lexend-SemiBold-abc.woff2')}${renderHeadTags({ path: '/', title: 'T', description: 'D' })}</head>`
  )

  // Le script lit `dist/spa/index.html` comme gabarit et y écrit aussi
  // l'instantané de l'accueil : sans ce nettoyage, une seconde exécution
  // empilerait les balises de l'accueil sur toutes les autres routes.
  // Le nettoyage retire aussi le titre du gabarit, donc il ne rend plus le
  // document à l'octet près : la propriété qui compte est l'idempotence —
  // augmenter puis nettoyer ramène à ce que nettoyer seul donne.
  it('ramène un document augmenté à son gabarit nettoyé', () => {
    expect(stripPrerenderedTags(augmente)).toBe(stripPrerenderedTags(gabarit))
    expect(stripPrerenderedTags(augmente)).not.toContain('data-prerendered')
  })

  // Le gabarit porte le titre générique de `index.html`. Laissé en place, il
  // précède celui du pré-rendu dans l'arbre : c'est donc lui que retiennent
  // `document.title` et l'extraction de titre des moteurs, et les quinze
  // instantanés annonçaient le même.
  it('retire aussi le titre générique du gabarit', () => {
    expect(stripPrerenderedTags(gabarit)).not.toContain('<title>')
  })

  it('ne laisse qu\'un seul titre dans un instantané', () => {
    const instantane = stripPrerenderedTags(gabarit).replace(
      '</head>',
      `${renderHeadTags({ path: '/x', title: 'X', description: 'D' })}</head>`
    )
    expect(instantane.match(/<title\b/g)).toHaveLength(1)
    expect(instantane).toContain('<title data-prerendered>X | Alex Baskewitsch</title>')
  })

  it('retire aussi le préchargement de police', () => {
    expect(stripPrerenderedTags(augmente)).not.toContain('data-font-preload')
  })
})

describe('le plan du site et robots.txt', () => {
  const sitemap = renderSitemap(routes)

  it('liste chaque route une fois, en adresse absolue', () => {
    const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1])
    expect(locs).toHaveLength(routes.length)
    expect(new Set(locs).size).toBe(routes.length)
    for (const loc of locs) expect(loc).toMatch(/^https:\/\/alex\.baskewitsch\.lu\//)
  })

  it('date les articles', () => {
    for (const post of posts) {
      expect(sitemap).toContain(`<loc>https://alex.baskewitsch.lu/blog/${post.slug}</loc>`)
    }
    expect([...sitemap.matchAll(/<lastmod>/g)]).toHaveLength(posts.length + 2)
  })

  it('renvoie robots.txt vers le plan du site', () => {
    expect(renderRobots()).toContain('Sitemap: https://alex.baskewitsch.lu/sitemap.xml')
  })
})

// Le greffon Meta de Quasar pose ses propres balises au montage. Si celles de
// l'instantané restaient, le document en porterait deux de chaque — la raison
// pour laquelle `index.html` n'en déclare aucune.
describe("le démarrage retire les balises de l'instantané", () => {
  it('ne laisse aucun [data-prerendered] après le montage', async () => {
    document.head.insertAdjacentHTML(
      'beforeend',
      // Avec `article`, l'instantané porte aussi son bloc JSON-LD : le
      // nettoyage doit emporter le script comme les balises.
      renderHeadTags({
        path: '/blog/exemple',
        title: 'T',
        description: 'D',
        article: { published: '2026-01-01' }
      })
    )
    expect(document.querySelectorAll('[data-prerendered]').length).toBeGreaterThan(0)
    expect(document.querySelectorAll('script[data-prerendered]').length).toBe(1)

    const router = createRouter({ history: createMemoryHistory(), routes: appRoutes })
    router.push(`/blog/${posts[0].slug}`)
    await router.isReady()
    mount(MainLayout, { global: { plugins: [router] } })
    await flushPromises()

    expect(document.querySelectorAll('[data-prerendered]')).toHaveLength(0)
  })
})

// Les instantanés ne valent que s'ils sont servis à l'adresse qu'ils déclarent.
// Sur `try_files $uri $uri/`, NGINX répondait 301 vers l'adresse à barre finale
// — alors que le plan du site et la balise canonique publient l'adresse sans
// barre. Les quatorze routes pré-rendues redirigeaient donc sur leur propre
// adresse canonique, vers une page qui en désignait une autre.
describe('la configuration NGINX sert les instantanés', () => {
  const conf = readFileSync(`${process.cwd()}/nginx/default.conf`, 'utf8')

  it('essaie $uri/index.html avant $uri/', () => {
    // La location fourre-tout, pas celle de /assets/ qui a son propre try_files.
    const fourreTout = conf.match(/location\s+\/\s*\{([^}]*)\}/)
    expect(fourreTout, 'no catch-all `location /` block').not.toBeNull()

    const tryFiles = fourreTout[1].match(/try_files\s+\$uri\s+([^;]+);/)
    expect(tryFiles, 'no `try_files $uri ...` in the catch-all location').not.toBeNull()
    const ordre = tryFiles[1].trim().split(/\s+/)
    expect(ordre).toContain('$uri/index.html')
    if (ordre.includes('$uri/')) {
      expect(ordre.indexOf('$uri/index.html')).toBeLessThan(ordre.indexOf('$uri/'))
    }
  })

  // $scheme vaut `http` derrière un proxy qui termine TLS : une redirection
  // absolue renvoie sur un saut en clair avant de revenir en HTTPS.
  it('émet des redirections relatives', () => {
    expect(conf).toMatch(/absolute_redirect\s+off\s*;/)
  })
})
