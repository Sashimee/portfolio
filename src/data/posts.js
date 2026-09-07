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
 * La couverture est importée en ESM pour rester hachée par Vite ; les
 * illustrations de sections sont servies depuis
 * `public/screenshots/<illustrations>/<img>.webp`.
 */
import couvertureSchoulbus from '@/assets/schoulbus-cover.webp'
import couvertureGreenCoding from '@/assets/gc_info_fr.webp'
import couvertureAura from '@/assets/aura-cover.webp'
import couverturePortfolio from '@/assets/portfolio-cover.webp'

/** Du plus récent au plus ancien : `Blog.vue` numérote dans cet ordre. */
export default [
  {
    slug: 'green-coding-own-site',
    key: 'blogPost4',
    date: '2026-09-07',
    cover: couverturePortfolio,
    // Aucune section n'est illustrée : le dossier n'existe donc pas encore.
    // Le champ reste renseigné, routes.spec.js le voulant non vide.
    illustrations: 'article_four'
  },
  {
    slug: 'aura-share-cards',
    key: 'blogPost3',
    date: '2026-08-28',
    cover: couvertureAura,
    illustrations: 'article_three'
  },
  {
    slug: 'schoulbus-claude-code',
    key: 'blogPost2',
    date: '2026-08-26',
    cover: couvertureSchoulbus,
    illustrations: 'article_two',
    // Les captures de l'application sont verticales (740 × 1648) : au plafond
    // de 180 px des illustrations courantes, elles seraient illisibles.
    portrait: true
  },
  {
    slug: 'green-coding-fintech',
    key: 'blogPost1',
    date: '2023-07-22',
    cover: couvertureGreenCoding,
    illustrations: 'article_one'
  }
]
