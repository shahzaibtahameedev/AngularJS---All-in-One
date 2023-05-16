app.component("login",{
    templateUrl  : "components/login/login.html",
    controller: function($scope, $http){
        //this.myname = "Shahzaib";
        $scope.username = "Shahzaib";
        $scope.password = "Tahamee";
        
        // $http({
        //     method: 'GET',
        //     url: 'https://dummyjson.com/products'
        // }).then(function successCallback(response) {
        //     $scope.dataFromApiNew = response.data.total;
        //     console.log(response.total);
        // }, function errorCallback(response) {
        //     $scope.dataFromApiNew = 'errorCallBack was invoked'
        // });
    }
    
})