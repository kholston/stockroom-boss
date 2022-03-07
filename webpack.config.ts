import NodePolyfillPlugin from 'node-polyfill-webpack-plugin';
import path from "path";
import webpackNodeExternals from 'webpack-node-externals';
import { Configuration } from "webpack";

const config: Configuration = {
  entry: "./src/index.ts",
  externalsPresets: {node: true},
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  externals: [webpackNodeExternals()],
  module: {
    rules: [
      {
        test: /\.(ts|js)?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-typescript"],
          }
        }
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  plugins: [
    new NodePolyfillPlugin()
  ],
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "server.js",
    clean: true
  },
};

export default config;
