app.controller('ShowEditController', ['showService', '$location', '$routeParams', function(showService, $location, $routeParams){

    var vm = this;

    vm.show = {};

    if($routeParams.id){
        showService.getShow($routeParams.id).then(function(show){
            vm.show = show;
        }, function(){
             toastr.error('Loading error !');
        });
    }

    vm.saveShow = function(formShow) {
        showService.saveShow(vm.show).then(function(){
            toastr.success('Save success');
            $location.path('/shows');
        }, function(){
            toastr.error('Save error !');
        })
    }

    vm.addSeason = function(){
        if(!vm.show.seasons) {
            vm.show.seasons = [{number:1}];
        } else {
            vm.show.seasons.push({number: vm.show.seasons.length + 1 });
        }
    };

    vm.removeSeason = function(){
        if(vm.show.seasons && vm.show.seasons.length) {
            vm.show.seasons.pop();
        }
    };

    vm.addEpisode = function(season){
        if(!season.episodes) {
            season.episodes = [{number:1}];
        } else {
            season.episodes.push({number: season.episodes.length + 1 });
        }
    };

    vm.removeEpisode = function(season){
        if(season.episodes && season.episodes.length) {
            season.episodes.pop();
        }
    };

}]);