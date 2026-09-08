import { describe, expect, it } from 'vitest'
import icons from '@/data/icons'
import stack from '@/data/stack'
import links from '@/data/links'

// Le contrat de QIcon : un nom qui commence par « M » suivi d'un chiffre est
// rendu en SVG en ligne. Tout le reste retombe sur une police d'icônes — qu'on
// ne charge plus, donc un tracé mal formé n'afficherait plus rien du tout.
const TRACE_SVG = /^[Mm]\s?[-+]?\.?\d/

describe("les icônes sont des tracés SVG", () => {
  it('donne à chaque icône un tracé et un viewBox', () => {
    for (const [nom, valeur] of Object.entries(icons)) {
      const [trace, viewBox] = valeur.split('|')
      expect(TRACE_SVG.test(trace), `${nom} : « ${trace.slice(0, 24)}… »`).toBe(true)
      expect(viewBox, `${nom} n'a pas de viewBox`).toMatch(/^[\d\s.-]+$/)
    }
  })

  // `icons.vuejs2` ne lève pas : la propriété vaut `undefined`, QIcon ne rend
  // rien, et rien ne le signale. C'est le défaut qu'avait un nom Font Awesome
  // absent — un carré vide — en plus discret encore.
  it('résout toutes les icônes citées par les données', () => {
    for (const entree of [...stack, ...links]) {
      const etiquette = entree.label
      expect(entree.icon, `${etiquette} n'a pas d'icône`).toBeDefined()
      expect(TRACE_SVG.test(entree.icon.split('|')[0]), etiquette).toBe(true)
    }
  })
})
