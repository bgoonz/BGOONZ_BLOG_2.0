window.onGatsbyRouteUpdate = function () {
  window.addMainNavigationHandlers();
  window.addAnnouncementHandlers();
  window.addVideoEmbedsHandlers();
  window.addDocsNavigationHandlers();
  window.addPageNavLinks();
};
