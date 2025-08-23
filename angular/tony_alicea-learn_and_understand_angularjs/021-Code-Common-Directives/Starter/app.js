var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$filter', function($scope, $filter) {

    $scope.handle = '';

    $scope.lowercasehandle = function() {
        return $filter('lowercase')($scope.handle);
    };

    $scope.characters = 5;

    $scope.rules = [
      {rulename: "Must be five characters"},
      {rulename: "Must not be used elsewhere"},
      {rulename: "Must be cool"}
    ];

    $scope.alertClick = function () {
      alert('I got clicked!');
    }

    $scope.name = "Paraskevas Apostolopoulos"

}]);
