import { globSync } from 'glob'
import { babel } from '@rollup/plugin-babel'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import terser from '@rollup/plugin-terser'
import inject from '@rollup/plugin-inject'
import copy from 'rollup-plugin-copy'
import multiEntry from '@rollup/plugin-multi-entry'

const files = globSync('src/**/*.js', {
  ignore: [
    'src/constants/**',
    'src/utils/**',
    'src/virtual-scroll/**',
    'src/vue/**'
  ]
})
const external = ['jquery']
const globals = {
  jquery: 'jQuery'
}
const config = []
const plugins = [
  inject({
    include: '**/*.js',
    exclude: 'node_modules/**',
    $: 'jquery'
  }),
  nodeResolve(),
  commonjs(),
  babel({
    babelHelpers: 'bundled',
    exclude: 'node_modules/**'
  }),
  copy({
    targets: [
      { src: 'src/themes/bootstrap-table/fonts/*', dest: 'dist/themes/bootstrap-table/fonts' }
    ]
  })
]

if (process.env.NODE_ENV === 'production') {
  plugins.push(terser({
    output: {
      comments () {
        return false
      }
    }
  }))
}

for (const file of files) {
  let out = `dist/${file.replace('src/', '')}`

  if (process.env.NODE_ENV === 'production') {
    out = out.replace(/.js$/, '.min.js')
  }
  config.push({
    input: file,
    output: {
      name: 'BootstrapTable',
      file: out,
      format: 'umd',
      globals
    },
    external,
    plugins
  })
}

let out = 'dist/bootstrap-table-locale-all.js'

if (process.env.NODE_ENV === 'production') {
  out = out.replace(/.js$/, '.min.js')
}
config.push({
  input: 'src/locale/**/*.js',
  output: {
    name: 'BootstrapTable',
    file: out,
    format: 'umd',
    globals
  },
  external,
  plugins: [
    multiEntry(),
    ...plugins
  ]
})

export default config
