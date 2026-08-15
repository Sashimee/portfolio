import { onBeforeUnmount, onMounted } from 'vue'

/**
 * Révélation des éléments `[data-reveal]` à leur entrée dans le viewport.
 *
 * L'état initial (opacité 0) n'est appliqué que sous `html.has-reveal`, classe
 * posée ici : sans JS, ou si l'observer n'existe pas, le contenu reste visible
 * au lieu de disparaître définitivement.
 *
 * Le décalage se règle par élément avec `style="--d: 0.1s"`, comme pour les
 * animations d'entrée écrites dans app.sass.
 */
const REVEAL_SELECTOR = '[data-reveal]'

export function useReveal(options = {}) {
  const { rootMargin = '0px 0px -12% 0px', threshold = 0.1 } = options
  let observer = null

  onMounted(() => {
    // `matchMedia` manque dans certains environnements de test : on le traite
    // comme « pas de préférence » plutôt que de laisser remonter une erreur.
    const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches === true

    // Sans IntersectionObserver (ou sans mouvement souhaité), on marque tout
    // comme révélé : la classe `has-reveal` peut rester, l'état final est neutre.
    if (reduced || typeof IntersectionObserver === 'undefined') {
      document.querySelectorAll(REVEAL_SELECTOR).forEach(el => el.classList.add('is-in'))
      return
    }

    document.documentElement.classList.add('has-reveal')

    observer = new IntersectionObserver(
      (entries, self) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          entry.target.classList.add('is-in')
          // Une seule fois : rien ne se re-masque en remontant la page.
          self.unobserve(entry.target)
        }
      },
      { rootMargin, threshold }
    )

    // Le DOM de la page vient d'être monté : tout ce qui porte l'attribut est
    // déjà là, y compris les éléments déjà visibles (révélés au tick suivant).
    document.querySelectorAll(`${REVEAL_SELECTOR}:not(.is-in)`).forEach(el => observer.observe(el))
  })

  onBeforeUnmount(() => {
    observer?.disconnect()
    observer = null
  })
}
