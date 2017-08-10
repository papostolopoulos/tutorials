var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'pages/main.html',
    controller: 'mainController'
  })
  .when('/second', {
    templateUrl: 'pages/second.html',
    controller: 'secondController'
  });
});

myApp.controller('mainController', ['$scope', '$location', '$log', function($scope, $location, $log) {
  $scope.name = "Main";

}]);

myApp.controller('secondController', ['$scope', '$location', '$log', function($scope, $location, $log) {
  $scope.name = "Second"

}]);

//Angular already knows what the hash (#) is in the url extension.
