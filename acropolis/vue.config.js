const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")
module.exports = {
  publicPath: process.env.ENVI === 'production'
    ? '/game'
    : '/',
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
