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
          "config": "./webpack.config.babel.js",
          "verbose": true
        }
      ]
    ]
  });
  require('babel-polyfill');

  require('./server/server');
}

// import { createServer } from 'http';

// const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
// const port = process.env.PORT || 3000;

// createServer(async (req, res) => {
//   await delay(500);
//   console.log('Request!');
//   res.end('hi!');
// })
// .listen(port, () => console.log(`Server running on port ${port}`));