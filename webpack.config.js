const VueLoaderPlugin = require("vue-loader/lib/plugin");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    main: "./src/index.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js"
  },
  resolve: {
    extensions: [".js", ".vue", ".json"],
    alias: {
      "@": path.resolve(__dirname, "./src"),
      vue: path.resolve("node_modules/vue/dist/vue.esm.js")
    }
  },
  devServer: {
    overlay: true,
    contentBase: "./dist",
    port: 8080,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      // 它会应用到普通的 `.js` 文件
      // 以及 `.vue` 文件中的 `<script>` 块
      {
        test: /\.js$/,
        loader: "babel-loader"
      },
      // 它会应用到普通的 `.css` 文件
      // 以及 `.vue` 文件中的 `<style>` 块
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"]
      },
      {
        test: /\.styl(us)?$/,
        use: ["vue-style-loader", "css-loader", "stylus-loader"]
      }
    ]
  },
  plugins: [
    // 请确保引入这个插件来施展魔法
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./src/index.html")
    }),
    new CleanWebpackPlugin(),
    new VueLoaderPlugin()
  ]
};
