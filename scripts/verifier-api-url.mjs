#!/usr/bin/env node
/**
 * Vérifie, après construction, que l'hôte de l'API a bien été injecté dans le
 * bundle.
 *
 * Pourquoi un script plutôt qu'un test : la valeur n'existe qu'après `build`,
 * et son absence ne casse rien de visible. C'est le défaut qui a coûté cher
 * ici — `api.bask.lu` était en dur, et le jour où le domaine est tombé, la
 * seule façon de le corriger était de republier le front. La rechute serait
 * pire : `build.env` a changé de sens en @quasar/app-vite v3, et une variable
 * posée au mauvais endroit sort du build en `import.meta.env.X` non résolu,
 * sans un mot. Le formulaire posterait alors sur l'origine du site.
 */
import { readdir, readFile } from 'node:fs/promises'
import { join } from 'node:path'

const DOSSIER = 'dist/spa/assets'
const MOTIF = /create\(\{\s*baseURL\s*:\s*[`'"]([^`'"]+)[`'"]/

/** Domaines dont on sait qu'ils ne répondent plus : ils ne doivent pas revenir. */
const MORTS = ['api.bask.lu']

const fichiers = (await readdir(DOSSIER)).filter(f => f.endsWith('.js'))

let trouvee = null
for (const fichier of fichiers) {
  const contenu = await readFile(join(DOSSIER, fichier), 'utf8')
  const correspondance = contenu.match(MOTIF)
  if (correspondance) {
    trouvee = correspondance[1]
    break
  }
}

if (trouvee === null) {
  console.error(
    "✗ Aucun `axios.create({ baseURL: '…' })` littéral dans le bundle.\n" +
      '  La variable n\'a pas été injectée : vérifier `build.defineEnv` dans\n' +
      '  quasar.config.js (et non `build.env`, qui ne définit plus de variables).'
  )
  process.exit(1)
}

if (!/^https?:\/\//.test(trouvee)) {
  console.error(`✗ L'hôte de l'API n'est pas absolu : « ${trouvee} ».`)
  process.exit(1)
}

const mort = MORTS.find(domaine => trouvee.includes(domaine))
if (mort) {
  console.error(`✗ Le bundle vise « ${mort} », qui ne résout plus.`)
  process.exit(1)
}

console.info(`✓ Hôte de l'API injecté : ${trouvee}`)
