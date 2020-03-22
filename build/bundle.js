/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nvar _Header = __webpack_require__(/*! ./components/Header/ */ \"./src/components/Header/index.js\");\n\nvar _Header2 = _interopRequireDefault(_Header);\n\nvar _actions = __webpack_require__(/*! ./components/Header/store/actions */ \"./src/components/Header/store/actions.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar App = function App(props) {\n  return _react2.default.createElement(\n    'div',\n    null,\n    _react2.default.createElement(_Header2.default, null),\n    (0, _reactRouterConfig.renderRoutes)(props.route.routes)\n  );\n};\n\nApp.loadData = function (store) {\n  return store.dispatch((0, _actions.getHeaderInfo)());\n};\n\nexports.default = App;\n\n//# sourceURL=webpack:///./src/App.js?");

/***/ }),

/***/ "./src/components/Header/index.js":
/*!****************************************!*\
  !*** ./src/components/Header/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _actions = __webpack_require__(/*! ./store/actions */ \"./src/components/Header/store/actions.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Header = function Header(props) {\n  var isLogin = props.isLogin,\n      handleLogin = props.handleLogin,\n      handleLogout = props.handleLogout;\n\n\n  return _react2.default.createElement(\n    'div',\n    null,\n    _react2.default.createElement(\n      _reactRouterDom.Link,\n      { to: '/' },\n      '\\u9996\\u9875'\n    ),\n    _react2.default.createElement('br', null),\n    isLogin ? _react2.default.createElement(\n      _react2.default.Fragment,\n      null,\n      _react2.default.createElement(\n        _reactRouterDom.Link,\n        { to: '/translation' },\n        '\\u7FFB\\u8BD1\\u5217\\u8868'\n      ),\n      _react2.default.createElement('br', null),\n      _react2.default.createElement(\n        'div',\n        { onClick: handleLogout },\n        '\\u9000\\u51FA'\n      )\n    ) : _react2.default.createElement(\n      'div',\n      { onClick: handleLogin },\n      '\\u767B\\u9646'\n    )\n  );\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    isLogin: state.header.isLogin\n  };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return {\n    handleLogin: function handleLogin() {\n      dispatch((0, _actions.login)());\n    },\n    handleLogout: function handleLogout() {\n      dispatch((0, _actions.logout)());\n    }\n  };\n};\n\nexports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Header);\n\n//# sourceURL=webpack:///./src/components/Header/index.js?");

/***/ }),

/***/ "./src/components/Header/store/actions.js":
/*!************************************************!*\
  !*** ./src/components/Header/store/actions.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar getHeaderInfo = exports.getHeaderInfo = function getHeaderInfo() {\n  return function (dispatch, getState, axiosInstance) {\n    return axiosInstance.get('/api/isLogin.json?secret=PP87ANTIPIRATE').then(function (res) {\n      dispatch({\n        type: 'change_login_state',\n        value: res.data.data.login\n      });\n    });\n  };\n};\n\nvar login = exports.login = function login() {\n  return function (dispatch, getState, axiosInstance) {\n    return axiosInstance.get('/api/login.json?secret=PP87ANTIPIRATE').then(function (res) {\n      return dispatch({\n        type: 'change_login_state',\n        value: res.data.data.login\n      });\n    });\n  };\n};\n\nvar logout = exports.logout = function logout() {\n  return function (dispatch, getState, axiosInstance) {\n    return axiosInstance.get('/api/logout.json').then(function (res) {\n      return dispatch({\n        type: 'change_login_state',\n        value: !res.data.data.logout || false\n      });\n    });\n  };\n};\n\n//# sourceURL=webpack:///./src/components/Header/store/actions.js?");

/***/ }),

/***/ "./src/components/Header/store/index.js":
/*!**********************************************!*\
  !*** ./src/components/Header/store/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar defaultState = {\n  isLogin: true\n};\n\nvar reducer = function reducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;\n  var action = arguments[1];\n\n  switch (action.type) {\n    case 'change_login_state':\n      return {\n        isLogin: action.value\n      };\n    default:\n      return state;\n  }\n};\n\nexports.default = reducer;\n\n//# sourceURL=webpack:///./src/components/Header/store/index.js?");

/***/ }),

/***/ "./src/containers/Home/index.js":
/*!**************************************!*\
  !*** ./src/containers/Home/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _actions = __webpack_require__(/*! ./store/actions */ \"./src/containers/Home/store/actions.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Home = function Home(props) {\n  var name = props.name,\n      list = props.list,\n      getHome = props.getHome;\n\n\n  (0, _react.useEffect)(function () {\n    !list.length && getHome();\n  }, []);\n  return _react2.default.createElement(\n    'div',\n    null,\n    _react2.default.createElement(\n      'div',\n      null,\n      name\n    )\n  );\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n  console.log(state);\n  var _state$home = state.home,\n      name = _state$home.name,\n      list = _state$home.list;\n\n  return {\n    name: name,\n    list: list\n  };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return {\n    getHome: function getHome() {\n      dispatch((0, _actions.getHomeList)());\n    }\n  };\n};\n\nHome.loadData = function (_ref) {\n  var dispatch = _ref.dispatch;\n\n  return dispatch((0, _actions.getHomeList)());\n};\n\nexports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Home);\n\n//# sourceURL=webpack:///./src/containers/Home/index.js?");

/***/ }),

/***/ "./src/containers/Home/store/actions.js":
/*!**********************************************!*\
  !*** ./src/containers/Home/store/actions.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar getHomeList = exports.getHomeList = function getHomeList() {\n  return function (dispatch, getState, axiosInstance) {\n    ///\\http://47.95.113.63/ssr/\n    return axiosInstance.get('/api/news.json').then(function (res) {\n      dispatch({\n        type: 'change_home_list',\n        list: res.data.data || []\n      });\n    });\n  };\n};\n\n//# sourceURL=webpack:///./src/containers/Home/store/actions.js?");

/***/ }),

/***/ "./src/containers/Home/store/index.js":
/*!********************************************!*\
  !*** ./src/containers/Home/store/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nvar defaultState = {\n  list: [],\n  name: 'hello'\n};\n\nvar reducer = function reducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;\n  var action = arguments[1];\n\n  switch (action.type) {\n    case 'change_home_list':\n      return _extends({}, state, {\n        list: [].concat(_toConsumableArray(action.list))\n      });\n    default:\n      return state;\n  }\n};\n\nexports.default = reducer;\n\n//# sourceURL=webpack:///./src/containers/Home/store/index.js?");

/***/ }),

/***/ "./src/containers/Login/index.js":
/*!***************************************!*\
  !*** ./src/containers/Login/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Login = function Login() {\n  return _react2.default.createElement(\n    'div',\n    null,\n    _react2.default.createElement(\n      'div',\n      null,\n      'Login'\n    ),\n    _react2.default.createElement(\n      'button',\n      { onClick: function onClick() {\n          return alert('123');\n        } },\n      '123'\n    )\n  );\n};\n\nexports.default = Login;\n\n//# sourceURL=webpack:///./src/containers/Login/index.js?");

/***/ }),

/***/ "./src/containers/NotFound/index.js":
/*!******************************************!*\
  !*** ./src/containers/NotFound/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar NotFound = function NotFound(props) {\n  return _react2.default.createElement(\n    'div',\n    null,\n    '404\\uFF0C sorry\\uFF01 page is not found'\n  );\n};\n\nexports.default = NotFound;\n\n//# sourceURL=webpack:///./src/containers/NotFound/index.js?");

/***/ }),

/***/ "./src/containers/TranslationList/index.js":
/*!*************************************************!*\
  !*** ./src/containers/TranslationList/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _actions = __webpack_require__(/*! ./store/actions */ \"./src/containers/TranslationList/store/actions.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar TranslationList = function TranslationList(props) {\n  var list = props.list,\n      isLogin = props.isLogin,\n      getTranslation = props.getTranslation;\n\n  (0, _react.useEffect)(function () {\n    !list.length && getTranslation();\n  }, []);\n\n  var getlist = function getlist() {\n    return list.map(function (item) {\n      return _react2.default.createElement(\n        'div',\n        { key: item.id },\n        item.title\n      );\n    });\n  };\n  return isLogin ? _react2.default.createElement(\n    'div',\n    null,\n    getlist()\n  ) : _react2.default.createElement(_reactRouterDom.Redirect, { to: '/' });\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n  var list = state.translation.list;\n  var isLogin = state.header.isLogin;\n\n  return {\n    list: list || [],\n    isLogin: isLogin\n  };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return {\n    getTranslation: function getTranslation() {\n      dispatch((0, _actions.geTranslationList)());\n    }\n  };\n};\n\nTranslationList.loadData = function (_ref) {\n  var dispatch = _ref.dispatch;\n\n  return dispatch((0, _actions.geTranslationList)());\n};\n\nexports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(TranslationList);\n\n//# sourceURL=webpack:///./src/containers/TranslationList/index.js?");

/***/ }),

/***/ "./src/containers/TranslationList/store/actions.js":
/*!*********************************************************!*\
  !*** ./src/containers/TranslationList/store/actions.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar geTranslationList = exports.geTranslationList = function geTranslationList() {\n  return function (dispatch, getState, axiosInstance) {\n    ///\\http://47.95.113.63/ssr/\n    return axiosInstance.get('/api/translations.json').then(function (res) {\n      dispatch({\n        type: 'change_translations_list',\n        list: res.data.data || []\n      });\n    });\n  };\n};\n\n//# sourceURL=webpack:///./src/containers/TranslationList/store/actions.js?");

/***/ }),

/***/ "./src/containers/TranslationList/store/index.js":
/*!*******************************************************!*\
  !*** ./src/containers/TranslationList/store/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nvar defaultState = {\n  list: []\n};\n\nvar reducer = function reducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;\n  var action = arguments[1];\n\n  switch (action.type) {\n    case 'change_translations_list':\n      return _extends({}, state, {\n        list: [].concat(_toConsumableArray(action.list))\n      });\n    default:\n      return state;\n  }\n};\n\nexports.default = reducer;\n\n//# sourceURL=webpack:///./src/containers/TranslationList/store/index.js?");

/***/ }),

/***/ "./src/routes.js":
/*!***********************!*\
  !*** ./src/routes.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _App = __webpack_require__(/*! ./App */ \"./src/App.js\");\n\nvar _App2 = _interopRequireDefault(_App);\n\nvar _Home = __webpack_require__(/*! ./containers/Home/ */ \"./src/containers/Home/index.js\");\n\nvar _Home2 = _interopRequireDefault(_Home);\n\nvar _Login = __webpack_require__(/*! ./containers/Login/ */ \"./src/containers/Login/index.js\");\n\nvar _Login2 = _interopRequireDefault(_Login);\n\nvar _TranslationList = __webpack_require__(/*! ./containers/TranslationList/ */ \"./src/containers/TranslationList/index.js\");\n\nvar _TranslationList2 = _interopRequireDefault(_TranslationList);\n\nvar _NotFound = __webpack_require__(/*! ./containers/NotFound/ */ \"./src/containers/NotFound/index.js\");\n\nvar _NotFound2 = _interopRequireDefault(_NotFound);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = [{\n  path: '/',\n  component: _App2.default,\n  key: 'app',\n  loadData: _App2.default.loadData,\n  routes: [{\n    path: '/',\n    component: _Home2.default,\n    exact: true,\n    loadData: _Home2.default.loadData,\n    key: 'home'\n  }, {\n    path: '/login',\n    component: _Login2.default,\n    exact: true,\n    key: 'login'\n  }, {\n    path: '/translation',\n    component: _TranslationList2.default,\n    exact: true,\n    key: 'translation',\n    loadData: _TranslationList2.default.loadData\n  }, {\n    // path: '*',\n    component: _NotFound2.default\n  }]\n}];\n\n// export default (\n//   <div>\n//     <Route path='/' exact component={Home}></Route>\n//     <Route path='/login' exact component={Login}></Route>\n//   </div>\n// )\n\n//# sourceURL=webpack:///./src/routes.js?");

/***/ }),

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nvar _expressHttpProxy = __webpack_require__(/*! express-http-proxy */ \"express-http-proxy\");\n\nvar _expressHttpProxy2 = _interopRequireDefault(_expressHttpProxy);\n\nvar _store = __webpack_require__(/*! ../store/ */ \"./src/store/index.js\");\n\nvar _utils = __webpack_require__(/*! ../utils */ \"./src/utils.js\");\n\nvar _routes = __webpack_require__(/*! ../routes */ \"./src/routes.js\");\n\nvar _routes2 = _interopRequireDefault(_routes);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar app = (0, _express2.default)();\n\napp.use(_express2.default.static('public'));\n\napp.use('/api', (0, _expressHttpProxy2.default)('http://47.95.113.63', {\n  proxyReqPathResolver: function proxyReqPathResolver(req) {\n    return '/ssr/api' + req.url;\n  }\n}));\n\napp.get('*', function (req, res) {\n  var store = (0, _store.getServerStore)(req);\n  var promises = [];\n  // 多级路匹配拿到对应路由loaddata\n  var matchedRoutes = (0, _reactRouterConfig.matchRoutes)(_routes2.default, req.path);\n\n  matchedRoutes.forEach(function (item) {\n    if (item.route.loadData) {\n\n      // 请求容错处理\n      var promise = new Promise(function (resolve, rejects) {\n        item.route.loadData(store).then(resolve).catch(resolve);\n      });\n      promises.push(promise);\n    }\n  });\n\n  Promise.all(promises).then(function () {\n    var context = {};\n    // const lastRouteKey = matchedRoutes[matchedRoutes.length - 1].route.key;\n    // if (lastRouteKey == '404') {\n    //   res.status(404);\n    // }\n\n    if (context.action === 'REPLACE') {\n      res.redirect(301, context.url);\n    }\n\n    if (context.NotFound) {\n      res.status(404);\n    }\n\n    res.send((0, _utils.render)(req, store, _routes2.default, context));\n  });\n});\n\nvar server = app.listen(3000);\n\n//# sourceURL=webpack:///./src/server/index.js?");

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.getServerStore = exports.getClientStore = undefined;\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _reduxThunk = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n\nvar _reduxThunk2 = _interopRequireDefault(_reduxThunk);\n\nvar _store = __webpack_require__(/*! ../containers/Home/store */ \"./src/containers/Home/store/index.js\");\n\nvar _store2 = _interopRequireDefault(_store);\n\nvar _store3 = __webpack_require__(/*! ../components/Header/store/ */ \"./src/components/Header/store/index.js\");\n\nvar _store4 = _interopRequireDefault(_store3);\n\nvar _store5 = __webpack_require__(/*! ../containers/TranslationList/store/ */ \"./src/containers/TranslationList/store/index.js\");\n\nvar _store6 = _interopRequireDefault(_store5);\n\nvar _utils = __webpack_require__(/*! ../utils */ \"./src/utils.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar reducer = (0, _redux.combineReducers)({\n  home: _store2.default,\n  header: _store4.default,\n  translation: _store6.default\n});\n\nvar getClientStore = function getClientStore() {\n  // 脱水\n  var defaultState = window.context.state;\n  return (0, _redux.createStore)(reducer, defaultState, (0, _redux.applyMiddleware)(_reduxThunk2.default.withExtraArgument(_utils.clientAxios)));\n};\n\nvar getServerStore = function getServerStore(req) {\n  return (0, _redux.createStore)(reducer, (0, _redux.applyMiddleware)(_reduxThunk2.default.withExtraArgument((0, _utils.serverAxios)(req))));\n};\n\nexports.getClientStore = getClientStore;\nexports.getServerStore = getServerStore;\n\n//# sourceURL=webpack:///./src/store/index.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.serverAxios = exports.clientAxios = exports.render = undefined;\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _server = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _axios = __webpack_require__(/*! axios */ \"axios\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar secret = {\n  secret: 'PP87ANTIPIRATE'\n};\n\nvar clientAxios = _axios2.default.create({\n  baseURL: '/',\n  params: secret\n});\n\n// 问题： 登陆成功后刷新页面回到登陆页面，是因为服务器转发请求没有携带cookie\nvar serverAxios = function serverAxios(req) {\n  return _axios2.default.create({\n    baseURL: 'http://47.95.113.63/ssr',\n    headers: {\n      cookie: req.get('cookie') || ''\n    },\n    params: secret\n  });\n};\n\nvar render = function render(req, store, Routes, context) {\n  var content = (0, _server.renderToString)(_react2.default.createElement(\n    _reactRedux.Provider,\n    { store: store },\n    _react2.default.createElement(\n      _reactRouterDom.StaticRouter,\n      { location: req.path, context: context },\n      _react2.default.createElement(\n        _react2.default.Fragment,\n        null,\n        (0, _reactRouterConfig.renderRoutes)(Routes)\n      )\n    )\n  ));\n\n  return '\\n    <!DOCTYPE html>\\n    <html lang=\"en\">\\n    <head>\\n      <meta charset=\"UTF-8\"/>\\n      <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"/>\\n      <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\"/>\\n      <title>Document</title>\\n    </head>\\n    <body>\\n      <div id=\"root\">' + content + '</div>\\n      <script>\\n        window.context = {\\n          // \\u6CE8\\u6C34\\n          state: ' + JSON.stringify(store.getState()) + '\\n        }\\n      </script>  \\n      <script src=\"/bundle.js\"></script>  \\n    </body>\\n    </html>\\n  ';\n};\n\nexports.render = render;\nexports.clientAxios = clientAxios;\nexports.serverAxios = serverAxios;\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-http-proxy":
/*!*************************************!*\
  !*** external "express-http-proxy" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-http-proxy\");\n\n//# sourceURL=webpack:///external_%22express-http-proxy%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router-config":
/*!**************************************!*\
  !*** external "react-router-config" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-config\");\n\n//# sourceURL=webpack:///external_%22react-router-config%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ })

/******/ });