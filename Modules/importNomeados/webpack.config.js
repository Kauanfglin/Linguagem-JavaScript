const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js',
    planet: './src/armaments.js',
    planetcorporation: './src/spaceship.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist')
    },
    hot: true,
    open: true,
    port: 8080
  },
  resolve: {
    extensions: ['.js']
  }
};