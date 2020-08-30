const path = require('path');
function resolve (dir) {
    return path.join(__dirname, dir);
}

const apiUrl = 'http://localhost:3000';

module.exports = {
    productionSourceMap: false,
    devServer: {
        proxy: {
            '/': {
                target: apiUrl,
                changeOrigin: true
            }
        }
    },
    // publicPath: process.env.NODE_ENV === 'production' ? '/abc/' : '/',
};
