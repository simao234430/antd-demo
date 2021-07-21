let path = require("path");
module.exports = {
  lintOnSave: false,
  devServer: {
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
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          // modifyVars: modifyVars(),
          javascriptEnabled: true,
        },
      },
    },
  },
};
