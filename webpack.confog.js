const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    "quiz-app": "./src/index.js",
  },
  output: {
    path: path.resolve(__dirname, "Build"),
    filename: "[name]-bundle.js",
  },
  module: {
    rules: [
      // JavaScript and JSX handling
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            sourceMaps: false,
          },
        },
      },
      // CSS handling
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      // Image handling (PNG, JPEG, GIF, SVG)
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "images",
              name: "[name].[ext]",
              bypassOnDebug: true,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"], // Resolve .jsx and .js extensions automatically
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "index.html",
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "Build"),
    },
    compress: true,
    port: 3000,
    open: true,
    historyApiFallback: true,
  },
};
