const webpack = require("webpack");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
let copyWebpackPlugin = require('copy-webpack-plugin');
let path = require('path')
//html页面 pagesArray
let {
  htmlPages
} = require("./entrys");
let pageArr = htmlPages();

let chunksArr = [];
pageArr.forEach(page => {
  chunksArr.push(page.chunks);
});
let base_plugin = [];

base_plugin.push(
  new webpack.optimize.SplitChunksPlugin({
    name: "vendors",
    chunks: chunksArr, //提取公用模块
    minChunks: Infinity
  })
)
base_plugin.push(
  new ExtractTextPlugin({
    //生成css文件名
    filename: "static/css/[name][hash].css",
    disable: false,
    allChunks: true
  })
)

if (process.env.NODE_ENV === 'production') {
  /*js压缩*/
  base_plugin.push(
    new UglifyJsPlugin({
      uglifyOptions: {
        compress: {
          warnings: false
        },
        mangle: {
          safari10: true
        }
      },
      sourceMap: true,
      parallel: true
    })
  );
  // base_plugin.push(
  //   new copyWebpackPlugin([{
  //     from: path.join('./static'),
  //     to: path.join('./static')
  //   }])
  // );
  base_plugin.push(
    new OptimizeCSSPlugin({
      cssProcessorOptions: {
        safe: true,
        map: {
          inline: false
        },
        autoprefixer: false
      }
    })
  )

  base_plugin.push(
    new webpack.optimize.ModuleConcatenationPlugin()
  )

  /*遍历页面，添加配置*/
  pageArr.forEach(page => {
    const htmlPlugin = new HtmlWebpackPlugin({
      template: page.template,
      filename: page.filename,
      chunks: ["vendors", 'manifest', page.chunks],
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
        // more options:
        // https://github.com/kangax/html-minifier#options-quick-reference
      },
      // necessary to consistently work with multiple chunks via CommonsChunkPlugin
      chunksSortMode: 'dependency'
    });
    base_plugin.push(htmlPlugin);
  });
} else {
  /*遍历页面，添加配置*/
  pageArr.forEach(page => {
    const htmlPlugin = new HtmlWebpackPlugin({
      template: page.template,
      filename: page.filename,
      chunks: ["vendors", page.chunks],
    });
    base_plugin.push(htmlPlugin);
  });
}

module.exports = base_plugin;
