webpackHotUpdate_N_E("pages/meetups",{

/***/ "./pages/meetups/index.js":
/*!********************************!*\
  !*** ./pages/meetups/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/meetups/MeetupList */ "./components/meetups/MeetupList.js");



var _jsxFileName = "C:\\Users\\alarovoi\\Desktop\\projects\\udemy-react-course\\next-js-bigger\\pages\\meetups\\index.js",
    _this = undefined,
    _s = $RefreshSig$();



var DUMMY_MEETUPS = [{
  id: 'm1',
  title: 'First meetup',
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
  address: 'Some addres, 12312 Some City',
  description: 'This iS the first meetup'
}, {
  id: 'm2',
  title: 'Second meetup',
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
  address: 'Some addres, 12dasda312 Some City',
  description: 'This iS the second meetup'
}, {
  id: 'm3',
  title: 'Third meetup',
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
  address: 'Some addres, 12sdasdxdsasd312312 Some City',
  description: 'This iS the third meetup'
}];

var Meetups = function Meetups() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      loadedMeetups = _useState[0],
      setLoadedMeetups = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    // send request
    setLoadedMeetups(DUMMY_MEETUPS);
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_2__["default"], {
      meetups: loadedMeetups
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }, _this)
  }, void 0, false);
};

_s(Meetups, "Gr4rtGzgY21lfCADP3VK89Fqrqs=");

_c = Meetups;
/* harmony default export */ __webpack_exports__["default"] = (Meetups);

var _c;

$RefreshReg$(_c, "Meetups");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbWVldHVwcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJEVU1NWV9NRUVUVVBTIiwiaWQiLCJ0aXRsZSIsImltYWdlIiwiYWRkcmVzcyIsImRlc2NyaXB0aW9uIiwiTWVldHVwcyIsInVzZVN0YXRlIiwibG9hZGVkTWVldHVwcyIsInNldExvYWRlZE1lZXR1cHMiLCJ1c2VFZmZlY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLElBQU1BLGFBQWEsR0FBRyxDQUNsQjtBQUNJQyxJQUFFLEVBQUUsSUFEUjtBQUVJQyxPQUFLLEVBQUUsY0FGWDtBQUdJQyxPQUFLLEVBQUUsd0hBSFg7QUFJSUMsU0FBTyxFQUFFLDhCQUpiO0FBS0lDLGFBQVcsRUFBRTtBQUxqQixDQURrQixFQVFsQjtBQUNJSixJQUFFLEVBQUUsSUFEUjtBQUVJQyxPQUFLLEVBQUUsZUFGWDtBQUdJQyxPQUFLLEVBQUUsd0hBSFg7QUFJSUMsU0FBTyxFQUFFLG1DQUpiO0FBS0lDLGFBQVcsRUFBRTtBQUxqQixDQVJrQixFQWVsQjtBQUNJSixJQUFFLEVBQUUsSUFEUjtBQUVJQyxPQUFLLEVBQUUsY0FGWDtBQUdJQyxPQUFLLEVBQUUsd0hBSFg7QUFJSUMsU0FBTyxFQUFFLDRDQUpiO0FBS0lDLGFBQVcsRUFBRTtBQUxqQixDQWZrQixDQUF0Qjs7QUF5QkEsSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUFBOztBQUFBLGtCQUN3QkMsc0RBQVEsRUFEaEM7QUFBQSxNQUNYQyxhQURXO0FBQUEsTUFDSUMsZ0JBREo7O0FBR2xCQyx5REFBUyxDQUFDLFlBQU07QUFDWjtBQUNBRCxvQkFBZ0IsQ0FBQ1QsYUFBRCxDQUFoQjtBQUNILEdBSFEsRUFHTixFQUhNLENBQVQ7QUFLQSxzQkFDSTtBQUFBLDJCQUNJLHFFQUFDLHNFQUFEO0FBQVksYUFBTyxFQUFFUTtBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosbUJBREo7QUFLSCxDQWJEOztHQUFNRixPOztLQUFBQSxPO0FBZVNBLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL21lZXR1cHMuYzRiYmFkYzJlMzExZjRmYTQ3NGMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IE1lZXR1cExpc3QgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbWVldHVwcy9NZWV0dXBMaXN0XCI7XHJcblxyXG5jb25zdCBEVU1NWV9NRUVUVVBTID0gW1xyXG4gICAge1xyXG4gICAgICAgIGlkOiAnbTEnLFxyXG4gICAgICAgIHRpdGxlOiAnRmlyc3QgbWVldHVwJyxcclxuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvdGh1bWIvZC9kMy9TdGFkdGJpbGRfTSVDMyVCQ25jaGVuLmpwZy8xMjgwcHgtU3RhZHRiaWxkX00lQzMlQkNuY2hlbi5qcGcnLFxyXG4gICAgICAgIGFkZHJlc3M6ICdTb21lIGFkZHJlcywgMTIzMTIgU29tZSBDaXR5JyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ1RoaXMgaVMgdGhlIGZpcnN0IG1lZXR1cCdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6ICdtMicsXHJcbiAgICAgICAgdGl0bGU6ICdTZWNvbmQgbWVldHVwJyxcclxuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvdGh1bWIvZC9kMy9TdGFkdGJpbGRfTSVDMyVCQ25jaGVuLmpwZy8xMjgwcHgtU3RhZHRiaWxkX00lQzMlQkNuY2hlbi5qcGcnLFxyXG4gICAgICAgIGFkZHJlc3M6ICdTb21lIGFkZHJlcywgMTJkYXNkYTMxMiBTb21lIENpdHknLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnVGhpcyBpUyB0aGUgc2Vjb25kIG1lZXR1cCdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6ICdtMycsXHJcbiAgICAgICAgdGl0bGU6ICdUaGlyZCBtZWV0dXAnLFxyXG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy90aHVtYi9kL2QzL1N0YWR0YmlsZF9NJUMzJUJDbmNoZW4uanBnLzEyODBweC1TdGFkdGJpbGRfTSVDMyVCQ25jaGVuLmpwZycsXHJcbiAgICAgICAgYWRkcmVzczogJ1NvbWUgYWRkcmVzLCAxMnNkYXNkeGRzYXNkMzEyMzEyIFNvbWUgQ2l0eScsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdUaGlzIGlTIHRoZSB0aGlyZCBtZWV0dXAnXHJcbiAgICB9LFxyXG5cclxuXVxyXG5cclxuY29uc3QgTWVldHVwcyA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtsb2FkZWRNZWV0dXBzLCBzZXRMb2FkZWRNZWV0dXBzXSA9IHVzZVN0YXRlKClcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIC8vIHNlbmQgcmVxdWVzdFxyXG4gICAgICAgIHNldExvYWRlZE1lZXR1cHMoRFVNTVlfTUVFVFVQUylcclxuICAgIH0sIFtdKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPE1lZXR1cExpc3QgbWVldHVwcz17bG9hZGVkTWVldHVwc30gLz5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZWV0dXBzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9