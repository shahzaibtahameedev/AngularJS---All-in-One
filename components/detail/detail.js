// app.component("detailComp",{
//     templateUrl : "components/detail/detail.html",
//     controller : function($scope, $rootScope, $sessionStorage, dataService){
//         var ctrl = this;
//         sessionStorage.status = ctrl.status;
//         console.log(ctrl.status);
//         this.$onInit = function() {
//             ctrl.randomString123 = 'MyName is Shahzaib';
//             dataService.setData(ctrl.status);
//             console.log(ctrl.status);
//             console.log("Checking....");
//         }
//     },
//     controllerAs: 'ctrl'
// });
app.component("detail", {
    templateUrl: "components/detail/detail.html",
    controller: function($sessionStorage, dataService){
        console.log("This is details controller");
        var ctrl = this;
        $sessionStorage.status = ctrl.status;
        ctrl.$onInit = function() {
            //ctrl.randomValue = dataService.getData();
            console.log("Details OnInit");
            console.log(dataService.getCount());
            dataService.setData(ctrl.status);
            // ctrl.talha = "Random String";
            // dataService.setData(ctrl.status);
            $sessionStorage.valueToShare = 'Xyz-Part1';
            //ctrl.randomValue = dataService.getData();
        }
    },
    controllerAs: 'ctrl'
});

