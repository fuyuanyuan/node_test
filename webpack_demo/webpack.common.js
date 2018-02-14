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
            title: 'Production',
            path:"./"
        }),
        new webpack.optimize.CommonsChunkPlugin({//防止重复
            name: 'common' // 指定公共 bundle 的名称。
        })
    ],
    output: {
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: './'
    }
};