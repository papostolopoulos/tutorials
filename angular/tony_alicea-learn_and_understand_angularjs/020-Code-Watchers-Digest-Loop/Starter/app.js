var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$filter', '$timeout', function($scope, $filter, $timeout) {

    $scope.handle = "";
    $scope.lowercasehandle = function() {
        return $filter('lowercase')($scope.handle);
    };

    $scope.$watch('handle', function (newValue, oldValue) {
      console.log("Changed!");
      console.log("oldValue is: ", oldValue);
      console.log("newValue is: ", newValue);
    });



    $timeout(function() {

        $scope.handle = "newtwitterhandle";
        console.log("$scope changed");

    }, 3000);

}]);
