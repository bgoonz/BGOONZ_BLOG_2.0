/* eslint-disable no-undef */
window.onGatsbyPreRouteUpdate = function () {
    window.removeMainNavigationHandlers();
    window.removeDocsNavigationHandlers();
    window.removePageNavLinks();
};
