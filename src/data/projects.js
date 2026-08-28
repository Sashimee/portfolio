/**
 * Single source of truth for the projects grid.
 *
 * `category` and `infoKey` are i18n keys resolved at render time
 * (projects.categories.* / projects.texts.*), so the list itself
 * stays language-agnostic. It used to be duplicated three times
 * inside Projects.vue, once per locale-dependent computed.
 *
 * `target: "internal"` points to /public/projects_folder/<link>,
 * "external" to a full URL. Screenshots live in /public/screenshots/<img>.webp.
 */
export const PROJECT_CATEGORIES = ['live', 'template', 'archive']

export default [
  {
    name: 'Aura',
    category: 'live',
    link: 'https://mood.bas.lu',
    img: 'aura',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL'],
    target: 'external',
    infoKey: 'aura'
  },
  {
    name: 'Schoulbus',
    category: 'live',
    link: 'https://www.schoulbus.lu',
    img: 'schoulbus',
    tags: ['React', 'TypeScript', 'PostgreSQL'],
    target: 'external',
    infoKey: 'schoulbus'
  },
  {
    name: 'Baskewitsch.lu',
    category: 'live',
    link: 'https://github.com/Sashimee/portfolio',
    img: 'baskewitsch.lu',
    tags: ['Vue.js', 'RGPD', 'laravel'],
    target: 'external',
    infoKey: 'baskewitsch'
  },
  {
    name: 'Dawa',
    category: 'live',
    link: 'http://www.dawa.lu',
    img: 'dawa',
    tags: ['laravel', 'responsive', 'secure'],
    target: 'external',
    infoKey: 'dawa'
  },
  {
    name: 'About Blank Generator',
    category: 'live',
    link: 'http://aboutblankgenerator.com',
    img: 'blank',
    tags: ['css', 'responsive'],
    target: 'external',
    infoKey: 'abg'
  },
  {
    name: 'Bootstrap Site',
    category: 'template',
    link: 'x1',
    img: 'x1',
    tags: ['css', 'bootstrap', 'responsive'],
    target: 'internal',
    infoKey: 'boot'
  },
  {
    name: 'Pet4U',
    category: 'template',
    link: 'pet4u',
    img: 'pet4u',
    tags: ['js', 'css'],
    target: 'internal',
    infoKey: 'pet'
  },
  {
    name: 'News Site',
    category: 'template',
    link: 'news',
    img: 'news',
    tags: ['css'],
    target: 'internal',
    infoKey: 'news'
  },
  {
    name: 'Responsive Cupcake',
    category: 'template',
    link: 'cupcake',
    img: 'cupcake',
    tags: ['css', 'responsive'],
    target: 'internal',
    infoKey: 'cupcake'
  },
  {
    name: 'Liberty',
    category: 'template',
    link: 'liberty',
    img: 'liberty',
    tags: ['css'],
    target: 'internal',
    infoKey: 'liberty'
  },
  {
    name: 'Peinture.lu',
    category: 'live',
    link: 'http://www.peinture.lu',
    img: 'peinture',
    tags: ['wordpress', 'css', 'responsive'],
    target: 'external',
    infoKey: 'peinture'
  },
  {
    name: 'Old Portfolio',
    category: 'archive',
    link: 'https://github.com/Sashimee/ProPort',
    img: 'old_portfolio',
    tags: ['responsive', 'php'],
    target: 'external',
    infoKey: 'old'
  }
]
