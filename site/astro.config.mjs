import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import remarkInjectConfig from './src/plugins/remark-config.js'

// https://astro.build/config
export default defineConfig({
  site: 'https://bootstrap-table.com',
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
    '/zh-cn/': '/',
    '/es/': '/',
    '/home/': '/',
    '/zh-cn/home/': '/',
    '/es/home/': '/',

    // Getting started redirects
    '/docs/': '/docs/getting-started/introduction/',
    '/getting-started/': '/docs/getting-started/introduction/',
    '/themes/bootstrap5': '/docs/getting-started/introduction/',

    // API documentation redirects
    '/docs/api/': '/docs/api/table-options/',
    '/documentation/': '/docs/api/table-options/',
    '/zh-cn/documentation/': '/docs/api/table-options/',
    '/es/documentation/': '/docs/api/table-options/',

    // Vue.js redirects
    '/vuejs/': '/docs/vuejs/introduction/',

    // Online editor redirects
    '/online-editor/': '/docs/online-editor/',
    '/zh-cn/online-editor/': '/docs/online-editor/',
    '/es/online-editor/': '/docs/online-editor/',

    // FAQ redirects
    '/faq/': '/docs/faq/faq/',
    '/zh-cn/faq/': '/docs/faq/faq/',
    '/es/faq/': '/docs/faq/faq/',

    // About redirects
    '/docs/about/': '/docs/about/overview/'
  }
})
