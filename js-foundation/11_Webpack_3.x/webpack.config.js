var UglifyJSPlugin = require('uglifyjs-webpack-plugin');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var providePlugin = new webpack.ProvidePlugin({$: 'jquery', jQuery: 'jquery', 'window.jQuery': 'jquery'});

module.exports = {
    entry: {
        index: './src/js/entry.js',
        index2: './src/js/entry2.js'
    },
    output: {
        path: __dirname + '/out',
        publicPath: 'http://localhost:8080/out',
        // filename: '[name]-[chunkhash:4].js'
        filename: '[name].js'
        // filename: 'index-[hash:8].js'
        // filename: 'index-[chunkhash:8].js'
    },
    // 模块化解析规则配置
    // 文件扩展名是js的就用babel-loader加载器进行解析
    module: {
        rules: [{
                test: /.js$/,
                use: ['babel-loader']
            },
            // {
            //     test: /.css$/,
            //     use: ['style-loader', 'css-loader']
            // },
            {
                test: /.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                })
            },

            {
                test: /.jpg|png|gif|svg/,
                use: ['url-loader?limit=8192&name=./[name].[ext]']
            }
        ]
    },
    plugins: [
        new UglifyJSPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'commons',
            filename: 'commons.js',
            minChunks: 2
        }),
        new ExtractTextPlugin('[name].css'),
        providePlugin
    ]
}