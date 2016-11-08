app.service('showService', ['$q', '$http', function($q, $http){

    var _shows = undefined;

    var getShows = function(){

        var deferred = $q.defer();

        if(_shows) {
            deferred.resolve(_shows);
        } else {
            $http.get('/api/show.js').then(function(data){

                _shows = data.data.entities;
                deferred.resolve(_shows);

            }, function(err){
                deferred.reject(err);
            })
        }

        return deferred.promise;

    }, deleteShow = function(id){
     var deferred = $q.defer();

     getShows().then(function(shows){

         var i = shows.length;
         while(i--){
             if(shows[i].id == id){
                 shows.splice(i, 1);
                 break;
             }
         }
         deferred.resolve();
     }, function(err){
        deferred.reject(err);
    });

     return deferred.promise;
    }, saveShow = function(show){
        var deferred = $q.defer();

        getShows().then(function(shows){

            if(show.id) {

                var i = shows.length, idx=0;
                while(i--){
                    if(shows[i].id == show.id){
                        idx = i;
                        break;
                    }    
                }
                shows.splice(idx, 1, show);

            } else {
                var i = shows.length, id=0;
                while(i--){
                    id = Math.max(id, shows[i].id);
                }
                show.id = id+1;
                shows.push(show);
            }


            deferred.resolve(show);
        }, function(err){
            deferred.reject(err);
        })


        return deferred.promise;
    }, getShow = function(id){
    
        var deferred = $q.defer();


        getShows().then(function(shows){

            var i = shows.length, show;
            while(i--){
                if(shows[i].id == id){
                    show=shows[i];
                    break;
                }    
            }

            if(show){
                deferred.resolve(show);
            } else {
                deferred.reject();    
            }

        }, function(err){
            deferred.reject(err);
        });

        return deferred.promise;
    };

    return {
        getShows :getShows,
        deleteShow:deleteShow,
        saveShow:saveShow,
        getShow:getShow
    }


}]);