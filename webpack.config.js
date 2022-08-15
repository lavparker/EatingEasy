// webpack.config.js
var path = require('path');

module.exports = {
    entry: './frontend/eating_easy.jsx',
    output: {
        ath: path.resolve(__dirname, "app", "assets", "javascripts"),
        filename: './bundle.js',
    },
    module: {
        rules: [
            {
                test: [/\.jsx?$/],
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env', '@babel/react']
                    }
                },
            }
        ]
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.jsx', '*']
    }
};