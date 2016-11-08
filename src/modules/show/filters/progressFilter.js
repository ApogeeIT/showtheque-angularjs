app.filter('progress', function(){

    return function(seasons){
        var count= [0, 0];

        if(seasons){
            var i = seasons.length;
            while(i--){
                if(seasons[i].episodes){
                    var j = seasons[i].episodes.length;
                    while(j--){
                        if(seasons[i].episodes[j].view) count[0]++;
                        count[1]++
                    }
                }
            }
        }

        return count[0] + '/' + count[1];
    };

});