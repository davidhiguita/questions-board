webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/summary/index.js":
/*!*************************************!*\
  !*** ./components/summary/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ "./components/summary/styles.js");
var _jsxFileName = "/Users/davidhiguita/Documents/dev/my-projects/questions-board/components/summary/index.js";




var SummaryItem = function SummaryItem(_ref) {
  var question = _ref.question;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_2__["default"].__hash) + " " + "panel-block is-active",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_2__["default"].__hash) + " " + "panel-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    "aria-hidden": "true",
    className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_2__["default"].__hash) + " " + "fa fa-book",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  })), "bulma", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: _styles__WEBPACK_IMPORTED_MODULE_2__["default"].__hash,
    __self: this
  }, _styles__WEBPACK_IMPORTED_MODULE_2__["default"]));
};

var Summary = function Summary(_ref2) {
  var questions = _ref2.questions;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
    className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_2__["default"].__hash) + " " + "panel summary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_2__["default"].__hash) + " " + "panel-heading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Preguntas resueltas"), questions.map(function (question) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SummaryItem, {
      key: "summary-item-".concat(question.id),
      question: question,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    });
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: _styles__WEBPACK_IMPORTED_MODULE_2__["default"].__hash,
    __self: this
  }, _styles__WEBPACK_IMPORTED_MODULE_2__["default"]));
};

/* harmony default export */ __webpack_exports__["default"] = (Summary);

/***/ })

})
//# sourceMappingURL=index.js.d6298cbccc9da7211a90.hot-update.js.map