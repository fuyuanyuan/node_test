const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.js',
        polyfills: './src/polyfills.js',
        vendor: [
            'lodash'
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),//清空目录
        new HtmlWebpackPlugin({ //生成html文件
            title: 'Caching'
        }),
        new webpack.HashedModuleIdsPlugin(),//hash保持一致
        new webpack.optimize.CommonsChunkPlugin({//防止重复
            name: 'vendor' // 指定公共 bundle 的名称。
        }),
        new webpack.optimize.CommonsChunkPlugin({//防止重复
            name: 'manifest' // 指定公共 bundle 的名称。
        }),
        new webpack.ProvidePlugin({
            _: 'lodash'
        })
    ],
    output: {
        filename: '[name].[chunkhash].js',
        chunkFilename: '[name].[chunkhash].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: './'
    },
    resolve: {
        extensions: ['.js', '.tsx', '.ts']
    },
    module: {
        rules: [
            {
                test: require.resolve('index.js'),
                use: 'imports-loader?this=>window'
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    }
};