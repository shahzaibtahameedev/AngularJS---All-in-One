app.component("dashboard", {
    templateUrl: "components/dashboard/dashboard.html",
    controller : function($scope,$sessionStorage, dataService){
        var ctrl = this;
        ctrl.$onInit = function() {
            ctrl.status = $sessionStorage.status;
            ctrl.date = $sessionStorage.date;
        }
    },
    controllerAs: 'ctrl'
})
