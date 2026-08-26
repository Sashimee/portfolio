/**
 * Validation de la charge utile.
 *
 * Les bornes reprennent **exactement** celles que `Contact.vue` applique dans
 * ses `rules` (nom < 1024, message < 5120) et l'expression de
 * `src/utils/validation.js` côté SPA. La duplication est assumée : le service
 * se construit depuis son seul dossier, il ne peut pas importer le front, et
 * un service qui fait confiance aux règles du navigateur ne valide rien.
 *
 * `test/validation.spec.js` fige ces bornes ; si le front les change, c'est ici
 * qu'il faut venir.
 */

const MOTIF_COURRIEL =
  /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/

export const BORNES = { nom: 1024, message: 5120 }

function chaineNonVide(valeur) {
  return typeof valeur === 'string' && valeur.trim().length > 0
}

/**
 * @returns {{ valide: true, donnees: object } | { valide: false, motif: string }}
 */
export function validerDemande(corps) {
  if (corps === null || typeof corps !== 'object' || Array.isArray(corps)) {
    return { valide: false, motif: 'corps_invalide' }
  }

  const { name, email, message, token } = corps

  if (!chaineNonVide(name)) return { valide: false, motif: 'nom_manquant' }
  if (name.length >= BORNES.nom) return { valide: false, motif: 'nom_trop_long' }

  if (!chaineNonVide(email)) return { valide: false, motif: 'courriel_manquant' }
  if (!MOTIF_COURRIEL.test(email)) return { valide: false, motif: 'courriel_invalide' }

  if (!chaineNonVide(message)) return { valide: false, motif: 'message_manquant' }
  if (message.length >= BORNES.message) return { valide: false, motif: 'message_trop_long' }

  if (!chaineNonVide(token)) return { valide: false, motif: 'jeton_manquant' }

  return {
    valide: true,
    donnees: {
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
      token
    }
  }
}

export { MOTIF_COURRIEL }
