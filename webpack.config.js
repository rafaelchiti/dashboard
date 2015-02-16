var webpack = require('webpack');
var jeet = require('jeet');
var WebpackErrorNotificationPlugin = require('webpack-error-notification');

// webpack.config.js
module.exports = {
  entry: {
    app: ['./webapp/client/client.js'],
    vendor: ['react/addons']
  },
  output: {
    path: './webapp/public/assets',
    filename: 'app.bundle.js',
    publicPath: "/assets/"
  },
  module: {
    loaders: [
      // {test: /\.js$/, exclude: /node_modules/, loader: '6to5-loader'},
      {test: /\.jsx$/, loader: 'jsx-loader?harmony'},
      {test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader'},
      {test: /\.css$/, loader: 'style!css'},
      {test: /\.json$/, loader: 'json-loader'},
      {test: /\.png/, loader: 'url?limit=100000&minetype=image/png'},
      {test: /\.jpg/, loader: 'file'},
      {test: /\.woff(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff"},
      {test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader"}
    ],
    plugins: [
      new WebpackErrorNotificationPlugin()
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.styl']
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.bundle.js")
  ],
  stylus: {
    use: [jeet()]
  }
};
