const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  name: 'portfolio',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.[fullhash].js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      '@template': '/src/template',
      '@pages': '/src/pages',
      '@styles': '/src/styles',
      '@images': '/src/images',
      '@fonts': '/src/fonts',
    }
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.html$/i,
        loader: 'html-loader'
      },
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ]
      },
      {
        test: /\.(jpg|png|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[contenthash][ext]'
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[contenthash][ext]',
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
      inject: true
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/styles/[name].[fullhash].css'
    })
  ],
  devtool: 'source-map'
};