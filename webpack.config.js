const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    module: {
        rules: [
            {
            test: /\.js/,
            exclude: /node_modules/,
            use: [
                {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            ]
        }]
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    }
}