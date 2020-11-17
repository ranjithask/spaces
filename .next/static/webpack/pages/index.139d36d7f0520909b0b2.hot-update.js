webpackHotUpdate_N_E("pages/index",{

/***/ "./components/flight-cards.js":
/*!************************************!*\
  !*** ./components/flight-cards.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "C:\\workspace\\spaces\\components\\flight-cards.js",
    _this = undefined;



var FlightCards = function FlightCards(links, mission_name, launch_year, launch_success, rocket, mission_id) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "grid-item",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "content",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: links.mission_patch_small,
        alt: "mission_name"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        children: mission_name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h6", {
        children: ["Mission Ids: ", mission_id]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h6", {
        children: ["Launch Year: ", launch_year]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h6", {
        children: ["successful Launch: ", launch_success ? 'Yes' : 'No']
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h6", {
        children: ["successful Landing: ", rocket.first_stage.cores[0].land_success ? 'Yes' : 'No']
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 12
  }, _this);
};

_c = FlightCards;
/* harmony default export */ __webpack_exports__["default"] = (FlightCards);

var _c;

$RefreshReg$(_c, "FlightCards");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mbGlnaHQtY2FyZHMuanMiXSwibmFtZXMiOlsiRmxpZ2h0Q2FyZHMiLCJsaW5rcyIsIm1pc3Npb25fbmFtZSIsImxhdW5jaF95ZWFyIiwibGF1bmNoX3N1Y2Nlc3MiLCJyb2NrZXQiLCJtaXNzaW9uX2lkIiwibWlzc2lvbl9wYXRjaF9zbWFsbCIsImZpcnN0X3N0YWdlIiwiY29yZXMiLCJsYW5kX3N1Y2Nlc3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBR0EsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsS0FBRCxFQUFRQyxZQUFSLEVBQXNCQyxXQUF0QixFQUFtQ0MsY0FBbkMsRUFBbURDLE1BQW5ELEVBQTJEQyxVQUEzRCxFQUEwRTtBQUMxRixzQkFBTztBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUEsMkJBQ0g7QUFBSyxlQUFTLEVBQUMsU0FBZjtBQUFBLDhCQUNJO0FBQUssV0FBRyxFQUFFTCxLQUFLLENBQUNNLG1CQUFoQjtBQUFxQyxXQUFHLEVBQUM7QUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBRUk7QUFBQSxrQkFBS0w7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkosZUFHSTtBQUFBLG9DQUFrQkksVUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEosZUFJSTtBQUFBLG9DQUFrQkgsV0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkosZUFLSTtBQUFBLDBDQUF3QkMsY0FBYyxHQUFHLEtBQUgsR0FBVyxJQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFMSixlQU1JO0FBQUEsMkNBQXlCQyxNQUFNLENBQUNHLFdBQVAsQ0FBbUJDLEtBQW5CLENBQXlCLENBQXpCLEVBQTRCQyxZQUE1QixHQUEyQyxLQUEzQyxHQUFtRCxJQUE1RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERztBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVA7QUFVSCxDQVhEOztLQUFNVixXO0FBYVNBLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjEzOWQzNmQ3ZjA1MjA5MDliMGIyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuXHJcbmNvbnN0IEZsaWdodENhcmRzID0gKGxpbmtzLCBtaXNzaW9uX25hbWUsIGxhdW5jaF95ZWFyLCBsYXVuY2hfc3VjY2Vzcywgcm9ja2V0LCBtaXNzaW9uX2lkKSA9PiB7XHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJncmlkLWl0ZW1cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9e2xpbmtzLm1pc3Npb25fcGF0Y2hfc21hbGx9IGFsdD1cIm1pc3Npb25fbmFtZVwiIC8+XHJcbiAgICAgICAgICAgIDxoMj57bWlzc2lvbl9uYW1lfTwvaDI+XHJcbiAgICAgICAgICAgIDxoNj5NaXNzaW9uIElkczoge21pc3Npb25faWR9PC9oNj5cclxuICAgICAgICAgICAgPGg2PkxhdW5jaCBZZWFyOiB7bGF1bmNoX3llYXJ9PC9oNj5cclxuICAgICAgICAgICAgPGg2PnN1Y2Nlc3NmdWwgTGF1bmNoOiB7bGF1bmNoX3N1Y2Nlc3MgPyAnWWVzJyA6ICdObyd9PC9oNj5cclxuICAgICAgICAgICAgPGg2PnN1Y2Nlc3NmdWwgTGFuZGluZzoge3JvY2tldC5maXJzdF9zdGFnZS5jb3Jlc1swXS5sYW5kX3N1Y2Nlc3MgPyAnWWVzJyA6ICdObyd9PC9oNj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGbGlnaHRDYXJkczsiXSwic291cmNlUm9vdCI6IiJ9