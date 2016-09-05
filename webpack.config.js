const path = require('path');

module.exports = {
  entry: {
  main: './lib/index.js',
  test: "mocha!./test/index.js"
  },
  output: {
      path: path.join(__dirname, 'public'),
      publicPath: "/public/",
      filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.scss$/, loader: 'style!css!sass' }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.json', '.scss', '.css']
  },
  devtool: 'cheap-source-map'
};
