
const path = require('path');
const DIST_PATH = path.resolve(__dirname, 'dist');
const HtmlWebpackPlugin = require('html-webpack-plugin')  //引入html
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); //分离css
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");//压缩css
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");//压缩js
const CleanWebpackPlugin = require('clean-webpack-plugin');//清空残余hash文件

//注释此处分离外部js|css  1/3
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');//内联css和js
//注释此处分离外部js|css  1/3


module.exports = {
  entry: {
    index: './src/index.js',
  },
  output: {
    filename: '[name].[hash].bundle.js',
    path: DIST_PATH
  },
  devServer: {
    contentBase: DIST_PATH,
    compress: true,
    open: true,
    port: 8080
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: false // set to true if you want JS source maps
      }),
      new OptimizeCSSAssetsPlugin({}),
    ]
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              minimize: true,
              localIdentName: '[local].[hash]'
            }
          },
          "postcss-loader",
        ]
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              minimize: true,
              localIdentName: '[local].[hash]'
            }
          },
          "postcss-loader",
          "less-loader"
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        loader: 'url-loader?limit=81920&name=[name].[hash].[ext]'
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'url-loader?limit=81920&name=[name].[hash].[ext]'
      },
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: "babel-loader",
          options: {
            "presets": [
              ["@babel/preset-env", {
                "modules": false,
                "targets": {
                  "browsers": ["> 1%", "last 2 versions", "not ie <= 8"]
                },
                "useBuiltIns": "usage"
              }]
            ],
          }
        },
        exclude: /node_modules/
      }, {
        test: /\.html$/,
        loader: 'html-withimg-loader'
      },{
        test: require.resolve('jquery'),
        use: [{
           loader: 'expose-loader',
           options: 'jQuery'
        },{
           loader: 'expose-loader',
           options: '$'
        }]
     }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new MiniCssExtractPlugin({
      filename: "[name].[hash].css",
      chunkFilename: "[id].[hash].css"
    }),
    require('autoprefixer'),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      //注释此处分离外部js|css  2/3
      inject: true,
      //注释此处分离外部js|css  2/3
      minify: {//压缩 去除引号、注释、空属性、空格
        removeAttributeQuotes: false,//去除引号
        removeComments: true,//去除注释
        removeEmptyAttributes: true,//去除空属性
        collapseWhitespace: true, // 删除空格
        preserveLineBreaks: true // 删除换行
      },
      inlineSource: '.(js|css)$'//内联选择器
    }),
    //注释此处分离外部js|css  3/3
    new HtmlWebpackInlineSourcePlugin(), //内联css和js
    //注释此处分离外部js|css  3/3
  ]
}
