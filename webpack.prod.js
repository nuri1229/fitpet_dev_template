const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = (env, argv) => {
  
  return {
    mode: 'production',
    entry: './src/index.tsx',
    resolve: {
      extensions: ['.ts', '.tsx', '.js']
    },
    output: {
      path: path.join(__dirname, '/dist'),
      filename: '[name].js'
    },
    module: {
      rules: [
        { 
          test: /\.(ts|tsx)?$/, 
          loader: 'awesome-typescript-loader'
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader'
          ]
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          loader:'url-loader',
          options: {
            name: '[name].[ext]',
            limit: 10000,
          }
        },

      ]
    },
    plugins: [
      new CleanWebpackPlugin({cleanAfterEveryBuildPatterns: ['dist']}),
      new HtmlWebpackPlugin({
        template: './src/index.html'
      }),
      new CopyWebpackPlugin([
        {
          from: './src/asset',
          to: 'asset'
        }
      ]),
      new MiniCssExtractPlugin({filename: '[name].css'}),
      new UglifyJSPlugin()
    ]
  }
}