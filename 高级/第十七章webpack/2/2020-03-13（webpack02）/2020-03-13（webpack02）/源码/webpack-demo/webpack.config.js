const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {

    mode: 'development',

    devtool: 'source-map',

    entry: {
        'index': './src/index.js'
    },

    output: {
        path: path.resolve( __dirname, 'dist' ),
        filename: 'public/js/[name].js'
    },

    module: {
        rules: [

            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    // {
                    //     loader: 'style-loader'
                    // },
                    {
                        loader: 'css-loader'
                    }
                ]
            },

            {
                test: /\.(png|gif|jpg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 100,
                            outputPath: "./public/images",
                            publicPath: '/public/images'
                        }
                    }
                ]
            }

        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: "开课吧",
            filename: "index.html", //相对与全局的output
            template: "./public/index.html"
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'public/css/[name].css'
        })
    ],


    devServer: {
        // 生成的虚拟目录路径
        contentBase: "./dist",
        // 自动开启浏览器
        open: true,
        // 端口
        port: 8081,
        proxy: {
            '/api': {
                target: 'http://localhost:7777',
                pathRewrite: {
                    '^/api': ''
                }
            }
        },
        // 开启热更新
        hot:true,
        // 即使 HMR 不生效，也不去刷新整个页面(选择开启)
        hotOnly:true
    }

};