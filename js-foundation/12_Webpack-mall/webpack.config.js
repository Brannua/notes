var UglifyJSPlugin = require('uglifyjs-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require('webpack');
var providePlugin = new webpack.ProvidePlugin({$: 'jquery', jQuery: 'jquery', 'window.jQuery': 'jquery'});

module.exports = {
    entry: {
        index: './src/js/index.js',
        index: './src/js/goodsInfo.js'
    },
    output: {
        path: __dirname + '/out',
        publicPath: 'http://localhost:8080/out',
        filename: '[name].js'
        // filename: '[name]-[chunkhash:4].js'
        // filename: 'index-[hash:8].js'
        // filename: 'index-[chunkhash:8].js'
    },
    // 模块化解析规则配置
    // 文件扩展名是js的就用babel-loader加载器进行解析
    module: {
        rules: [
            // {
            //     test: /.css$/,
            //     use: ['style-loader', 'css-loader']
            // },
            // {
            //     test: /.css$/,
            //     use: ExtractTextPlugin.extract({
            //         fallback: 'style-loader',
            //         use: 'css-loader'
            //     })
            // },
            {
                test: /.less/,
                use: ['style-loader', 'css-loader', 'less-loader']
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
        new UglifyJSPlugin(),
        new ExtractTextPlugin('[name].css'),
        providePlugin
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'commons',
        //     filename: 'commons.js',
        //     minChunks: 2
        // }),
    ]
}