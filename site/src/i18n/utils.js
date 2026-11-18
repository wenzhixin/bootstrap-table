import { defaultLocale, locales, ui } from './ui'
import Config from '@/config.js'

/**
 * Generates a base URL based on the specified locale
 * @param {string} locale - Locale code (e.g., 'en', 'zh-cn')
 * @returns {string} Returns the base URL with locale prefix
 * @example
 * // Assuming Config.baseurl = 'https://example.com'
 * getBaseUrl('en') // Returns 'https://example.com'
 * getBaseUrl('zh-cn') // Returns 'https://example.com/zh-cn'
 */
export function getBaseUrl (locale) {
  return Config.baseurl + (locale === defaultLocale ? '' : `/${locale}`)
}

/**
 * Extracts page slug from the current path
 * @param {string} pathname - Current page path
 * @param {string} locale - Current locale code
 * @returns {string[]} Returns an array with two elements: [main category, subcategory]
 * @example
 * // Assuming default locale is 'en'
 * getCurrentSlug('/docs/getting-started/introduction', 'en')
 * // Returns ['getting-started', 'introduction']
 * getCurrentSlug('/zh-cn/docs/getting-started/introduction', 'zh-cn')
 * // Returns ['getting-started', 'introduction']
 */
export function getCurrentSlug (pathname, locale) {
  // 2: skips leading slash and 'docs' prefix (e.g., '/docs/...')
  // 3: skips leading slash, locale, and 'docs' prefix (e.g., '/zh-cn/docs/...')
  const paths = pathname.split('/').slice(locale === defaultLocale ? 2 : 3)

  return [paths[0] || '', paths[1] || '']
}

/**
 * Gets the sidebar title, prioritizing translation, falling back to formatted slug
 * @param {Function} t - Translation function, typically returned by useTranslations
 * @param {string} slug - Page identifier, usually hyphen-separated
 * @returns {string} Returns the translated title or formatted slug
 * @example
 * // Assuming translation function t and slug 'getting-started'
 * getSidebarTitle(t, 'getting-started')
 * // If translation exists 'sidebar.getting_started': 'Getting Started', returns 'Getting Started'
 * // Otherwise returns 'Getting Started'
 */
export function getSidebarTitle (t, slug) {
  const key = `sidebar.${slug.replace(/-/g, '_')}`
  const formatSlugTitle = slug => slug
    .split('-')
    .filter(Boolean)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

  return t(key) || formatSlugTitle(slug)
}

/**
 * Creates a translation function for getting translated text based on the specified locale
 * @param {string} locale - Locale code (e.g., 'en', 'zh-cn')
 * @returns {Function} Returns a translation function that accepts a key and parameters object
 * @example
 * const t = useTranslations('en')
 * t('nav.home') // Returns 'Home'
 * t('nav.version_latest', { version: '1.24.2' })
 * // Returns 'Latest (v1.24.2)'
 */
export function useTranslations (locale) {
  return (key, params) => {
    let translation = ui[locale][key] || ui[defaultLocale][key]

    if (params && typeof translation === 'string') {
      Object.keys(params).forEach(param => {
        const placeholder = `{${param}}`

        translation = translation.replaceAll(placeholder, params[param])
      })
    }

    return translation
  }
}

/**
 * Extracts path segments without locale prefix
 * @param {string} pathname - Current location pathname
 * @returns {string[]} Segments excluding locale code
 */
function getBaseSegments (pathname) {
  const segments = pathname.split('/').filter(Boolean)
  const localeKeys = Object.keys(locales)

  return localeKeys.includes(segments[0]) ? segments.slice(1) : segments
}

/**
 * Checks whether a pathname ends with a slash
 * @param {string} pathname - Current location pathname
 * @returns {boolean} True when pathname ends with '/'
 */
function hasTrailingSlash (pathname) {
  return pathname !== '/' && pathname.endsWith('/')
}

/**
 * Builds a localized path for the provided locale
 * @param {string} pathname - Current location pathname
 * @param {string} targetLocale - Locale to link to
 * @returns {string} Localized URL preserving trailing slash
 */
export function getLocalizedPath (pathname, targetLocale) {
  const baseSegments = getBaseSegments(pathname)
  const trailingSlash = hasTrailingSlash(pathname)

  if (!baseSegments.length) {
    return targetLocale === defaultLocale ? '/' : `/${targetLocale}/`
  }

  const basePath = `/${baseSegments.join('/')}${trailingSlash ? '/' : ''}`
  const prefix = targetLocale === defaultLocale ? '' : `/${targetLocale}`

  return `${prefix}${basePath}`
}

/**
 * Generates language menu metadata for the navbar
 * @param {string} pathname - Current location pathname
 * @param {string} currentLocale - Active locale code
 * @returns {{ menu: Array<{code: string, label: string, href: string, isActive: boolean}>, currentLabel: string }} Menu items and active label
 */
export function getLanguageMenu (pathname, currentLocale) {
  const languageMenu = Object.entries(locales).map(([code, label]) => ({
    code,
    label,
    href: getLocalizedPath(pathname, code),
    isActive: code === currentLocale
  }))

  return {
    menu: languageMenu,
    currentLabel: locales[currentLocale] || locales[defaultLocale]
  }
}
