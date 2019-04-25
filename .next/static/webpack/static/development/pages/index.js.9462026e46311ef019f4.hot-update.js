webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/questions-grid/index.js":
/*!********************************************!*\
  !*** ./components/questions-grid/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _question__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../question */ "./components/question/index.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../api */ "./api.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./styles */ "./components/questions-grid/styles.js");







var _jsxFileName = "/Users/davidhiguita/Documents/dev/my-projects/questions-board/components/questions-grid/index.js";






var QuestionsGrid =
/*#__PURE__*/
function (_React$PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(QuestionsGrid, _React$PureComponent);

  function QuestionsGrid() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, QuestionsGrid);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(QuestionsGrid)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "resetQuestions", function () {
      var _resetQuestions = Object(_api__WEBPACK_IMPORTED_MODULE_10__["resetQuestions"])(),
          error = _resetQuestions.error; // debugger;


      if (!error) {
        var updateInitialQuestions = _this.props.updateInitialQuestions;
        Object(_api__WEBPACK_IMPORTED_MODULE_10__["getAllQuestions"])(updateInitialQuestions);
      }
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(QuestionsGrid, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var updateInitialQuestions = this.props.updateInitialQuestions;
      Object(_api__WEBPACK_IMPORTED_MODULE_10__["getAllQuestions"])(updateInitialQuestions);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          questions = _this$props.questions,
          setModalVisibility = _this$props.setModalVisibility;
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_11__["default"].__hash) + " " + "questions-grid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, questions.map(function (question) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_question__WEBPACK_IMPORTED_MODULE_9__["default"], {
          key: "question-".concat(question.id),
          question: question,
          setModalVisibility: setModalVisibility,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          },
          __self: this
        });
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        onClick: this.resetQuestions,
        className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_11__["default"].__hash) + " " + "reset-button",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, "Reiniciar"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: _styles__WEBPACK_IMPORTED_MODULE_11__["default"].__hash,
        __self: this
      }, _styles__WEBPACK_IMPORTED_MODULE_11__["default"]));
    }
  }]);

  return QuestionsGrid;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.PureComponent);

/* harmony default export */ __webpack_exports__["default"] = (QuestionsGrid);

/***/ })

})
//# sourceMappingURL=index.js.9462026e46311ef019f4.hot-update.js.map