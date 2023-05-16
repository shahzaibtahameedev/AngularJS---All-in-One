var app = angular.module("myApp", ['ui.router', 'ngStorage']);
app.controller("myCtrl", function($scope, $http, $sessionStorage){
    $scope.myname = 'Shahzaib-Tahamee';
    $scope.status = 'randomValue';
    $scope.rowLimit = 10;
    $scope.sortColumn = 'id';
    $http({
        method: 'GET',
        url: 'https://dummyjson.com/products'
    }).then(function successCallback(response) {
        $scope.dataFromApi = response.data.products;
        $sessionStorage.dataFromApi = response.data.products;
        //$log.info(response);
        // console.log(response.total);
    }, function errorCallback(response) {
        $scope.dataFromApi = 'errorCallBack was invoked'
    });

    $scope.getValue = function(data){
        if(data === 'data1'){
            $scope.start = 0;
            $scope.end = 10;
        } else if(data === 'data2'){
            $scope.start = 10;
            $scope.end = 20;
        } else if(data == 'data3'){
            $scope.start = 20;
            $scope.end = 30;
        }
    };
})
// app.config(function($routeProvider) {
//     $routeProvider
//     .when('/login', {
//       template: '<login-comp></login-comp>',
//     })
//     .when('/dashboard', {
//       template: '<dashboard></dashboard>',
//     })
//     .when('/details', {
//       template: '<detail></detail>',
//     })
//     .otherwise({
//       redirectTo: '/login'
//     });
// })
//'ngRoute'

app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('one', {
        url: "/login",
        template: '<login></login>'
      })
      .state('two', {
        url: "/dashboard",
        template: '<dashboard></dashboard>'
      })
      .state('three', {
        url: "/details",
        template: '<detail></detail>'
      })
      .state('four', {
        url: "/datatable",
        template: '<datatable></datatable>'
      });
      
      $urlRouterProvider.otherwise('/login');
});