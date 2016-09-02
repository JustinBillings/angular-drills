angular.module('apiApp').controller('controller', function($scope, planetService) {
  $scope.test = "direcTV chick";
  $scope.retrievePlanets = function() {

    //2 invoke //5 get promise back
    var prms = planetService.getPlanets();

    //6
    prms.then(function(planets) {
      $scope.planets = planets;
    })
    //7 wait for data to come back
  }

  //1
  $scope.retrievePlanets();
})
