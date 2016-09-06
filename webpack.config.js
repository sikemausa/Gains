const path = require('path');

module.exports = {
  entry: {
  main: './lib/index.js',
  test: 'mocha!./test/unit-tests/index.js'
  },
  // output: {
  //     path: path.join(__dirname, 'public'),
  //     publicPath: "/public/",
  //     filename: 'bundle.js'
  // },
  output: {
    path: __dirname,
    filename: '[name].bundle.js'
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.scss$/, loader: 'style!css!sass' },
      { test: /\.jsx$/, exclude: '/node_modules/', loader: 'babel-loader?presets[]=es2015'}
    ]
  },
  resolve: {
    extensions: ['', '.css', '.js', '.json', '.jsx', '.scss']
  },
  devtool: 'cheap-source-map'
};
