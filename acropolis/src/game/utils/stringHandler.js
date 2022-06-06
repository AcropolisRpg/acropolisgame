// export const pathHandler = (url) => {
//   let pathPrefix = '';
//   if (process.env.ENVI === 'production') {
//     pathPrefix = '/game';
//   }
//   return pathPrefix + url;
// };

export const pathHandler = (url) => {
  let pathPrefix = '/game';
  return pathPrefix + url;
};
