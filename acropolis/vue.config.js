module.exports = {
  publicPath: process.env.ENVI === 'production'
    ? '/game'
    : '/'
}