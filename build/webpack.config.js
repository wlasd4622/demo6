const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require("path");
const utils = require("../config/utils");
var ip = require('ip');

//获取所有入口文件配置
const {
  entries
} = require("../config/entrys");
//获取输出配置
const base_plugin = require("../config/base.plugin");
//打包配置
let {
  publicPath,
  port
} = require("./web.config");

function resolve(dir) {
  return path.join(__dirname, "..", dir);
}

module.exports = {
  devtool: "#source-map",
  entry: entries(),
  output: {
    filename: "static/js/[name][hash].js",
    chunkFilename: "static/js/[id].chunk.js",
    path: path.resolve(__dirname, '../dist'),
    publicPath: publicPath
  },
  resolve: {
    extensions: ['.js', '.json', '.html', '.less', '.css'],
    alias: {
      '@': resolve('src'),
      'pages': resolve('src/pages'),
      'assets': resolve('src/assets'),
      'images': resolve('src/assets/images'),
      'mimages': resolve('src/assets/images/m'),
      'css': resolve('src/assets/css'),
      'js': resolve('src/assets/js')

    }
  },
  resolveLoader: {
    modules: [
      path.resolve(__dirname, '../config/rules'), 'node_modules'
    ]
  },
  module: {
    rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ['css-loader', 'postcss-loader']

        })
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [{
              loader: "css-loader",
              options: {
                minimize: true,
                sourceMap: true
              }
            },
            {
              loader: 'vw-loader'
            },
            {
              loader: "less-loader",
              options: {
                importLoaders: 1
              }
            },
            'postcss-loader'
          ]
        })
      },
      {
        test: /\.html$/,
        use: [{
          loader: 'html-loader',
          options: {
            attrs: ['img:src', 'img:data-src']
          }
        }, {
          loader: 'rhtml-loader'
        }]
      },
      {
        test: /\.(png|jpe?g|gif|svg|ico)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          name: utils.assetsPath("img/[name].[hash:7].[ext]")
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          name: utils.assetsPath("fonts/[name].[ext]")
        }
      }
    ]
  },
  plugins: base_plugin,
  devServer: {
    contentBase: "./",
    host: ip.address(),
    compress: true,
    port: port,
    inline: true,
    proxy: {
      '/api': {
        // target: 'http://m.babyfs.cn/',
        // target: 'http://emily.test.babyfs.cn/',
        target: 'http://www.bvt.babyfs.cn/',
        changeOrigin: true
      }
    }
  }
};
