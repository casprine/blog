webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_common_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/common/index */ "./components/common/index.js");
/* harmony import */ var _components_section_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/section/index */ "./components/section/index.js");
/* harmony import */ var _components_article_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/article/index */ "./components/article/index.js");
/* harmony import */ var _components_navigation_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/navigation/index */ "./components/navigation/index.js");
/* harmony import */ var _data_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../data.json */ "./data.json");
var _data_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data.json */ "./data.json", 1);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }









var Index =
/*#__PURE__*/
function (_Component) {
  _inherits(Index, _Component);

  function Index() {
    _classCallCheck(this, Index);

    return _possibleConstructorReturn(this, _getPrototypeOf(Index).apply(this, arguments));
  }

  _createClass(Index, [{
    key: "render",
    // componentDidMount = () => {
    //   if ("serviceWorker" in navigator) {
    //     window.addEventListener("load", function() {
    //       navigator.serviceWorker.register("../static/sw.js").then(
    //         function(registration) {
    //           // Registration was successful
    //           console.log(
    //             "ServiceWorker registration successful with scope: ",
    //             registration.scope
    //           );
    //         },
    //         function(err) {
    //           // registration failed :(
    //           console.log("ServiceWorker registration failed: ", err);
    //         }
    //       );
    //     });
    //   }
    // };
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "Casprine Assempah")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_common_index__WEBPACK_IMPORTED_MODULE_2__["Layout"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_navigation_index__WEBPACK_IMPORTED_MODULE_5__["Navbar"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_section_index__WEBPACK_IMPORTED_MODULE_3__["SectionHeader"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_section_index__WEBPACK_IMPORTED_MODULE_3__["Tags"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "articles grid-3"
      }, _data_json__WEBPACK_IMPORTED_MODULE_6__.map(function (post, i) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_article_index__WEBPACK_IMPORTED_MODULE_4__["ArticleCard"], _extends({}, post, {
          key: i
        }));
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_navigation_index__WEBPACK_IMPORTED_MODULE_5__["Pagination"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_navigation_index__WEBPACK_IMPORTED_MODULE_5__["Footer"], null)));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Index);
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.5fec5f1f77b42de97968.hot-update.js.map