const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin"); // Import the plugin

module.exports = {
  entry: "./src/index.js", // Entry point for your React app
  output: {
    path: path.resolve(__dirname, "build"), // Output folder
    filename: "bundle.js",                  // Output JS file name
    publicPath: "/"                         // Ensures assets are served correctly
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Match JS and JSX files
        exclude: /node_modules/,
        use: {
          loader: "babel-loader", // Use Babel to transpile
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      },
      {
        test: /\.css$/, // Match CSS files
        use: ["style-loader", "css-loader"] // Process CSS files
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"] // Resolve these extensions
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html", // Use the HTML file in the public folder as a template
      filename: "index.html"           // Name of the generated HTML file
    })
  ],
  mode: "production" // Production mode
};
