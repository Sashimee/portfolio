/**
 * Stack technique, source unique pour la page « à propos » et le bandeau
 * défilant de l'accueil. La liste vivait dans About.vue, où elle mélangeait
 * données et présentation.
 *
 * `group` est une clé i18n résolue au rendu (about.groups.*), l'icône vient de
 * Font Awesome (déjà chargé par quasar.config.js).
 */
export const STACK_GROUPS = ['frontend', 'backend', 'infra', 'tools']

export default [
  { label: 'VueJs', icon: 'fab fa-vuejs', group: 'frontend', link: 'https://vuejs.org/' },
  { label: 'Javascript', icon: 'fab fa-js', group: 'frontend', link: 'https://developer.mozilla.org/docs/Web/JavaScript' },
  { label: 'HTML', icon: 'fab fa-html5', group: 'frontend', link: 'https://developer.mozilla.org/docs/Web/HTML' },
  { label: 'CSS', icon: 'fab fa-css3', group: 'frontend', link: 'https://developer.mozilla.org/docs/Web/CSS' },
  { label: 'Sass', icon: 'fab fa-sass', group: 'frontend', link: 'https://sass-lang.com/' },
  { label: 'Angular', icon: 'fab fa-angular', group: 'frontend', link: 'https://angular.dev/' },

  { label: 'Laravel', icon: 'fab fa-laravel', group: 'backend', link: 'https://laravel.com/' },
  { label: 'PHP', icon: 'fab fa-php', group: 'backend', link: 'https://www.php.net/' },
  { label: 'Wordpress', icon: 'fab fa-wordpress', group: 'backend', link: 'https://wordpress.org/' },

  { label: 'Linux', icon: 'fab fa-linux', group: 'infra', link: 'https://www.linux.org/' },
  { label: 'VMware', icon: 'fas fa-server', group: 'infra', link: 'https://www.vmware.com/' },
  { label: 'Mikrotik', icon: 'fas fa-network-wired', group: 'infra', link: 'https://mikrotik.com/' },

  { label: 'GitHub', icon: 'fab fa-github', group: 'tools', link: 'https://github.com/Sashimee' },
  { label: 'VSCode', icon: 'fab fa-microsoft', group: 'tools', link: 'https://code.visualstudio.com/' }
]
