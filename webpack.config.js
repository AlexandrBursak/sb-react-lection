const path = require('path');

module.exports = {
  entry: path.resolve( __dirname, 'src', 'index.js' ),
  output: {
    path: path.resolve( __dirname, 'public' ),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: { presets: [ "react", "es2015", "stage-1" ] }
      },
      { test: /\.css$/, loader: "style-loader!css-loader" }
    ]
  }
};