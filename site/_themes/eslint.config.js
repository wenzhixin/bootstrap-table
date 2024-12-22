import base from './eslint.config.base.js'
import pluginVue from 'eslint-plugin-vue'

export default [
  {
    ignores: [
      'dist/'
    ]
  },
  ...base,
  ...pluginVue.configs['flat/recommended'],
  {
    rules: {
      'vue/multi-word-component-names': 'off'
    }
  }
]
