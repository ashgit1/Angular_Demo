angular.module('myApp', []).controller('namesCtrl', function($scope) {
    $scope.names = [
        {name:'Ashish', country:'India'},
        {name:'Hege', country:'Sweden'},
        {name:'Kai', country:'Denmark'}
    ];
});
