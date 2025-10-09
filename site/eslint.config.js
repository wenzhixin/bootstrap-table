import astro from 'eslint-plugin-astro'
import eslintConfig from '../eslint.config.js'

export default [
  {
    ignores: [
      'dist/',
      'node_modules/',
      '.astro/'
    ]
  },

  ...eslintConfig,

  ...astro.configs['flat/recommended'],

  {
    files: ['**/*.astro'],
    rules: {
      'astro/no-conflict-set-directives': 'error',
      'astro/no-unused-define-vars-in-style': 'error'
    }
  }
]
