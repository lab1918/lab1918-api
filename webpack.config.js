const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const outputPath = path.resolve(__dirname, 'dist');
module.exports = {
    mode: 'development',
    entry: {
        // tell webpack where our code is
        app: './src/index.js',
    },
    module: {
        rules: [{
            test: /\.yaml$/,
            use: [
            { loader: 'yaml-loader' }
            ]
        },
        {
            test: /\.css$/,
            use: [
            { loader: 'style-loader' },
            { loader: 'css-loader' },
            { loader: 'postcss-loader',
                options: {
                    postcssOptions: {
                    plugins: ['postcss-url']
                    }
                }
            }
            ]
        }]
    },
    plugins: [
        // tell webpack to use our template we created
        new HtmlWebpackPlugin({
            template: 'index.html'
        })
    ],
    // tell webpack where to output the build code to - './dist'
    output: {
        filename: '[name].bundle.js',
        path: outputPath,
    }
};