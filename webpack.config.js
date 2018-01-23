const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')
const webpack = require('webpack')
const vendorSrc = ['jquery']; // From node_modules or specific path
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
  entry: {
    app: ['./src/javascripts/index.js', './src/stylesheets/base.scss'],
    vendor: vendorSrc
  },

  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'scripts/[name].js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader!resolve-url-loader',
          publicPath: '/'

        })
      },
      {
        test: /\.(sass|scss)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader?sourceMap!resolve-url-loader?sourceMap!sass-loader?sourceMap',
          publicPath: '/'
        })
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin('styles/[name].css'),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity
    }),
    new HtmlWebpackPlugin({
      template: 'src/html/hr/index.html',
      filename: 'html/hr/index.html',
      chunks: ['app', 'vendor']
    }),
    new HtmlWebpackPlugin({
      template: 'src/html/en/index.html',
      filename: 'html/en/index.html',
      chunks: ['app', 'vendor']
    })
  ],

  resolve: {
    extensions: ['.js', '.sass', '.scss'],
    modules: [path.join(__dirname, './src'), 'node_modules']
  },
  devServer: {
    contentBase: path.join(__dirname, '/src'),
    compress: true,
    port: 1991,
    open: true,
    historyApiFallback: {
      rewrites: [
        {from: /^\/$/, to: '/html/hr/index.html'}
      ]
    },
    watchContentBase: true,
  }
}

module.exports = config
