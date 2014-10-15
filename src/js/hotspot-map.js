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
        element.on("click touchstart", function(e) {
          var target = angular.element(e.target);
          var shown = this.querySelector(".show");
          if (shown) {
            angular.element(shown).removeClass("show");
          }
          document.body.style.minHeight = null;
          if (target.hasClass("spot")) {
            e.preventDefault();
            target.addClass("show");
            //this is a workaround for Pym sizes, and should not be used in standalone pages
            setTimeout(function() {
              var popup = e.target.querySelector(".popup");
              var popupBounds = popup.getBoundingClientRect();
              var bodyBounds = document.body.getBoundingClientRect();
              if (popupBounds.bottom > bodyBounds.height) {
                document.body.style.minHeight = popupBounds.bottom + "px";
              }
            });
          }
        });
      }
    };
  });
});