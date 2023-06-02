const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, './dist'),
        clean: true,
    },
    devtool: 'inline-source-map',
    plugins: [new HtmlWebpackPlugin({
        title: 'Restaurant Page',
    })],
};