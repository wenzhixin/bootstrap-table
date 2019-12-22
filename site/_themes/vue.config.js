module.exports = {
  productionSourceMap: false,
  publicPath: process.env.NODE_ENV === 'production' ? '/assets/js/themes/' : './',
  css: { extract: false },
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        if (process.env.NODE_ENV === 'production') {
          args[0].filename = 'themes.html'
          args[0].template = './public/themes.html'
        }
        return args
      })
  },
  devServer: {
    open: false,
    host: '0.0.0.0',
    https: false,
    hotOnly: false,
    proxy: {
      '/assets': {
        target: 'http://localhost:9001'
      },
      '/themes': {
        target: 'http://localhost:9001'
      }
    }
  }
}
