// Minimal stand-in for the "#q-app" virtual module that @quasar/app-vite
// provides at build time. The helpers are identity wrappers there too.
export const defineBoot = fn => fn
export const defineRouter = fn => fn
export const defineConfig = fn => fn
