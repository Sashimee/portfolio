import projects from '@/data/projects'

const internalShortcodes = new Set(
  projects.filter(project => project.target === 'internal').map(project => project.link)
)

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'home', component: () => import('@/pages/Index.vue') },
      { path: 'about', name: 'about', component: () => import('@/pages/About.vue') },
      { path: 'projects', name: 'projects', component: () => import('@/pages/Projects.vue') },
      {
        path: 'projects/:shortcode',
        name: 'project',
        component: () => import('@/pages/projects/Show.vue'),
        // An unknown shortcode used to load the web server's error page inside
        // the iframe; the list of demos is right here, so answer with the 404.
        beforeEnter: to => (internalShortcodes.has(to.params.shortcode) ? true : '/404')
      },
      { path: 'contact', name: 'contact', component: () => import('@/pages/Contact.vue') },
      { path: 'blog', name: 'blog', component: () => import('@/pages/Blog.vue') },
      { path: 'blog/article', name: 'article', component: () => import('@/pages/blog/article.vue') },

      // Always leave this as last one
      { path: ':catchAll(.*)*', name: 'not-found', component: () => import('@/pages/Error404.vue') }
    ]
  }
]

export default routes
