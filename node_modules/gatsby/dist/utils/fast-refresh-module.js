"use strict";

exports.__esModule = true;
exports.clearCompileError = clearCompileError;
exports.clearRuntimeErrors = clearRuntimeErrors;
exports.showCompileError = showCompileError;
exports.showRuntimeErrors = showRuntimeErrors;
exports.isWebpackCompileError = isWebpackCompileError;
exports.handleRuntimeError = handleRuntimeError;
window._gatsbyEvents = window._gatsbyEvents || [];

function clearCompileError() {
  window._gatsbyEvents.push([`FAST_REFRESH`, {
    action: `CLEAR_COMPILE_ERROR`
  }]);
}

function clearRuntimeErrors(dismissOverlay) {
  if (typeof dismissOverlay === `undefined` || dismissOverlay) {
    window._gatsbyEvents.push([`FAST_REFRESH`, {
      action: `CLEAR_RUNTIME_ERRORS`
    }]);
  }
}

function showCompileError(message) {
  if (!message) {
    return;
  }

  window._gatsbyEvents.push([`FAST_REFRESH`, {
    action: `SHOW_COMPILE_ERROR`,
    payload: message
  }]);
}

function showRuntimeErrors(errors) {
  if (!errors || !errors.length) {
    return;
  }

  window._gatsbyEvents.push([`FAST_REFRESH`, {
    action: `SHOW_RUNTIME_ERRORS`,
    payload: errors
  }]);
}

function isWebpackCompileError(error) {
  return /Module [A-z ]+\(from/.test(error.message) || /Cannot find module/.test(error.message);
}

function handleRuntimeError(error) {
  if (error && !isWebpackCompileError(error)) {
    window._gatsbyEvents.push([`FAST_REFRESH`, {
      action: `HANDLE_RUNTIME_ERROR`,
      payload: [error]
    }]);
  }
}
//# sourceMappingURL=fast-refresh-module.js.map