define([
  "application",
  "text!_hotspot-map.html"
], function(app, template) {
  app.directive("hotspotMap", function() {
    return {
      restrict: "E",
      template: template,
      transclude: true,
      scope: {
        data: "=",
        layer: "=",
        src: "@"
      }
    }
  });
});