const path = require('path');
const webpack = require('webpack');

var cssloaders = [
  'style-loader',
  { loader: 'css-loader', 
    options: { 
      localIdentName: '[name]__[local]__[hash:base64:5]', 
      modules: true,
      importLoaders: 1, 
      sourceMap: true
    }
  },
  { loader: 'postcss-loader' }
]

module.exports = {

  output: {
    publicPath: '/',
    libraryTarget: 'commonjs2',
  },

  module: {
    rules: [
      {
        test: /\.jsx*$/,
        include: [
          path.resolve(__dirname, '..', 'src', 'client')
        ],
        loader: 'babel-loader',
        options: {
          presets: ["env", "es2015", "react", "stage-0"]
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: cssloaders
      },
      {
        test: /\.css$/,
        include: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.jpe?g$|\.gif$|\.png$|\.svg$/i,
        use: 'url-loader?limit=10000',
      },
      {
        test: /\.json$/,
        use: 'json-loader',
      },
    ],
  },

  resolve: {
    extensions: [".js", ".json", ".jsx", ".css"],
    modules: [
      path.resolve(__dirname, '..', 'src', 'client'),
      path.resolve(__dirname, '..', 'node_modules')
    ]
  },

  devtool: 'source-map',

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
      filename: 'vendor.js',
    }),
    new webpack.DefinePlugin({
      'process.env': {
        CLIENT: JSON.stringify(true),
        'NODE_ENV': JSON.stringify('development'),
      }
    })
  ]
};
