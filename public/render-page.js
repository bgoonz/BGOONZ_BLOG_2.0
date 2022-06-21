(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("lib", [], factory);
	else if(typeof exports === 'object')
		exports["lib"] = factory();
	else
		root["lib"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./.cache/develop-static-entry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./.cache/develop-static-entry.js":
/*!****************************************!*\
  !*** ./.cache/develop-static-entry.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/gatsby/dist/utils/babel-loader.js):\nError [ERR_MODULE_NOT_FOUND]: Cannot find package 'next' imported from /workspace/BGOONZ_BLOG_2.0/babel-virtual-resolve-base.js\n    at new NodeError (/workspace/BGOONZ_BLOG_2.0/node_modules/@babel/core/lib/vendor/import-meta-resolve.js:2669:5)\n    at packageResolve (/workspace/BGOONZ_BLOG_2.0/node_modules/@babel/core/lib/vendor/import-meta-resolve.js:3325:9)\n    at moduleResolve (/workspace/BGOONZ_BLOG_2.0/node_modules/@babel/core/lib/vendor/import-meta-resolve.js:3359:18)\n    at defaultResolve (/workspace/BGOONZ_BLOG_2.0/node_modules/@babel/core/lib/vendor/import-meta-resolve.js:3398:13)\n    at /workspace/BGOONZ_BLOG_2.0/node_modules/@babel/core/lib/vendor/import-meta-resolve.js:3421:14\n    at Generator.next (<anonymous>)\n    at asyncGeneratorStep (/workspace/BGOONZ_BLOG_2.0/node_modules/@babel/core/lib/vendor/import-meta-resolve.js:63:103)\n    at _next (/workspace/BGOONZ_BLOG_2.0/node_modules/@babel/core/lib/vendor/import-meta-resolve.js:65:194)\n    at /workspace/BGOONZ_BLOG_2.0/node_modules/@babel/core/lib/vendor/import-meta-resolve.js:65:364\n    at new Promise (<anonymous>)\n    at /workspace/BGOONZ_BLOG_2.0/node_modules/@babel/core/lib/vendor/import-meta-resolve.js:65:97\n    at _resolve (/workspace/BGOONZ_BLOG_2.0/node_modules/@babel/core/lib/vendor/import-meta-resolve.js:3428:19)\n    at resolve (/workspace/BGOONZ_BLOG_2.0/node_modules/@babel/core/lib/vendor/import-meta-resolve.js:3411:19)\n    at /workspace/BGOONZ_BLOG_2.0/node_modules/@babel/core/lib/config/files/import-meta-resolve.js:38:38\n    at Generator.next (<anonymous>)\n    at asyncGeneratorStep (/workspace/BGOONZ_BLOG_2.0/node_modules/@babel/core/lib/config/files/import-meta-resolve.js:20:103)");

/***/ })

/******/ });
});
//# sourceMappingURL=render-page.js.map