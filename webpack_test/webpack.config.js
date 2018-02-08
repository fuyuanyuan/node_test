const path = require('path');
const HtmlwebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');


//定义了一些文件夹的路径
const ROOT_PATH = path.resolve(__dirname);
const APP_PATH = path.resolve(ROOT_PATH, 'app');
const BUILD_PATH = path.resolve(ROOT_PATH, 'build');

module.exports = {
    //项目的文件夹 可以直接用文件夹名称 默认会找index.js 也可以确定是哪个文件名字
    entry: APP_PATH,
    //输出的文件名 合并以后的js会命名为bundle.js
    output: {
        path: BUILD_PATH,
        filename: 'bundle.js'//将app文件夹中的两个js文件合并成build目录下的bundle.js文件
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            },
        ]
    },
    //添加我们的插件 会自动生成一个html文件
    plugins: [
        new HtmlwebpackPlugin({
            title: 'Hello World app'
        }),//在build目录下自动生成index.html，指定其title
    ],

};