app.component("detail", {
    templateUrl: "components/detail/detail.html",
    controller: function($scope, $sessionStorage, dataService){
        console.log("This is details controller");
        var ctrl = this;

        ctrl.$onInit = function() {
            console.log("This runs everytime when controller is initialized");
        }        
        
        $scope.$watchGroup(['ctrl.status', 'ctrl.date'], function(newValues, oldValues) {
            if (newValues[0] !== oldValues[0]) { 
              //if we dont use this check we encounter : [$rootScope:infdig] error caused by an infinite digest loop.
              $sessionStorage.status = newValues[0];
            }
            if (newValues[1] !== oldValues[1]) {
              $sessionStorage.date = newValues[1];
            }
          });

    },
    controllerAs: 'ctrl'
});

