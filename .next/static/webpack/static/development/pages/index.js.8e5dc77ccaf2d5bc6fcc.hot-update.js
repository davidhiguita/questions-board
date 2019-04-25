webpackHotUpdate("static/development/pages/index.js",{

/***/ "./helpers.js":
/*!********************!*\
  !*** ./helpers.js ***!
  \********************/
/*! exports provided: setQuestionState, shuffleArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setQuestionState", function() { return setQuestionState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shuffleArray", function() { return shuffleArray; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__);


var setQuestionState = function setQuestionState(_ref) {
  var questions = _ref.questions,
      id = _ref.id,
      newData = _ref.newData;
  var updatedQuestionIndex = questions.findIndex(function (question) {
    return question.id === id;
  });

  var currentQuestions = _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()([], questions);

  currentQuestions[updatedQuestionIndex] = _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({}, currentQuestions[updatedQuestionIndex], Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, newData));
  return currentQuestions;
};
var shuffleArray = function shuffleArray(array) {
  var newArray = _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()([], array);

  var currentIndex = newArray.length;
  var temp, randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temp = newArray[currentIndex];
    newArray[currentIndex] = newArray[randomIndex];
    newArray[randomIndex] = temp;
  }

  return newArray;
};

/***/ })

})
//# sourceMappingURL=index.js.8e5dc77ccaf2d5bc6fcc.hot-update.js.map