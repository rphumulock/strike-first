const Path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const Webpack = require('webpack');

module.exports = {
    entry: {
        main: './src/index.js'
    },
    output: {
        path: Path.resolve(__dirname, 'build'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['babel-preset-env']
                    }
                }
            },
            {
                test: /\.css/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(woff|woff2|eot|ttf)$/,
                loader: 'file-loader'
            },
            {
                test: /\.(mp4)$/,
                loader: 'file-loader'
            },
            {
                test: /\.(png|svg|jpe?g)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 40000
                        }
                    },
                    'image-webpack-loader'
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['build']),
        new ExtractTextPlugin("styles.css"),
        new Webpack.NamedModulesPlugin(),
        new HtmlWebpackPlugin({
            hash: true,
            template: './src/index.html',
            chunks: ['main'],
            filename: './index.html' //relative to root of the application
        }),
        new HtmlWebpackPlugin({
            hash: true,
            template: './src/about.html',
            chunks: ['main'],
            filename: './about.html'
        }),
        new HtmlWebpackPlugin({
            hash: true,
            template: './src/kids.html',
            chunks: ['main'],
            filename: './kids.html'
        }),
        new HtmlWebpackPlugin({
            hash: true,
            template: './src/classes.html',
            chunks: ['main'],
            filename: './classes.html'
        }),
        new Webpack.ProvidePlugin({ // inject ES5 modules as global vars
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            Tether: 'tether'
        })
    ],
    devtool: 'cheap-module-source-map',
    devServer: {
        contentBase: './build'
    }
};
