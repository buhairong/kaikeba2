const path = require('path');


module.exports = {
    mode: 'development',

    entry: {
        'index': './src/index.js',
        'list': './src/list.js'
    },

    output: {
        //  path 必须是绝对路径
        path: path.resolve(__dirname, "dist"),
        filename: `[name].js`
    }

};