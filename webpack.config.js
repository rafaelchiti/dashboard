var webpack = require('webpack');

// webpack.config.js
module.exports = {
  entry: {
    app: ['./webapp/client/client.js'],
    vendor: ['react/addons']
  },
  output: {
    path: './webapp/public/js',
    filename: 'app.bundle.js'
  },
  module: {
    loaders: [
      // {test: /\.js$/, exclude: /node_modules/, loader: '6to5-loader'},
      {test: /\.jsx$/, loader: 'jsx-loader?harmony'},
      // {test: /\.css$/, loader: 'style-loader!css-loader'},
      // {test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader'}
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.styl']
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.bundle.js")
  ]
};
