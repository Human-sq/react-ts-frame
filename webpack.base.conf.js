const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const json = require('./package.json');// 引进package.json

const newEntry = {
  bundle: ['babel-polyfill', './src/index.tsx'],
};

const config = {
  entry: newEntry,
  resolve: {
    alias: {
      components: path.resolve(__dirname, './src/components'),
      store: path.resolve(__dirname, './src/store'),
      api: path.resolve(__dirname, './src/api'),
      images: path.resolve(__dirname, './src/assets/images'),
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    mainFields: ['jsnext:main', 'browser', 'main'],
  },
  module: {
    rules: [
      { 
        test: /\.tsx|ts?$/, 
        // use: ['happypack/loader?id=babel'],
        loader: ['babel-loader', 'awesome-typescript-loader'],
        include: path.resolve(__dirname, 'src'),
        exclude: [
          path.resolve(__dirname, './node_modules'),
        ],
      },
      {
        enforce: 'pre', 
        test: /\.js$/, 
        loader: ['babel-loader', 'source-map-loader'],
        include: path.resolve(__dirname, 'src'),
        exclude: [
          path.resolve(__dirname, './node_modules'),
        ],
      },
      {
        test: /\.(less|css)/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            // 'style-loader',
            'css-loader?url=false',
            'autoprefixer-loader',
            'less-loader',
          ],
        }),
      },
    ],
  },
  devServer: {
    host: '0.0.0.0',
    port: 1086,
    compress: true,
    historyApiFallback: true,
    noInfo: false,
    disableHostCheck: true,
    // proxy: {
    //   '/admin-api': {
    //     target: 'http://121.43.196.139/',
    //     pathRewrite: {'^/admin-api': ''}
    //   },
    // }
  },
};
module.exports = config;
