"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _netlifyCmsApp = _interopRequireDefault(require("netlify-cms-app"));

var _emitter = _interopRequireDefault(require("gatsby/cache-dir/emitter"));

// set global variables required by Gatsby's components
// https://github.com/gatsbyjs/gatsby/blob/deb41cdfefbefe0c170b5dd7c10a19ba2b338f6e/docs/docs/production-app.md#window-variables
// some Gatsby components require these global variables set here:
// https://github.com/gatsbyjs/gatsby/blob/deb41cdfefbefe0c170b5dd7c10a19ba2b338f6e/packages/gatsby/cache-dir/production-app.js#L28
window.___emitter = _emitter.default;
window.___loader = {
  enqueue: function enqueue() {},
  hovering: function hovering() {}
};
/**
 * Load Netlify CMS automatically if `window.CMS_MANUAL_INIT` is set.
 */
// eslint-disable-next-line no-undef

if (!CMS_MANUAL_INIT) {
  _netlifyCmsApp.default.init();
} else {
  console.log("`CMS_MANUAL_INIT` flag set, skipping automatic initialization.'");
}
/**
 * The stylesheet output from the modules at `modulePath` will be at `cms.css`.
 */


_netlifyCmsApp.default.registerPreviewStyle("cms.css");