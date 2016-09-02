angular.module('arrayApp').controller("arrayController", function($scope, svc) {
  $scope.test =  "bullshit"
  $scope.people = svc.data;
})
