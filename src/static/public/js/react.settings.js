(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["react.settings"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/pages/settings.scss":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/pages/settings.scss ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"body {\\n  background-color: #2362c7; }\\n\\n#main .loading-user {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: center;\\n  height: 100vh;\\n  width: 100vw; }\\n  #main .loading-user svg > path {\\n    fill: white; }\\n  #main .loading-user .title {\\n    font-size: 33px;\\n    font-weight: bold;\\n    color: #ffffff;\\n    margin-bottom: 33px;\\n    margin-top: 18px; }\\n  #main .loading-user .excerpt {\\n    margin-top: 13px;\\n    line-height: 1.27;\\n    font-size: 15px;\\n    color: #ffffff;\\n    width: 150px;\\n    text-align: center; }\\n  #main .loading-user .rotate {\\n    animation: rotation 1.5s infinite linear; }\\n\\n.owner1 {\\n  padding: 20px; }\\n  .owner1 .card-content {\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center; }\\n  .owner1 .card-title {\\n    font-size: 20px;\\n    font-weight: bold;\\n    color: #2362c7;\\n    text-align: center; }\\n  .owner1 .card-body {\\n    padding: 0 0 0 16px; }\\n    .owner1 .card-body .card-body-section {\\n      margin-top: 26px;\\n      display: flex;\\n      align-items: center; }\\n      .owner1 .card-body .card-body-section > div:nth-child(2) {\\n        width: 154px;\\n        padding-left: 20.5px;\\n        color: #2362c7;\\n        font-size: 23px;\\n        font-weight: 500;\\n        text-align: center; }\\n      .owner1 .card-body .card-body-section .bottom-exerpt {\\n        font-size: 16px;\\n        text-align: center;\\n        color: #707070; }\\n\\n.card.delete {\\n  background-color: #8e3c3c !important; }\\n  .card.delete .card-title {\\n    color: #ffffff !important; }\\n  .card.delete #Path_1517 {\\n    fill: white; }\\n  .card.delete #Path_1504 {\\n    fill: white; }\\n  .card.delete #Path_1510 {\\n    fill: white; }\\n  .card.delete #Path_1511 {\\n    fill: white; }\\n  .card.delete #Path_1512 {\\n    fill: white; }\\n  .card.delete #Path_1513 {\\n    fill: white; }\\n  .card.delete #Path_1514 {\\n    fill: white; }\\n  .card.delete #Path_1909 {\\n    fill: white; }\\n  .card.delete #Rectangle_1288 {\\n    fill: white; }\\n  .card.delete .delete-excerpt {\\n    font-size: 15px;\\n    color: white;\\n    text-align: center; }\\n  .card.delete .delete-button {\\n    margin-top: 20px;\\n    background-color: #d95868; }\\n\\n@keyframes rotation {\\n  from {\\n    transform: rotate(0deg); }\\n  to {\\n    transform: rotate(359deg); } }\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/components/pages/settings.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./src/components/entrypoints/settings.jsx":
/*!*************************************************!*\
  !*** ./src/components/entrypoints/settings.jsx ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _pages_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/settings */ \"./src/components/pages/settings.jsx\");\n\n\n\n\n\nObject(react_dom__WEBPACK_IMPORTED_MODULE_1__[\"hydrate\"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pages_settings__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null), document.getElementById(\"root\"));\n\n//# sourceURL=webpack:///./src/components/entrypoints/settings.jsx?");

/***/ }),

/***/ "./src/components/pages/settings.jsx":
/*!*******************************************!*\
  !*** ./src/components/pages/settings.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _svg_logo_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../svg/logo-svg */ \"./src/components/svg/logo-svg.jsx\");\n/* harmony import */ var _svg_contact_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../svg/contact-svg */ \"./src/components/svg/contact-svg.jsx\");\n/* harmony import */ var _svg_LoaderSvg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../svg/LoaderSvg */ \"./src/components/svg/LoaderSvg.jsx\");\n/* harmony import */ var _util_url_util__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../util/url-util */ \"./src/util/url-util.js\");\n/* harmony import */ var _login_LoginMethods__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./login/LoginMethods */ \"./src/components/pages/login/LoginMethods.jsx\");\nfunction ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _createSuper(Derived) {var hasNativeReflectConstruct = _isNativeReflectConstruct();return function _createSuperInternal() {var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(Derived),result;if (hasNativeReflectConstruct) {var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(this).constructor;result = Reflect.construct(Super, arguments, NewTarget);} else {result = Super.apply(this, arguments);}return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6___default()(this, result);};}function _isNativeReflectConstruct() {if (typeof Reflect === \"undefined\" || !Reflect.construct) return false;if (Reflect.construct.sham) return false;if (typeof Proxy === \"function\") return true;try {Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));return true;} catch (e) {return false;}}\n\n\n\n\n\n// import UrlUtil from \"../../util/url-util\";\n// import LoginMethods from \"./login/LoginMethods\";\n\nif (true) {\n  __webpack_require__(/*! ../global.scss */ \"./src/components/global.scss\");\n  __webpack_require__(/*! ./settings.scss */ \"./src/components/pages/settings.scss\");\n  __webpack_require__(/*! ./login.scss */ \"./src/components/pages/login.scss\");\n}var\n\nSettings = /*#__PURE__*/function (_React$Component) {_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Settings, _React$Component);var _super = _createSuper(Settings);\n  function Settings() {var _this;_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Settings);\n    _this = _super.call(this);_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), \"loadAppSettings\", /*#__PURE__*/_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    function _callee() {var url, init, response, appSettings, titleSetting;return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.prev = 0;\n\n              url = \"/api/app-settings\";\n              init = {\n                method: \"GET\",\n                headers: {\n                  \"Content-Type\": \"application/json\" } };_context.next = 5;return (\n\n\n                fetch(url, init));case 5:response = _context.sent;_context.next = 8;return (\n                response.json());case 8:appSettings = _context.sent;\n              titleSetting = appSettings.find(function (a) {return a.settingName === \"title\";});\n              if (titleSetting) {\n                document.title = titleSetting.settingValue + \" Auth\";\n              }_context.next = 17;break;case 13:_context.prev = 13;_context.t0 = _context[\"catch\"](0);\n\n              console.log(\"Error!\");\n              console.log(_context.t0);case 17:case \"end\":return _context.stop();}}}, _callee, null, [[0, 13]]);})));_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), \"loadLoginMethods\", /*#__PURE__*/_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(\n\n\n\n    function _callee2() {var _this$state, loginMethods, securityQuestions, username, url, authorization, init, response, responseJson;return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:_this$state = _objectSpread({},\n              _this.state), loginMethods = _this$state.loginMethods, securityQuestions = _this$state.securityQuestions, username = _this$state.username;_context2.prev = 1;\n\n              url = \"/api/login-methods\";\n              authorization = _util_url_util__WEBPACK_IMPORTED_MODULE_13__[\"default\"].getQueryVariable(\"access_token\");\n              init = {\n                method: \"GET\",\n                headers: {\n                  Authorization: \"Bearer \".concat(authorization),\n                  \"Content-Type\": \"application/json\" } };_context2.next = 7;return (\n\n\n                fetch(url, init));case 7:response = _context2.sent;\n              if (response.status === 403) {\n                // NOTE: uncomment when done\n                // window.location.href = '../' + location.search;\n              }_context2.next = 11;return (\n                response.json());case 11:responseJson = _context2.sent;\n              loginMethods = responseJson.loginMethods;\n              securityQuestions = responseJson.securityQuestions ?\n              responseJson.securityQuestions.map(function (sq) {\n                return { answer: \"\", question: sq };\n              }) :\n              [];\n              _this.setState({\n                isLoadingLoginMethods: false,\n                loginMethods: loginMethods,\n                securityQuestions: securityQuestions,\n                username: username });_context2.next = 20;break;case 17:_context2.prev = 17;_context2.t0 = _context2[\"catch\"](1);\n\n\n              console.error(_context2.t0);case 20:case \"end\":return _context2.stop();}}}, _callee2, null, [[1, 17]]);})));_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), \"setSecurityQuestions\",\n\n\n\n    function (securityQuestions) {\n      _this.setState({ securityQuestions: securityQuestions });\n    });_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), \"setLoginMethods\",\n\n    function (loginMethods) {\n      _this.setState({ loginMethods: loginMethods });\n    });_this.state = { isLoadingLoginMethods: true, loginMethods: [], securityQuestions: [], username: \"\" };return _this;}_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(Settings, [{ key: \"componentDidMount\", value: function componentDidMount() {if (true) {this.loadAppSettings();setTimeout(function () {document.getElementById(\"splash\").style.animation = \"fadeout 0.5s\";document.getElementById(\"splash\").style.opacity = 0;document.getElementById(\"main\").style.animation = \"fadein 0.5s\";document.getElementById(\"main\").style.opacity = 1;}, 500);this.loadLoginMethods();}} }, { key: \"render\", value: function render()\n\n    {var _this$state2 = _objectSpread({},\n\n\n\n\n\n      this.state),isLoadingLoginMethods = _this$state2.isLoadingLoginMethods,loginMethods = _this$state2.loginMethods,securityQuestions = _this$state2.securityQuestions,username = _this$state2.username;\n      return /*#__PURE__*/(\n        react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_9__[\"Fragment\"], null, /*#__PURE__*/\n        react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_9__[\"Fragment\"], null, /*#__PURE__*/\n        react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(\"div\", {\n          id: \"splash\",\n          style: {\n            backgroundColor: \"#2362c7\",\n            minHeight: \"100vh\",\n            display: \"flex\",\n            alignItems: \"center\",\n            justifyContent: \"center\" } }, /*#__PURE__*/\n\n\n        react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_svg_logo_svg__WEBPACK_IMPORTED_MODULE_10__[\"default\"], null)), /*#__PURE__*/\n\n        react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(\"main\", { id: \"main\", style: { position: \"absolute\", top: 0, opacity: 0 } },\n        isLoadingLoginMethods && /*#__PURE__*/\n        react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(\"div\", { className: \"loading-user\" }, /*#__PURE__*/\n        react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_svg_contact_svg__WEBPACK_IMPORTED_MODULE_11__[\"default\"], null), /*#__PURE__*/\n        react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(\"div\", { className: \"title\" }, \"MyAccount\"), /*#__PURE__*/\n        react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(\"div\", { className: \"rotate\" }, /*#__PURE__*/\n        react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_svg_LoaderSvg__WEBPACK_IMPORTED_MODULE_12__[\"default\"], null)), /*#__PURE__*/\n\n        react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(\"div\", { className: \"excerpt\" }, \"Loading your login methods...\")),\n\n\n        !isLoadingLoginMethods && /*#__PURE__*/\n        react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_login_LoginMethods__WEBPACK_IMPORTED_MODULE_14__[\"default\"], {\n          loginMethods: loginMethods,\n          setSecurityQuestions: this.setSecurityQuestions,\n          setLoginMethods: this.setLoginMethods,\n          username: username,\n          securityQuestions: securityQuestions,\n          isSettings: true })))));\n\n\n\n\n\n\n    } }]);return Settings;}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Settings);\n\n//# sourceURL=webpack:///./src/components/pages/settings.jsx?");

/***/ }),

/***/ "./src/components/pages/settings.scss":
/*!********************************************!*\
  !*** ./src/components/pages/settings.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./settings.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/pages/settings.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/components/pages/settings.scss?");

/***/ }),

/***/ "./src/components/svg/LoaderSvg.jsx":
/*!******************************************!*\
  !*** ./src/components/svg/LoaderSvg.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return LoaderSvg; });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\nfunction _createSuper(Derived) {var hasNativeReflectConstruct = _isNativeReflectConstruct();return function _createSuperInternal() {var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived),result;if (hasNativeReflectConstruct) {var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor;result = Reflect.construct(Super, arguments, NewTarget);} else {result = Super.apply(this, arguments);}return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result);};}function _isNativeReflectConstruct() {if (typeof Reflect === \"undefined\" || !Reflect.construct) return false;if (Reflect.construct.sham) return false;if (typeof Proxy === \"function\") return true;try {Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));return true;} catch (e) {return false;}}var\n\nLoaderSvg = /*#__PURE__*/function (_Component) {_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(LoaderSvg, _Component);var _super = _createSuper(LoaderSvg);function LoaderSvg() {_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, LoaderSvg);return _super.apply(this, arguments);}_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(LoaderSvg, [{ key: \"render\", value: function render()\n    {\n      return /*#__PURE__*/(\n        react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"svg\", {\n          xmlns: \"http://www.w3.org/2000/svg\",\n          width: \"32.703\",\n          height: \"34\",\n          viewBox: \"0 0 32.703 34\" }, /*#__PURE__*/\n\n        react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"path\", {\n          id: \"noun_loading_391059\",\n          d: \"M44.958,24.838a10.642,10.642,0,0,0-.353-1.1c-.132-.4-.309-.706-.441-1.014a5.027,5.027,0,0,0-.441-.838c.132.22.22.485.353.75.088.309.265.661.353,1.014a10.642,10.642,0,0,0,.353,1.1,15.614,15.614,0,0,1-1.5,11.2,14.47,14.47,0,0,1-4.63,4.939,10.271,10.271,0,0,1-1.5.882c-.22.088-.529.265-.794.353a6.786,6.786,0,0,0-.838.353,11.054,11.054,0,0,1-3.572.794l-.485.044-.485.044h-.926a8.515,8.515,0,0,1-1.852-.22c-.617-.044-1.235-.265-1.808-.353a15.545,15.545,0,0,1-1.72-.661c-.529-.265-1.058-.529-1.632-.838a4.369,4.369,0,0,1-.75-.485l-.353-.265a1.061,1.061,0,0,1-.353-.265l-.353-.265-.176-.176-.088-.088-.044-.044-.044-.044h0l-.661-.661a8.242,8.242,0,0,1-1.191-1.367,5.535,5.535,0,0,1-.485-.75l-.485-.75-.4-.794c-.088-.22-.265-.529-.353-.794a10.077,10.077,0,0,1-.529-1.632,4.652,4.652,0,0,1-.22-.838l-.132-.794a9.728,9.728,0,0,1-.176-1.632,10.09,10.09,0,0,1,.044-1.632c.088-.529.132-1.058.265-1.543.044-.265.132-.485.176-.75l.044-.353.132-.353a14.29,14.29,0,0,1,2.866-4.851c.353-.353.617-.661.926-.926a4.807,4.807,0,0,1,.97-.794,11.562,11.562,0,0,1,1.9-1.235,13.4,13.4,0,0,1,3.4-1.235,8.214,8.214,0,0,1,2.293-.265,2.815,2.815,0,0,1,.617,0h.22a2.2,2.2,0,0,0,0-4.41h-.132a.64.64,0,0,1-.265.044,5.984,5.984,0,0,0-.794.044,15.135,15.135,0,0,0-3.043.529A17.36,17.36,0,0,0,21.5,13.725,15.691,15.691,0,0,0,19.116,15.4a8.5,8.5,0,0,0-1.1,1.058l-.265.265c-.088.088-.22.176-.265.309a7.884,7.884,0,0,0-.573.617A17.905,17.905,0,0,0,13.6,23.956l-.132.441-.088.485c-.044.309-.132.617-.176.926a14.377,14.377,0,0,0-.22,1.984,14.911,14.911,0,0,0,.044,1.984,17.072,17.072,0,0,0,.265,2.029c.044.309.132.661.176,1.014.088.353.22.661.309,1.014a12.663,12.663,0,0,0,.75,1.94,9.332,9.332,0,0,0,.485.926c.176.353.353.617.529.926.22.309.4.617.617.882s.4.573.661.838a9.913,9.913,0,0,0,1.455,1.543l.75.706.044.044h0l.044.044.044.044h.088l.22.176.441.309c.176.088.265.22.441.309l.485.265c.353.176.617.4.926.529a15.387,15.387,0,0,0,1.94.882,18.113,18.113,0,0,0,2.029.661,15.633,15.633,0,0,0,2.073.353,16.3,16.3,0,0,0,2.073.088c.353,0,.706-.044,1.058-.044l.529-.044.485-.044a16.628,16.628,0,0,0,3.925-1.058c.353-.132.617-.265.926-.4a8.745,8.745,0,0,0,.882-.485,15.056,15.056,0,0,0,1.632-1.1c.22-.176.441-.4.706-.573l.353-.265.088-.088.044-.044h0V41.2l.044-.044.176-.176.661-.661.353-.353.309-.353a15.809,15.809,0,0,0,1.1-1.455c.176-.265.309-.485.485-.75.132-.309.265-.529.4-.794a15.887,15.887,0,0,0,.926-11.774Z\",\n          transform: \"translate(-12.975 -11.3)\",\n          fill: \"#888\" })));\n\n\n\n    } }]);return LoaderSvg;}(react__WEBPACK_IMPORTED_MODULE_5__[\"Component\"]);\n\n//# sourceURL=webpack:///./src/components/svg/LoaderSvg.jsx?");

/***/ }),

/***/ 23:
/*!*******************************************************!*\
  !*** multi ./src/components/entrypoints/settings.jsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! /Users/adam/git/coa/Trauma-Accessible-Login/src/components/entrypoints/settings.jsx */\"./src/components/entrypoints/settings.jsx\");\n\n\n//# sourceURL=webpack:///multi_./src/components/entrypoints/settings.jsx?");

/***/ })

}]);