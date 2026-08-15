import { defineBoot } from '#q-app'
import { AddressbarColor, Dark } from 'quasar'

const LIGHT = '#f6f8fa'
const DARK = '#0a0d12'

/** Aligne la couleur de la barre d'adresse sur le thème courant. */
export function syncAddressbarColor() {
  AddressbarColor.set(Dark.isActive ? DARK : LIGHT)
}

export default defineBoot(() => {
  syncAddressbarColor()
})
