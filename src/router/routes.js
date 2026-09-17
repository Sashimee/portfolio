import projects from '@/data/projects'
import posts from '@/data/posts'
import { AVAILABLE_LOCALES, DEFAULT_LOCALE } from '@/utils/preferences'
import { localePath, splitLocalePath } from '@/utils/locale-paths'

const internalShortcodes = new Set(
  projects.filter(project => project.target === 'internal').map(project => project.link)
)

const postSlugs = new Set(posts.map(post => post.slug))

/** L'article le plus ancien : la cible de l'ancienne adresse /blog/article. */
const oldestSlug = posts[posts.length - 1].slug

/** `en|fr|de` — la contrainte vient de la liste, pas d'une chaîne recopiée. */
const LOCALE_PATTERN = AVAILABLE_LOCALES.join('|')

const pages = [
  { path: '', name: 'home', component: () => import('@/pages/Index.vue') },
  { path: 'about', name: 'about', component: () => import('@/pages/About.vue') },
  { path: 'projects', name: 'projects', component: () => import('@/pages/Projects.vue') },
  {
    path: 'projects/:shortcode',
    name: 'project',
    component: () => import('@/pages/projects/Show.vue'),
    // An unknown shortcode used to load the web server's error page inside
    // the iframe; the list of demos is right here, so answer with the 404.
    beforeEnter: to => (internalShortcodes.has(to.params.shortcode) ? true : localePath('/404', to.params.locale))
  },
  { path: 'contact', name: 'contact', component: () => import('@/pages/Contact.vue') },
  { path: 'blog', name: 'blog', component: () => import('@/pages/Blog.vue') },

  // Le blog n'avait qu'un article, à cette adresse ; elle est indexée et
  // partagée. Elle passe AVANT `blog/:slug` : une redirection littérale ne
  // doit pas dépendre du classement statique/paramétré du routeur.
  { path: 'blog/article', redirect: to => localePath(`/blog/${oldestSlug}`, to.params.locale) },
  {
    path: 'blog/:slug',
    name: 'article',
    component: () => import('@/pages/blog/article.vue'),
    // Même raison que pour les démos ci-dessus : la liste est ici, autant
    // répondre 404 tout de suite plutôt que de monter une page vide.
    beforeEnter: to => (postSlugs.has(to.params.slug) ? true : localePath('/404', to.params.locale))
  },

  // Always leave this as last one
  { path: ':catchAll(.*)*', name: 'not-found', component: () => import('@/pages/Error404.vue') }
]

const routes = [
  {
    path: `/:locale(${LOCALE_PATTERN})`,
    component: () => import('@/layouts/MainLayout.vue'),
    children: pages
  },

  // Tout ce qui n'est pas préfixé rejoint l'anglais, en gardant son chemin :
  // les adresses d'avant le lot 28 sont indexées et partagées. NGINX répond
  // 301 sur les mêmes, pour que le signal parte bien à la nouvelle adresse ;
  // cette règle-ci est ce que voit une navigation déjà dans l'application.
  {
    path: '/:catchAll(.*)*',
    redirect: to => localePath(splitLocalePath(to.path).path, DEFAULT_LOCALE)
  }
]

export default routes
