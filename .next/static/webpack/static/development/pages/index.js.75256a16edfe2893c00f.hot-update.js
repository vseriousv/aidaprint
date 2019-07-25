webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/SliderMainPage/SliderMainPage.js":
/*!*****************************************************!*\
  !*** ./components/SliderMainPage/SliderMainPage.js ***!
  \*****************************************************/
/*! exports provided: mpslider, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mpslider", function() { return mpslider; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.esm.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
/* harmony import */ var _SliderMainPage_less__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./SliderMainPage.less */ "./components/SliderMainPage/SliderMainPage.less");
/* harmony import */ var _SliderMainPage_less__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_SliderMainPage_less__WEBPACK_IMPORTED_MODULE_11__);






var _jsxFileName = "/home/master/projects/aidaprint/components/SliderMainPage/SliderMainPage.js";

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\nquery mpslides{\n  mpslides{\n    id\n    name\n    image\n    firstHeader\n    secondHeader\n    button\n    url\n  }\n}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}







var mpslider = graphql_tag__WEBPACK_IMPORTED_MODULE_8___default()(_templateObject());

var SliderMainPage =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(SliderMainPage, _Component);

  function SliderMainPage() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SliderMainPage);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(SliderMainPage).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SliderMainPage, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_7__["Query"], {
        query: mpslider,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, function (_ref) {
        var loading = _ref.loading,
            error = _ref.error,
            mpslides = _ref.data.mpslides;
        if (error) return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(ErrorMessage, {
          message: "Error loading posts.",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          },
          __self: this
        });
        if (loading) return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          },
          __self: this
        }, "Loading");
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          className: "container-fluid sliderHomePageComponent",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Carousel"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          },
          __self: this
        }, mpslides.map(function (slide, index) {
          return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Carousel"].Item, {
            key: index,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 35
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
            className: "container-fluid",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 36
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Row"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 37
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
            className: "col-md-6 col-12 text-md-right text-center",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 38
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
            className: "img-slider img-fluid",
            src: "/static/images/sliders/" + slide.image + ".png",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 39
            },
            __self: this
          })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
            className: "col-md-6 col-12 my-auto",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 41
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h3", {
            className: "firstHeaderSlider",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 42
            },
            __self: this
          }, slide.firstHeader), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h3", {
            className: "secondHeaderSlider",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 43
            },
            __self: this
          }, slide.secondHeader), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
            prefetch: true,
            href: slide.url,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 44
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 45
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
            className: "BTNHeadSlide",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 46
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", {
            className: "text-uppercase",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 47
            },
            __self: this
          }, slide.button), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
            className: "BTNBGRSLide",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 48
            },
            __self: this
          }))))))));
        })));
      });
    }
  }]);

  return SliderMainPage;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (SliderMainPage);

/***/ })

})
//# sourceMappingURL=index.js.75256a16edfe2893c00f.hot-update.js.map