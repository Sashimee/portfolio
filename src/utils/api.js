import axios from 'axios'

/**
 * L'hôte de l'API est injecté à la construction par `quasar.config.js`
 * (`build.defineEnv`), et non écrit ici : le précédent, `api.bask.lu`, était en
 * dur et a disparu avec son domaine — la seule façon de le corriger était de
 * republier le front.
 *
 * Ce n'est plus un fichier d'amorçage. Il n'enregistrait que `$api` et
 * `$axios`, que personne ne lisait : les deux pages qui postent importent `api`
 * directement. En amorçage, axios partait dans l'entrée du bundle — 17 761
 * octets compressés sur toutes les pages, dont aucune n'appelle l'API sauf ces
 * deux-là. C'est le même piège que `boot/recap.js`.
 *
 * Le service qui répond derrière vit dans `service/mail/`.
 */
export const api = axios.create({ baseURL: import.meta.env.API_BASE_URL })

export { axios }
