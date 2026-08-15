import { defineBoot } from '#q-app'
import { Dark } from 'quasar'
import { getStoredDark } from '@/utils/preferences'

// The layout used to force dark mode on every visit and forget the choice.
// Honour the stored preference instead; without one, quasar.config.js keeps
// framework.config.dark = 'auto' (the OS setting).
export default defineBoot(() => {
  const stored = getStoredDark()
  if (stored !== null) {
    Dark.set(stored)
  }
})
