import { defineBoot } from '#q-app'
import { AddressbarColor, Dark } from 'quasar'

const LIGHT = '#f1efe9'
const DARK = '#0b0c0a'

/** Aligne la couleur de la barre d'adresse sur le thème courant. */
export function syncAddressbarColor() {
  AddressbarColor.set(Dark.isActive ? DARK : LIGHT)
}

export default defineBoot(() => {
  syncAddressbarColor()
})
