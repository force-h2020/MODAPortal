require('babel-core/register')({
  presets: ["env", "es2015", "react", "stage-0"],
  plugins: [
	  [
	    "babel-plugin-webpack-loaders",
	    {
	      "config": "./webpack/webpack.config.dev.js",
	      "verbose": true
	    }
	  ]
  ]
})

require("./src/server/index")