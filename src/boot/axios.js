import { defineBoot } from '#q-app'
import axios from 'axios'

const api = axios.create({ baseURL: 'https://api.bask.lu/api' })

export default defineBoot(({ app }) => {
  app.config.globalProperties.$axios = axios
  app.config.globalProperties.$api = api
})

export { axios, api }
