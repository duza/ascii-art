const webpack = require('webpack');
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const resolveAppPath = relativePath => path.resolve(__dirname, relativePath);

let config = {
    mode: process.env.NODE_ENV,
    entry: ['react-hot-loader/patch', './src'],
    output: {
        path: resolveAppPath('./public'),
        filename: 'main.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: resolveAppPath('./templates/index.html'),
        })
    ],
    optimization: {
        minimizer: []
    },
    devServer: {
        port: 3000,
        index: 'index.html',
        contentBase: resolveAppPath('public'),
        hot: true,
        historyApiFallback: true,
        inline: true,
        compress: true,
        open: true
    },
    devtool: 'eval-source-map'
};

if (process.env.NODE_ENV === 'production') {
    config.optimization.minimizer.push(
        new UglifyJsPlugin({
            test: /\.js(\?.*)?$/i,
        }),
    );
}

module.exports = config;
