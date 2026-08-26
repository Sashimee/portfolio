/** ~200 mots/minute, la moyenne retenue pour un texte de blog. */
const WORDS_PER_MINUTE = 200

/**
 * Temps de lecture d'un article, à partir de ses sections traduites.
 *
 * Le calcul était écrit deux fois, à l'identique, dans `Blog.vue` et dans
 * `blog/article.vue` — et les deux devaient annoncer la même durée.
 *
 * `sections` vient de `$tm()` : sur un message tableau, `$t()` rend une chaîne
 * vide, et le compte tombait alors à une minute pour tout le monde.
 */
export function readingTime(sections) {
  const words = (Array.isArray(sections) ? sections : [])
    .flatMap(section => section.paragraphs || [])
    .join(' ')
    .split(/\s+/)
    .filter(Boolean).length

  return Math.max(1, Math.round(words / WORDS_PER_MINUTE))
}
