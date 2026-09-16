/**
 * Source unique des articles du blog.
 *
 * Le blog n'en portait qu'un seul, câblé dans `Blog.vue` et dans une route
 * figée `/blog/article` ; le texte vivait sous la clé i18n `blogPost1`. Un
 * deuxième article par copie du fichier aurait fait un troisième copier-coller
 * au suivant, d'où ce registre.
 *
 * `key` est la racine i18n de l'article (title / title2 / sections), résolue au
 * rendu, donc la liste reste indépendante de la langue — même parti que
 * `infoKey` dans `projects.js`.
 *
 * La couverture est un chemin public, comme les illustrations de sections
 * (`public/screenshots/<illustrations>/<img>.webp`). Elle a été un import ESM,
 * donc hachée par Vite : trois couvertures étaient alors identiques au md5 à
 * trois vignettes de `public/screenshots/`, et la construction livrait les deux
 * copies. Le prix de la fusion est le cache — un chemin public n'est pas
 * `immutable`, il vaut `max-age=86400` — et le gain est qu'une capture n'existe
 * plus qu'une fois, ici comme sur le disque.
 */

/** Du plus récent au plus ancien : `Blog.vue` numérote dans cet ordre. */
export default [
  {
    slug: 'pic-collage-on-device',
    key: 'blogPost6',
    date: '2026-09-12',
    cover: '/screenshots/pic-collage.webp',
    illustrations: 'article_six'
  },
  {
    slug: 'royaume-foot-3d-for-children',
    key: 'blogPost5',
    date: '2026-09-08',
    cover: '/screenshots/royaume-foot-cover.webp',
    illustrations: 'article_five',
    // Les captures du jeu sont prises sur un téléphone tenu à la verticale,
    // la forme pour laquelle il est dessiné — même cas que blogPost2.
    portrait: true
  },
  {
    slug: 'green-coding-own-site',
    key: 'blogPost4',
    date: '2026-09-07',
    cover: '/screenshots/baskewitsch.lu.webp',
    // Aucune section n'est illustrée : le dossier n'existe donc pas encore.
    // Le champ reste renseigné, routes.spec.js le voulant non vide.
    illustrations: 'article_four'
  },
  {
    slug: 'aura-share-cards',
    key: 'blogPost3',
    date: '2026-08-28',
    cover: '/screenshots/aura.webp',
    illustrations: 'article_three'
  },
  {
    slug: 'schoulbus-claude-code',
    key: 'blogPost2',
    date: '2026-08-26',
    cover: '/screenshots/schoulbus.webp',
    illustrations: 'article_two',
    // Les captures de l'application sont verticales (740 × 1648) : au plafond
    // de 180 px des illustrations courantes, elles seraient illisibles.
    portrait: true
  },
  {
    slug: 'green-coding-fintech',
    key: 'blogPost1',
    date: '2023-07-22',
    cover: '/screenshots/gc_info_fr.webp',
    illustrations: 'article_one'
  }
]
