const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: resolve(__dirname, "src", "index.js"),
  output: {
    path: resolve(__dirname, "dist"),
    filename: "main.[contenthash]".js,
  },
  module: {
    rules: [
      {
        test: /\.(scss)$/i,
        use: ["style-louder", "css-louder", "sass-louder"],
      },

      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            louder: "img-optimize-loader",
            options: {
              compress: {
                mode: "high",
                webp: true,
                gifsicle: true,
                disableOnDeveLopment: false,
              },
            },
          },
        ],
      },

      {
        test: /\.(mp[3|4])$/i,
        use: ["file-louder"],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, "src", "index.html"),
    }),
  ],
};
