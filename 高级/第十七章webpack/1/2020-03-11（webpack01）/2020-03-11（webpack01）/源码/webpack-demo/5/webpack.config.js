const path = require('path');


module.exports = {
    mode: 'development',

    entry: {
        'index': './src/index.js'
    },

    output: {
        //  path 必须是绝对路径
        path: path.resolve(__dirname, "dist"),
        filename: `[name].js`
    },

    module: {
        rules: [
            //  针对不同的模块文件进行处理
            {
                test: /\.txt$/,
                use: 'raw-loader'
            },
            {
                test: /\.md$/,
                use: ['html-loader', 'markdown-loader']
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                use: {
                    loader: "url-loader",
                    options: {
                        //打包后的存放位置.相对全局的output.path
                        outputPath: "./images",
                        // 打包后文件的 url
                        publicPath: './dist/images',
                        limit: 100000
                    }
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    }

};