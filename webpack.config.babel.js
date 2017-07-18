var webpack = require('webpack');
var cssnext = require('postcss-cssnext');
var postcssFocus = require('postcss-focus');
var postcssReporter = require('postcss-reporter');

var cssModulesIdentName = '[name]__[local]__[hash:base64:5]';
if (process.env.NODE_ENV === 'production') {
  cssModulesIdentName = '[hash:base64]';
}

var cssloaders = [
  'style-loader',
  { loader: 'css-loader', 
    options: {
      localIdentName: cssModulesIdentName, 
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
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      'client',
      'node_modules',
    ],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: cssloaders
      },
      {
        test: /\.jpe?g$|\.gif$|\.png$|\.svg$/i,
        use: 'url-loader?limit=10000',
      },
      {
        test: /\.css$/,
        include: [/node_modules\/.*react-table/],
        use: cssloaders
      },
      {
        test: /\.css$/,
        include: [/node_modules\/.*antd/],
        use: cssloaders
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        CLIENT: JSON.stringify(true),
        'NODE_ENV': JSON.stringify('development'),
      }
    }),
  ]
};
