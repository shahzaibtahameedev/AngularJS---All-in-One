app.component("detailComp",{
    templateUrl : "components/detail/detail.html",
    controller : function($scope, $rootScope, dataService){
        dataService.setData($scope.status);
    }
});