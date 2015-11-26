module.exports = {
  context: __dirname + "/src/main/resources/app",
  entry: "./index.js",
  output: {
    filename: "bundle.js",
    path: __dirname + "/src/main/resources/static"
  },
  module: {
    loaders: [
      {
        test: /\.js(x|)?$/,
        exclude: /node_modules/,
        loaders: ["babel-loader"]
      }
    ]
  },
  externals: {
      //don't bundle the 'react' npm package with our bundle.js
      //but get it from a global 'React' variable
      'react': 'React'
  },
  resolve: {
      extensions: ['', '.js', '.jsx']
  }
};