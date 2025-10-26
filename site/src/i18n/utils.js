import { defaultLang, ui } from './ui'

export function getLangFromUrl (url) {
  const [, lang] = url.pathname.split('/')

  if (ui[lang]) {
    return lang
  }
  return defaultLang
}

export function useTranslations (url) {
  const lang = getLangFromUrl(url)

  return (key, params) => {
    let translation = ui[lang][key] || ui[defaultLang][key]

    if (params && typeof translation === 'string') {
      Object.keys(params).forEach(param => {
        const placeholder = `{${param}}`

        translation = translation.replaceAll(placeholder, params[param])
      })
    }

    return translation
  }
}
