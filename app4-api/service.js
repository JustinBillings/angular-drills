angular.module('apiApp').service('planetService', function($http) {

this.getPlanets = function() {
  //3
    var promise = $http({
    method: 'GET',
    url: "http://swapi.co/api/planets/"
  }).then(function(response){
      //8 we got data back
      if(response.status === 200){

    return response.data;
  }
      else {
        return "error getting data"
      }
  })
  //4
  return promise;
}
});
