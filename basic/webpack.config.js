module.exports = {
  entry: "./index.js",
  output: {
    path: __dirname,
    filename: "./bundle.js"
  },
  module: {
    loaders: []
  },
  resolve: {
    alias: {
      vue: "vue/dist/vue.js"
    }
  }
};
