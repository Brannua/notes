var webpack = require('webpack');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        index: './src/js/index.js',
        index2: './src/js/index2.js'
    },
    output: {
        path: __dirname + '/out',
        publicPath: 'http://localhost:8080/out',
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /.less/,
                use: ['style-loader','css-loader','less-loader']
            },
            {
                test: /.js$/,
                use: ['babel-loader']
            },
            {
                test: /.jpg|png|gif|svg/,
                use: ['url-loader?limit=8192&name=./[name].[ext]']
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('[name].css'),
        new UglifyJSPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'commons',
            filename: 'commons.js',
            minChunks: 2
        }),
    ]
}