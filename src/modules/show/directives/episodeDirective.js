app.directive('episode', function(){

    return {
        templateUrl:'modules/show/directives/episode-directive.html',
        restrict:'A',
        replace: true,
        scope:{
            episode:'='
        },
        link: function(scope, el, attrs){
            scope.toogleView = function(){
                scope.episode.view = !scope.episode.view;
            }
        }
    };

});