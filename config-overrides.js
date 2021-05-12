const path = require('path')
var package = require('./package.json')
var packageName = package.name
module.exports = function override(config, env) {
  //do stuff with the webpack config...
  return {
    ...config,
    output: {
      ...config.output,
      library: `${packageName}-[name]`,
      libraryTarget: 'umd',
      jsonpFunction: `webpackJsonp_${packageName}`,
    },
    resolve: {
      ...config.resolve,
      alias: {
        ...config.alias,
        '@': path.resolve(__dirname, 'src'),
      },
    },
    devServer: {
      // ...config.devServer,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': '*',
        'Access-Control-Allow-Headers': '*',
      },
      // proxy: {
      //   '/': {
      //     target: 'http://localhost:3000',
      //     bypass: function (req, res, proxyOptions) {
      //       if (req.method === 'OPTIONS') {
      //         res.statusCode = 204
      //         return 'a' // <----  这个a我也不知道干嘛的
      //       }
      //     },
      //   },
      // },
      // headers: {
      //   'Access-Control-Allow-Origin': '*',
      //   'Access-Control-Allow-Methods':
      //     'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      //   'Access-Control-Allow-Headers':
      //     'X-Requested-With, content-type, Authorization',
      // },
    },
  }
}
