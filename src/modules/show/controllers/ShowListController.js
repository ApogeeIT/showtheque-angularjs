app.controller('ShowListController', ['showService', function(showService){

    var vm = this;

    showService.getShows().then(function(shows){
        vm.shows=shows;
    }, function(){
        toastr.error('Error !');
    });

    vm.deleteShow = function(id) {
        if(confirm('Are you sure ?')) {
            showService.deleteShow(id).then(function(){
                toastr.success('Item deleted');
            }, function(err){
                toastr.error('Error !');
            });
        }
    };

}]);