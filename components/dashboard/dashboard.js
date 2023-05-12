app.component("dashboard",{
    templateUrl: "/components/dashboard/dashboard.html",
    controller: async function($scope, $http){
        $scope.dataFromApi = 'Data Not from Api';
        
        await $http({
                    method: 'GET',
                    url: 'https://dummyjson.com/products'
                }).then(function successCallback(response) {
                    $scope.dataFromApi = response.total;
                    console.log(response.total);
                }, function errorCallback(response) {
                    $scope.dataFromApi = 'errorCallBack was invoked'
                });
        }

        
})