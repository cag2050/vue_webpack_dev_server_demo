/**
 * Created by cag on 2017/2/26.
 */
var path = require('path');

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
        filename: 'build.js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: '/\.js$/',
                loader: 'babel-loader',
                query: {
                    "presets": ["es2015"]
                },
                exclude: /node_modules/
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        port:9000
    }
};