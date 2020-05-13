module.exports = {
    devServer: {
        open: true,
        proxy: {
            '/api': {
                target: 'http://localhost:4000',
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}