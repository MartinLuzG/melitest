/**
 * @author Martín Luz
 * @version 1.0.0
 * @description Webpack config
 */
const webpack = require("webpack");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const nodeExternals = require('webpack-node-externals');

const commonConfig = {
  module: {
    rules: [
      {
        test: /\.(js|jsx|mjs)$/,
        loader: require.resolve("babel-loader"),
        options: {
          cacheDirectory: true
        }
      },
      {
        test: /\.css$/,
        loader: require.resolve('css-loader'),
        options: {
          importLoaders: 1,
          modules: true,
          localIdentName: "[name]__[local]___[hash:base64:5]"  
        }
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    })
  ], 
  optimization: {
    minimizer: [
      new UglifyJSPlugin({
        sourceMap: false,
        uglifyOptions: {
          compress: {
            inline: false,
            warnings: false
          }
        }
      })
    ]
  }
};

const serverConfig =  Object.assign({}, commonConfig,{
  entry: './server/index.js',
  output: {
    path: __dirname + '/build',
    filename: 'server.bundle.js'
  },
  target: "node",
  externals: [nodeExternals({
    // load non-javascript files with extensions, presumably via loaders
    whitelist: [/\.(?!(?:jsx?|json)$).{1,5}$/i],
  })]
});

const clientConfig = Object.assign({}, commonConfig, {
  entry: './src/browser/index.js',
  output: {
    path: __dirname + '/build',
    filename: 'app.bundle.js'
  }
});

module.exports = [serverConfig, clientConfig];