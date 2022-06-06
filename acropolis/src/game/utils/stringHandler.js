export const pathHandler = (url) => {
  let pathPrefix = '';
  if (process.env.ENVI === 'production') {
    pathPrefix = '/game';
  }
  return pathPrefix + url;
};
