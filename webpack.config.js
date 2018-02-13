const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const vendorSrc = ['jquery', 'bootstrap-sass', './src/stylesheets/vendor.scss', 'swiper/dist/css/swiper.css']; // From node_modules or specific path

const config = {
    entry: {
        app: ['./src/javascripts/index.js', './src/stylesheets/base.scss'],
        vendor: vendorSrc,
    },

    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'scripts/[name].js',
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [
                    path.resolve(__dirname, 'src/scripts/vendor')],
                use: ['babel-loader'],
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader!resolve-url-loader',
                    publicPath: '/',

                }),
            },
            {
                test: /\.(sass|scss)$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader?url=false!resolve-url-loader?sourceMap!postcss-loader?sourceMap!sass-loader?sourceMap&importLoaders=1',
                    publicPath: '/',
                }),
            },
            {
                test: /\.html$/,
                use: ['html-loader?interpolate'],
            },
            {
                test: /\.(jpg|png|svg)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: '[name].[ext]',
                            publicPath: '../../',
                            outputPath: 'images/',
                        }
                    }
                ]
            },
            {
                test: /\.(woff2?|ttf|eot)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/',
                            publicPath: '../'
                        }
                    }
                ]
            }
        ],
    },

    plugins: [
        new ExtractTextPlugin({
            filename: 'styles/[name].css',
            allChunks: true
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: Infinity,
        }),
        new HtmlWebpackPlugin({
            template: 'src/html/hr/index.html',
            filename: 'html/hr/index.html',
            chunks: ['app', 'vendor'],
        }),
        new HtmlWebpackPlugin({
            template: 'src/html/en/index.html',
            filename: 'html/en/index.html',
            chunks: ['app', 'vendor'],
        }),
        new HtmlWebpackPlugin({
            template: 'src/html/hr/business-solutions.html',
            filename: 'html/hr/business-solutions.html',
            chunks: ['app', 'vendor'],
        }),
    ],

    resolve: {
        extensions: ['.js', '.sass', '.scss'],
        modules: [path.join(__dirname, './src'), 'node_modules'],
    },
    devServer: {
        contentBase: path.join(__dirname, '/src'),
        compress: true,
        port: 1991,
        open: true,
        historyApiFallback: {
            rewrites: [
                {from: /^\/$/, to: '/html/hr/index.html'},
            ],
        },
        watchContentBase: true,
    },
};

module.exports = config;
