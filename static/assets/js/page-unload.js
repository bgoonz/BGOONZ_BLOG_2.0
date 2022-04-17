window.onGatsbyPreRouteUpdate = function () {
  window.removeMainNavigationHandlers();
  window.removeAnnouncementHandlers();
  window.removeVideoEmbedsHandlers();
  window.removeDocsNavigationHandlers();
  window.removePageNavLinks();
};
