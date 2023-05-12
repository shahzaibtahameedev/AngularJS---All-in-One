app.component("dashboard",{
    templateUrl: "/components/dashboard/dashboard.html",
    controller: function($scope, $rootScope){
        $scope.$on('dataPassed', function(event, data) {
            $scope.newData = data;
          });
    }
})