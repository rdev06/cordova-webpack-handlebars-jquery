const path = require('path');
 
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'www'),
    filename: 'index.bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.hbs$/,
        use: [{
          loader: "handlebars-loader",
          options: {helperDirs: path.resolve(__dirname, './src/views/helpers'),partialDirs: path.resolve(__dirname,'./src/views/partials')}
        }]
      }
    ]
  },
  devtool: 'inline-source-map',
};