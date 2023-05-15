app.component("dashboard", {
    templateUrl: "components/dashboard/dashboard.html",
    controller : function($scope,$sessionStorage, dataService){
        console.log("This is Dashboard Controller");
        // console.log($sessionStorage.valueToShare);
        //console.log($sessionStorage.status);
        //ctrl.checkThisValue = 'This Value to Check';
        //ctrl.randomValue = $sessionStorage.status;
        var ctrl = this;
        ctrl.$onInit = function() {
            console.log(dataService.getCount());
            console.log("This is Dashboard OnInit");
            console.log(dataService.getData());
            ctrl.status = dataService.getData()
            // ctrl.status = $sessionStorage.status;
            // ctrl.checking = "Random String";
        }
    },
    controllerAs: 'ctrl'
})
