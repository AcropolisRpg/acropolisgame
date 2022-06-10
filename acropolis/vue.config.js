module.exports = {
  publicPath: process.env.ENVI === 'production'
    ? '/game'
    : '/'
}

// module.exports = {
//   publicPath:  '/game'
// }