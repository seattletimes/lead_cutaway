/* global angular */
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
      },
      link: function(scope, element, attr) {
        var clicked = false;
        element.on("click mouseenter", function(e) {
          var target = angular.element(e.target);
          var shown = this.querySelector(".show");
          if (shown) {
            angular.element(shown).removeClass("show");
          }
          if (target.hasClass("spot")) {
            target.addClass("show");
          }
        });
      }
    };
  });
});