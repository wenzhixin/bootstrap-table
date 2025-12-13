import { visit } from 'unist-util-visit'
import Config from '../config.js'
import { defaultLocale, locales } from '../i18n/ui.js'

const getNestedValue = (obj, path) => path.split('.').reduce((current, key) =>
  current && current[key] !== undefined ? current[key] : undefined, obj)

const getLocaleFromPath = filepath => {
  if (!filepath) {
    return defaultLocale
  }

  const pathParts = filepath.split('/')
  const pagesIndex = pathParts.findIndex(part => part === 'pages')

  if (pagesIndex !== -1 && pathParts.length > pagesIndex + 1) {
    const potentialLocale = pathParts[pagesIndex + 1]

    // Check if it's a valid locale
    if (
      potentialLocale &&
      locales[potentialLocale]
    ) {
      return potentialLocale
    }
  }

  return defaultLocale
}

const replaceConfigInText = (text, locale) => text.replace(/\[\[config:(?<name>[\w.]+)]]/g, (match, key) => {
  const value = getNestedValue(Config, key)

  if (value === undefined) {
    console.warn(`Warning: Configuration key '${key}' not found in config.js. Placeholder will remain unchanged in generated content.`)
    return match
  }

  if (key === 'baseurl') {
    return value + (locale === defaultLocale ? '' : `/${locale}`)
  }

  return value
})

const replaceConfigInAttributes = (attributes, locale) => attributes.map(attribute => {
  if (attribute.type === 'mdxJsxAttribute' && typeof attribute.value === 'string') {
    attribute.value = replaceConfigInText(attribute.value, locale)
  }

  return attribute
})

export default function remarkInjectConfig () {
  return (tree, file) => {
    // Get locale from file path
    const locale = getLocaleFromPath(file.history?.[0] || '')

    visit(tree, ['code', 'definition', 'image', 'inlineCode', 'link', 'text', 'mdxJsxFlowElement'], node => {
      switch (node.type) {
        case 'code':
        case 'inlineCode':
        case 'text': {
          node.value = replaceConfigInText(node.value, locale)
          break
        }
        case 'image': {
          if (node.alt) {
            node.alt = replaceConfigInText(node.alt, locale)
          }

          node.url = replaceConfigInText(node.url, locale)
          break
        }
        case 'definition':
        case 'link': {
          node.url = replaceConfigInText(node.url, locale)
          break
        }
        case 'mdxJsxFlowElement': {
          node.attributes = replaceConfigInAttributes(node.attributes, locale)
          break
        }
        default: {
          break
        }
      }
    })
  }
}
