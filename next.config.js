/* eslint-disable */
const withImages = require('next-images');
const withCSS = require('@zeit/next-css');

module.exports = withImages(
  withCSS({
    // webpack: config => {
    //   config.resolve.alias['@'] = __dirname;
    //   return config;
    // }
  }),
);
