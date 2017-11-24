const Path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const Webpack = require('webpack');

module.exports = {
    entry: {
        index: './src/js/index.js',
        about: './src/js/about.js',
        classes: './src/js/classes.js',
        common: [
            './src/js/materialize.min.js',
            './src/js/init.js'
        ]
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
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
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
        new Webpack.optimize.CommonsChunkPlugin({
            name: 'common' // Specify the common bundle's name.
        }),
        new Webpack.optimize.CommonsChunkPlugin({
            name: 'runtime'
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: './index.html',
            chunks: ['runtime' , 'common', 'index']
        }),
        new HtmlWebpackPlugin({
            template: './src/about.html',
            filename: './about.html',
            chunks: ['runtime', 'common', 'about']
        }),
        new HtmlWebpackPlugin({
            template: './src/classes.html',
            filename: './classes.html',
            chunks: ['runtime', 'common', 'classes']
        }),
        new Webpack.ProvidePlugin({ // inject ES5 modules as global vars
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            Tether: 'tether'
        })
    ]
};
