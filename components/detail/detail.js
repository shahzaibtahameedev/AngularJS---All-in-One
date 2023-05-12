app.component("detailComp",{
    templateUrl : "components/detail/detail.html",
    controller : function($scope, $rootScope){
        $rootScope.$broadcast('dataPassed', $scope.status);
    }
});