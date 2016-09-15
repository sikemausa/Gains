const path = require('path');

module.exports = {
 entry: {
 main: './lib/index.js',
 test: 'mocha!./test/unit-tests/index.js'
 },
 output: {
   path: path.join(__dirname, 'public'),
   publicPath: '/public/',
   filename: '[name].bundle.js'
 },
 module: {
  loaders: [
    {
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'react'],
      },
    },
    { test: /\.css$/, loader: 'style!css' },
    { test: /\.scss$/, loader: 'style!css!sass' },
  ],
},
 resolve: {
   extensions: ['', '.css', '.js', '.json', '.jsx', '.scss']
 },
 devtool: 'cheap-source-map'
};
