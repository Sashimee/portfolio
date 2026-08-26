/**
 * Limiteur de débit à fenêtre fixe, en mémoire.
 *
 * En mémoire, donc : remis à zéro au redéploiement, et non partagé si le
 * service tourne un jour en plusieurs exemplaires. C'est suffisant ici — le
 * formulaire d'un portfolio, pas une API publique — et cela évite d'ajouter un
 * Redis pour compter jusqu'à cinq. Le jour où le service se réplique, c'est
 * cette note qu'il faudra venir contredire.
 */
export function creerLimiteur({ fenetreMs, maximum, horloge = Date.now }) {
  const compteurs = new Map()

  function purger(maintenant) {
    for (const [cle, entree] of compteurs) {
      if (entree.expireA <= maintenant) compteurs.delete(cle)
    }
  }

  return {
    /**
     * @returns {{ autorise: boolean, resteMs: number }}
     */
    verifier(cle) {
      const maintenant = horloge()
      purger(maintenant)

      const entree = compteurs.get(cle)

      if (!entree) {
        compteurs.set(cle, { compte: 1, expireA: maintenant + fenetreMs })
        return { autorise: true, resteMs: 0 }
      }

      if (entree.compte >= maximum) {
        return { autorise: false, resteMs: entree.expireA - maintenant }
      }

      entree.compte += 1
      return { autorise: true, resteMs: 0 }
    },

    get taille() {
      return compteurs.size
    }
  }
}
