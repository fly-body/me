const webpack = require("webpack")
module.exports = {
  // publicPath: process.env.NODE_ENV === 'production'
  // ? '/lyq.ui.github.io/'//这里写展示页面的仓库名称
  // : '/',
  publicPath: './',
  outputDir: "dist", // 输出文件目录
  assetsDir: "static",//静态资源文件名称
  indexPath: "index.html",
  parallel: false,
  configureWebpack: {
    plugins: [
      // 配置 jQuery 插件的参数
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        Popper: ['popper.js', 'default']
      })
    ]
  }
}