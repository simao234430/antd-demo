let path = require("path");
const ThemeColorReplacer = require("webpack-theme-color-replacer");
const { getThemeColors, modifyVars } = require("./src/utils/themeUtil");
const { resolveCss } = require("./src/utils/theme-color-replacer-extend");
// const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  lintOnSave: false,
  devServer: {
    // port: 9099,
    // proxy: {
    //   '/api': { //此处要与 /services/api.js 中的 API_PROXY_PREFIX 值保持一致
    //     target: process.env.VUE_APP_API_BASE_URL,
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '/api': ''
    //     }
    //   }
    // }
  },

  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "less",
      patterns: [path.resolve(__dirname, "./src/theme/theme.less")],
    },
  },
  configureWebpack: (config) => {
    config.plugins.push(
      // new HtmlWebpackPlugin({
      //   filename: "public/index.html",
      //   template: "public/index.html",
      //   favicon: "./favicon.ico", //引入favicon.ico
      //   // favicon: "public/favicon.ico",
      //   inject: true,
      // }),

      new ThemeColorReplacer({
        fileName: "css/theme-colors-[contenthash:8].css",
        matchColors: getThemeColors(),
        injectCss: true,
        resolveCss,
      })
    );
  },
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: modifyVars(),
          javascriptEnabled: true,
        },
      },
    },
  },
  publicPath: "./",
  // publicPath: process.env.VUE_APP_PUBLIC_PATH,
  // outputDir: "dist",
  // assetsDir: "static",
  // productionSourceMap: false,
  // pwa: {
  //   iconPaths: {
  //     favicon32: "favicon.ico",
  //     favicon16: "favicon.ico",
  //     appleTouchIcon: "favicon.ico",
  //     maskIcon: "favicon.ico",
  //     msTileImage: "favicon.ico",
  //   },
  // },
};
