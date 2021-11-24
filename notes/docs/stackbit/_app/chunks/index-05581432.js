import { V as t } from './index-0a115175.js';
function a(a, { delay: e = 0, duration: o = 400, easing: i = t } = {}) {
    const n = +getComputedStyle(a).opacity;
    return { delay: e, duration: o, easing: i, css: (t) => 'opacity: ' + t * n };
}
export { a as f };
