const withCSS = require('@zeit/next-css');
const withImages = require('next-images');

module.exports = withImages(
  withCSS({
    // webpack: config => {
    //   config.resolve.alias['@'] = __dirname;
    //   return config;
    // }
  })
);
