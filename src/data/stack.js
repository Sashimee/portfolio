/**
 * Stack technique, source unique pour la page « à propos » et le bandeau
 * défilant de l'accueil. La liste vivait dans About.vue, où elle mélangeait
 * données et présentation.
 *
 * `group` est une clé i18n résolue au rendu (about.groups.*), l'icône est un
 * tracé SVG de `src/data/icons.js` — plus aucune police d'icônes n'est chargée.
 */
import icons from '@/data/icons'

export const STACK_GROUPS = ['frontend', 'backend', 'infra', 'tools']

export default [
  { label: 'VueJs', icon: icons.vuejs, group: 'frontend', link: 'https://vuejs.org/' },
  { label: 'Javascript', icon: icons.js, group: 'frontend', link: 'https://developer.mozilla.org/docs/Web/JavaScript' },
  { label: 'HTML', icon: icons.html5, group: 'frontend', link: 'https://developer.mozilla.org/docs/Web/HTML' },
  { label: 'CSS', icon: icons.css3, group: 'frontend', link: 'https://developer.mozilla.org/docs/Web/CSS' },
  { label: 'Sass', icon: icons.sass, group: 'frontend', link: 'https://sass-lang.com/' },
  { label: 'Angular', icon: icons.angular, group: 'frontend', link: 'https://angular.dev/' },
  { label: 'React', icon: icons.react, group: 'frontend', link: 'https://react.dev/' },
  { label: 'TypeScript', icon: icons.code, group: 'frontend', link: 'https://www.typescriptlang.org/' },
  { label: 'Vite', icon: icons.bolt, group: 'frontend', link: 'https://vite.dev/' },
  { label: 'Quasar', icon: icons.layerGroup, group: 'frontend', link: 'https://quasar.dev/' },

  { label: 'Laravel', icon: icons.laravel, group: 'backend', link: 'https://laravel.com/' },
  { label: 'PHP', icon: icons.php, group: 'backend', link: 'https://www.php.net/' },
  { label: 'Wordpress', icon: icons.wordpress, group: 'backend', link: 'https://wordpress.org/' },
  { label: 'Node.js', icon: icons.nodeJs, group: 'backend', link: 'https://nodejs.org/' },
  { label: 'Hono', icon: icons.fire, group: 'backend', link: 'https://hono.dev/' },
  { label: 'PostgreSQL', icon: icons.database, group: 'backend', link: 'https://www.postgresql.org/' },

  { label: 'Linux', icon: icons.linux, group: 'infra', link: 'https://www.linux.org/' },
  { label: 'VMware', icon: icons.server, group: 'infra', link: 'https://www.vmware.com/' },
  { label: 'Mikrotik', icon: icons.networkWired, group: 'infra', link: 'https://mikrotik.com/' },
  { label: 'Docker', icon: icons.docker, group: 'infra', link: 'https://www.docker.com/' },
  { label: 'Traefik', icon: icons.route, group: 'infra', link: 'https://traefik.io/traefik/' },
  { label: 'Dokploy', icon: icons.rocket, group: 'infra', link: 'https://dokploy.com/' },
  { label: 'GitHub Actions', icon: icons.arrowsRotate, group: 'infra', link: 'https://github.com/features/actions' },

  { label: 'GitHub', icon: icons.github, group: 'tools', link: 'https://github.com/Sashimee' },
  { label: 'VSCode', icon: icons.microsoft, group: 'tools', link: 'https://code.visualstudio.com/' },
  { label: 'Claude Code', icon: icons.robot, group: 'tools', link: 'https://claude.com/claude-code' },
  { label: 'Vitest', icon: icons.vial, group: 'tools', link: 'https://vitest.dev/' },
  { label: 'Playwright', icon: icons.masksTheater, group: 'tools', link: 'https://playwright.dev/' }
]
