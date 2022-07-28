/* A function that is called when the route changes. */
window.onGatsbyRouteUpdate = function() {
    window.addMainNavigationHandlers();
    window.addDocsNavigationHandlers();
    window.addPageNavLinks();
};