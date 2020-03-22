exports.id = "main";
exports.modules = {

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _server = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n\nvar _Home = __webpack_require__(/*! ./containers/Home/ */ \"./src/containers/Home/index.js\");\n\nvar _Home2 = _interopRequireDefault(_Home);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar app = (0, _express2.default)();\n\napp.use(__webpack_require__(/*! webpack-dev-middleware */ \"webpack-dev-middleware\")(compiler, {\n  noInfo: true, publicPath: webpackConfig.output.publicPath\n}));\n\napp.get('/', function (req, res) {\n  res.send((0, _server.renderToString)(_react2.default.createElement(_Home2.default, null)));\n});\n\nvar server = app.listen(3000);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./webpack.server.js":
false,

/***/ "path":
false,

/***/ "webpack":
false,

/***/ "webpack-node-externals":
false

};