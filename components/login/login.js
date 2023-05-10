app.component("loginComp",{
    templateUrl  : "components/login/login.html",
    controller: function($scope){
        //this.myname = "Shahzaib";
        $scope.username = "Shahzaib";
        $scope.password = "Tahamee";
        var vm = this;
        vm.goToDashboard = function(){
            $scope.number = 3;
            this.$router.navigate(['/dashboard']);
        }
    },
    bindings: {
        '$router': '<'
    }
})