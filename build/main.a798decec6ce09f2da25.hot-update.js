exports.id = "main";
exports.modules = {

/***/ "./webpack.server.js":
/*!***************************!*\
  !*** ./webpack.server.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__dirname) {\n\nvar path = __webpack_require__(/*! path */ \"path\");\nvar nodeExternals = __webpack_require__(/*! webpack-node-externals */ \"webpack-node-externals\");\nvar webpack = __webpack_require__(/*! webpack */ \"webpack\");\n\nmodule.exports = {\n  target: 'node',\n  mode: 'development',\n  entry: './src/index.js',\n  devServer: {\n    contentBase: './build',\n    port: 8080, //端口号设为8080, 默认也是8080,\n    hot: true\n  },\n  output: {\n    filename: 'bundle.js',\n    path: path.resolve(__dirname, 'build')\n  },\n  externals: [nodeExternals()],\n  module: {\n    rules: [{\n      test: /\\.js?$/,\n      loader: 'babel-loader',\n      exclude: /node_modules/,\n      options: {\n        presets: ['react', 'stage-0', ['env', {\n          targets: {\n            browser: ['last 2 versions']\n          }\n        }]]\n      }\n    }]\n  },\n  plugins: [new webpack.HotModuleReplacementPlugin()]\n};\n/* WEBPACK VAR INJECTION */}.call(this, \"/\"))\n\n//# sourceURL=webpack:///./webpack.server.js?");

/***/ })

};