import { defineConfig } from 'astro/config'
import { defaultLocale, locales } from './src/i18n/ui.js'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import remarkInjectConfig from './src/plugins/remark-config.js'

// https://astro.build/config
export default defineConfig({
  site: 'https://bootstrap-table.com',
  i18n: {
    locales: Object.keys(locales),
    defaultLocale
  },
  vite: {
    resolve: {
      alias: {
        '@': '/src'
      }
    }
  },
  integrations: [
    mdx({
      remarkPlugins: [remarkInjectConfig]
    }),
    sitemap()
  ],
  redirects: {
    // Home page redirects
    '/home/': '/',

    // Getting started redirects
    '/docs/': '/docs/getting-started/introduction/',
    '/getting-started/': '/docs/getting-started/introduction/',
    '/themes/bootstrap5': '/docs/getting-started/introduction/',

    // API documentation redirects
    '/docs/api/': '/docs/api/table-options/',
    '/documentation/': '/docs/api/table-options/',

    // Vue.js redirects
    '/vuejs/': '/docs/vuejs/introduction/',

    // Online editor redirects
    '/online-editor/': '/docs/online-editor/',

    // FAQ redirects
    '/faq/': '/docs/faq/faq/',

    // About redirects
    '/docs/about/': '/docs/about/overview/'
  }
})
