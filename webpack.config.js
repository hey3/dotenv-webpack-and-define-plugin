const path = require('path')
const webpack = require('webpack')
const Dotenv = require('dotenv-webpack')

const definePlugin = new webpack.DefinePlugin({
  DEFINE: JSON.stringify('This is DefinePlugin variable.'),
  'process.env': {
    DEFINE: JSON.stringify('This is process.env with DefinePlugin variable.')
  }
})

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
  plugins: [new Dotenv(), definePlugin],
}
