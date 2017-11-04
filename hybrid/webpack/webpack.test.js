var preloaders = require("./preloaders");
var loaders = require("./loaders");
var webpack = require('webpack');
module.exports = {
  entry: ['./src/index.ts'],
  output: {
    filename: 'build.js',
    path: 'tmp'
  },
  resolve: {
    modules: [__dirname,'node_modules'],
    extensions: ['*', '.ts', '.js', '.json']
  },
   devtool: "source-map-inline",
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      'window.jquery': 'jquery'
    })
  ],
  module: {
    preLoaders: preloaders,
    loaders: loaders,
    postLoaders: [
      {
        test: /^((?!\.spec\.ts).)*.ts$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'istanbul-instrumenter'
      }
    ]
  },
  tslint: {
    emitErrors: true,
    failOnHint: true
  }
};

