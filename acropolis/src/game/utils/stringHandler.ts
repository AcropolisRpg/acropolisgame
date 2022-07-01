export const pathHandler = (url) => {
  let pathPrefix = ''
  if (process.env.VUE_APP_ENVI === 'production') {
    console.log('pathhandler envi prod')
    pathPrefix = '/game'
  }
  return pathPrefix + url
}
// !important Production
// export const pathHandler = (url) => {
//   const pathPrefix = '/game';
//   return pathPrefix + url;
// };
