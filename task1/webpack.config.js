var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './main.js',
    output: {
        publicPath: './',
        filename: './build/bundle.js'
    },

    module: {

        loaders: [
            {
                test: /\.js/,
                loader: 'babel-loader',
                exclude: /(node_modules|bower_components)/
            },
            {
                test: /\.css$/,
                loader:
                ExtractTextPlugin.extract({
                    use: ['css-loader'],
                    publicPath: '../'
                })
            },
            {
                test: /\.(html)$/,
                loader: "file-loader?name=./build/[name].[ext]"
            },
            {
                test: /\.(png)$/,
                loader: "file-loader?name=./build/img/[name].[ext]"
            },
        ]
    },

    plugins: [
        new ExtractTextPlugin('./build/bundle.css')
    ]

};