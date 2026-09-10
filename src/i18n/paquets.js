import { AVAILABLE_LOCALES } from '@/utils/preferences'

/**
 * Un `import()` par langue, donc un fragment par langue.
 *
 * `src/i18n/index.js` réunit les trois paquets en un objet, et cet objet était
 * importé statiquement — par l'entrée du bundle *et* par `MainLayout` : 166 006
 * octets bruts, 63 641 compressés, les trois langues téléchargées sur toutes
 * les pages pour n'en afficher qu'une. Le fichier reste, les tests le lisent
 * pour comparer les trois d'un coup ; l'application, elle, passe par ici.
 *
 * Les spécifieurs sont écrits en clair : un `import()` dont le chemin se
 * calcule empêche l'outil de construction de savoir quoi découper.
 */
const paquets = {
  en: () => import('./en'),
  fr: () => import('./fr'),
  de: () => import('./de')
}

export const LOCALES_CHARGEABLES = Object.keys(paquets)

/**
 * Les messages d'une langue, chargés à la demande.
 *
 * Lève sur une langue inconnue : `resolveLocale` rabat déjà tout ce qui n'est
 * pas une des trois sur l'anglais, donc y arriver signifierait que
 * `AVAILABLE_LOCALES` et cette table ont divergé — `test/i18n.spec.js` le
 * refuse, mais une panne muette ici afficherait des clés brutes à la place du
 * texte.
 */
export async function loadLocaleMessages(locale) {
  const paquet = paquets[locale]

  if (!paquet) {
    throw new Error(
      `Langue « ${locale} » sans paquet : ajouter son import() dans src/i18n/paquets.js, ` +
        `à côté de ${AVAILABLE_LOCALES.join(', ')}.`
    )
  }

  return (await paquet()).default
}
