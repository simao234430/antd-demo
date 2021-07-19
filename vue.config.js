let path = require("path");
module.exports = {
  lintOnSave: false,

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
