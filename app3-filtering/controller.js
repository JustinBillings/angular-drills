angular.module('app38').controller('controller', function($scope, svc) {
  $scope.test = "willie mcgee";
  $scope.people = svc.data;
})
