app.component('datatable',{
    templateUrl: "components/datatable/datatable.html",
    controller: function($scope, $sessionStorage){
        var ctrl = this;
        console.log($sessionStorage.dataFromApi);
        ctrl.$onInit = function() {
            $(document).ready(function() {
                var jsonData = $sessionStorage.dataFromApi;
                $('#datatable123').DataTable({
                    data: jsonData,
                    columns: [
                    { data: 'id' },
                    { data: 'title' },
                    { data: 'description'},
                    { data: 'price'}
                    ]
                });
            });
        }   
    },
    controllerAs: 'ctrl'
})

