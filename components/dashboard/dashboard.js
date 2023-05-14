app.component("dashboard",{
    templateUrl: "/components/dashboard/dashboard.html",
    controller: function($scope, $http, dataService){
        $scope.randomValue = dataService.getData();
    }

        
})