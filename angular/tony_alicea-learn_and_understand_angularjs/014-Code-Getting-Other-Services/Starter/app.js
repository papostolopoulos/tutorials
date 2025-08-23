var myApp = angular.module('myApp', ["ngMessages", ""]);

myApp.controller('mainController', function($scope, $log, $filter) {
    console.log($log);
    $log.log("This is the log method of the $log object");
    $log.error("This is the error of the $log object");
    $log.debug("This is the debug of the log object");
    $log.info("This is the info of the log object");
    $log.warn("This is the warn of the log object");

    $scope.name = "Paraskevas";
    let name = $scope.name;
    $scope.uppercasedName = $filter('uppercase')($scope.name);
    let uppercasedName = $scope.uppercasedName;


    $log.log(name);
    $log.log(uppercasedName);
});
