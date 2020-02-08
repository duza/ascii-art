const webpack = require('webpack');
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

let config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './public/js'),
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
    optimization: {
        minimizer: []
    },
    devServer: {
        compress: true,
        port: 8000,
        contentBase: path.resolve(__dirname, './public'), // A directory or URL to serve HTML content from.
        // historyApiFallback: true, // fallback to /index.html for Single Page Applications.
        // inline: true, // inline mode (set to false to disable including client scripts (like livereload)
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
