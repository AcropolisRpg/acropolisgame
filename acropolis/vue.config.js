const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")
module.exports = {
  // publicPath:  '/',
  //  !important Production
  publicPath:  '/game',
  // publicPath: process.env.VUE_APP_ENVI === 'production'
  //   ? '/game'
  //   : '/',
    transpileDependencies: true,
    configureWebpack: {
      plugins: [
        new NodePolyfillPlugin()
      ]
    }
}

// module.exports = {
//   publicPath:  '/game'
// }
