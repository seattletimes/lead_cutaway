/* global angular */
require([
  "spots",
  "pym",
  "application",
  "hotspot-map"
], function(spots, pym, app) {

  var child = pym.Child({
    polling: 500
  });

  child.id = "lead-cutaway";

  app.controller("hotspot", ["$scope", function($scope) {
      
      $scope.spots = spots;
      $scope.current = "narrative";

    }]);

  angular.bootstrap(document.body, [app.name]);
  
});
