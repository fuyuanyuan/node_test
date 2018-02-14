const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.js'
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),//清空目录
        new HtmlWebpackPlugin({ //生成html文件
            title: 'Caching',
        }),
        new webpack.optimize.CommonsChunkPlugin({//防止重复
            name: 'manifest' // 指定公共 bundle 的名称。
        })
    ],
    output: {
        filename: '[name].[chunkhash].js',
        chunkFilename: '[name].[chunkhash].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: './'
    }
};