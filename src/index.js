if (process.env.NODE_ENV === 'production') {
  process.env.webpackAssets = JSON.stringify(require('../build/manifest.json'));
  process.env.webpackChunkAssets = JSON.stringify(require('../build/chunk-manifest.json'));
  // In production, serve the webpacked server file.
  require('../build/server.bundle.js');
} else {
  // Babel polyfill to convert ES6 code in runtime
  require('babel-register')({
    "plugins": [
      [
        "babel-plugin-webpack-loaders",
        {
          "config": "./webpack/webpack.config.babel.js",
          "verbose": true
        }
      ]
    ]
  });
  require('babel-polyfill');

  require('./server/index');
}
