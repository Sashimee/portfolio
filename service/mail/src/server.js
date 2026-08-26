/**
 * Point d'entrée : la configuration est lue et validée ici, et nulle part
 * ailleurs. Un secret manquant arrête le conteneur au démarrage plutôt qu'à la
 * première requête.
 */
import { serve } from '@hono/node-server'

import { creerApp } from './app.js'
import { chargerConfig } from './config.js'
import { creerExpediteur } from './mailer.js'
import { creerVerificateur } from './recaptcha.js'

const config = chargerConfig()

const app = creerApp({
  config,
  verifierJeton: creerVerificateur(config.recaptcha),
  envoyerCourriel: creerExpediteur(config)
})

serve({ fetch: app.fetch, port: config.port }, info => {
  console.info(`mail: à l'écoute sur le port ${info.port}`)
  console.info(`mail: origines autorisées — ${config.origines.join(', ')}`)
})
