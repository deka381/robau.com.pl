module.exports = {
  entry: [
    "./js/paralax.js",
    "./js/menu-btn.js",
          ],
  output: { filename: "./js/out.js" },
  watch: true,
  module: {
  loaders: [
      {
      test: /\.jsx$/, exclude: /node_modules/,
      loader: 'babel-loader',
      query: { presets: ['es2015', 'react'] }
      }
    ]
  }
}
