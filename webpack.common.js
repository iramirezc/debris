const path = require("path")
const HTMLWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  entry: {
    app: path.resolve(__dirname, "src", "index.tsx")
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].bundle.js",
    clean: true
  },
  resolve: {
    extensions: [".ts", ".tsx", "..."],
    modules: [path.resolve(__dirname, "src"), "node_modules"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        include: path.resolve(__dirname, "src"),
        exclude: /node_modules/,
        loader: "ts-loader"
      },
      {
        test: /\.jsx?$/,
        include: path.resolve(__dirname, "src"),
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html")
    })
  ]
}
