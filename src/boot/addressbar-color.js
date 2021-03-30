// import something here

// "async" is optional;
// more info on params: https://quasar.dev/quasar-cli/boot-files
// export default async (/* { app, router, Vue ... } */) => {
  // something to do
// }

// file: /src/boot/addressbar-color.js
import { AddressbarColor } from 'quasar'

export default () => {
  AddressbarColor.set('#a2e3fa')
}