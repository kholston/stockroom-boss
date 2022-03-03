import NodePolyfillPlugin from 'node-polyfill-webpack-plugin';
import path from "path";
import webpackNodeExternals from 'webpack-node-externals';
import { Configuration as WebpackConfiguration, DefinePlugin } from "webpack";
import  { Configuration as WebpackDevServerConfiguration } from "webpack-dev-server";
import { config as dotenv } from 'dotenv';

const envVars = dotenv({
  path: path.join(__dirname, '.env')
}).parsed;

interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration;
}

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
    new NodePolyfillPlugin(),
    new DefinePlugin({
      "process.env": envVars
    })
  ],
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
    clean: true
  },
};

export default config;
