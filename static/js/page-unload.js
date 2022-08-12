/* A function that is called before the route is changed. */
window.onGatsbyPreRouteUpdate = function() {
    window.removeMainNavigationHandlers();
    window.removeDocsNavigationHandlers();
    window.removePageNavLinks();
};