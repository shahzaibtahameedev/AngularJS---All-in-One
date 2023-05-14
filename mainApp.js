var app = angular.module("myApp", ['ngComponentRouter']).value('$routerRootComponent', 'app');
app.controller("myCtrl", function($scope, $http, $log){
    $scope.myname = 'Shahzaib-Tahamee';
    $scope.status = 'randomValue';
    $scope.rowLimit = 2;
    $scope.sortColumn = 'id';
    $http({
        method: 'GET',
        url: 'https://dummyjson.com/products'
    }).then(function successCallback(response) {
        $scope.dataFromApi = response.data.products;
        $log.info(response);
        console.log(response.total);
    }, function errorCallback(response) {
        $scope.dataFromApi = 'errorCallBack was invoked'
    });
})

