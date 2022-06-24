"use strict";
(() => {
var exports = {};
exports.id = 453;
exports.ids = [453];
exports.modules = {

/***/ 117:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((req, res) => {
  // Open Chrome DevTools to step through the debugger!
  // debugger;
  res.status(200).json({
    name: 'Hello, world!'
  });
});

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(117));
module.exports = __webpack_exports__;

})();