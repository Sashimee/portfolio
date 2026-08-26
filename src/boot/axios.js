import { defineBoot } from '#q-app'
import axios from 'axios'

/**
 * L'hôte de l'API est injecté à la construction par `quasar.config.js`
 * (`build.env`), et non écrit ici : le précédent, `api.bask.lu`, était en dur
 * et a disparu avec son domaine — la seule façon de le corriger était de
 * republier le front.
 *
 * Le service qui répond derrière vit dans `service/mail/`.
 */
const api = axios.create({ baseURL: import.meta.env.API_BASE_URL })

export default defineBoot(({ app }) => {
  app.config.globalProperties.$axios = axios
  app.config.globalProperties.$api = api
})

export { axios, api }
