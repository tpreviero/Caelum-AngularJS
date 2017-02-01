angular
.module("alurapic")
.controller("GruposController", ["$scope", "$http", function($scope, $http){
  $http.get("/v1/grupos/").
  then(function(grupos){
    $scope.grupos = grupos.data;
  }, function(erro){
    console.log(erro);
  });
}]);
