var loaders = require("./loaders");
var preloaders = require("./preloaders");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

module.exports = {
    entry: {
          "main": './src/index.ts'
         },
    output: {
        filename: 'build.js',
        path: 'dist'
    },
    devtool: 'source-map',
    resolve: {
        modules: [__dirname,'node_modules'],
        extensions: ['*', '.ts', '.js', '.json']
    },
     resolveLoader: {
     
      modules: ['node_modules'],
   },
    plugins: [
        new webpack.optimize.UglifyJsPlugin(
            {
                warning: false,
                mangle: true,
                comments: false
            }
        ),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: 'body',
            hash: true
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            'window.jquery': 'jquery'
        })
    ],
    module: {
        preLoaders: preloaders,
        loaders: loaders
    },
    tslint: {
        emitErrors: true,
        failOnHint: true
    }
};