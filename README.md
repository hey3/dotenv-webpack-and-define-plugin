# dotenv-webpack-and-define-plugin

dotenv-webpack と DefinePlugin の関係を調べる

TL;DR

- dotenv-webpack  
.env から環境変数を拾って process.env.HOGE に割り当てる
- DefinePlugin  
指定した global 変数に値を割り当てる

## dotenv-webpack

```js
// .env
MESSAGE='hello'

// webpack.config.js
const Dotenv = require('dotenv-webpack')

module.exports = {
  // ...
  plugins: [
    new Dotenv(),
  ]
}

// script
console.log(process.env.MESSAGE)

// result
console.log('hello')
```

## DefinePlugin

```js
// webpack.config.js
const webpack = require('webpack')

module.exports = {
  // ...
  plugins: [
    new webpack.DefinePlugin({
      MESSAGE: JSON.stringify('hello'),
    }),
  ],
}

// script
console.log(MESSAGE)

// result
console.log('hello')
```
