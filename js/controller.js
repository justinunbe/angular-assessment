angular.module("app").controller("mainCtrl", function($scope, mainService){

mainService.shopping().then(function(response) {
  console.log(response);
    $scope.data = response;
});
});
