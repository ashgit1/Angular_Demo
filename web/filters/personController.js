var app = angular.module('myApp', []);
app.controller('personCtrl', function($scope) {
    $scope.firstName = "Johnny";
    $scope.lastName = "Daniel";
    $scope.fullName = function() {
        return $scope.firstName + " " + $scope.lastName;
    }
});