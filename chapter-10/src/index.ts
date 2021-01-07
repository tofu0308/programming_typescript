import {locale} from './locales/locale-us'

async function main() {
  let userLocale = await getUserLocale()
  let path = `./locales/locale-${userLocale}`
  let localeUS: typeof locale = await import(path)

  console.log(path)
}

function getUserLocale() {
  return 'us'
}

main()