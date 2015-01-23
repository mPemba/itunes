var app = angular.module('itunes');

app.service('itunesService', function($http, $q){
  //This service is what will do the 'heavy lifting' and get our data from the iTunes API.
  //Also not that we're using a 'service' and not a 'factory' so all your method you want to call in your controller need to be on 'this'.

  //Write a method that accepts an artist's name as the parameter, then makes a 'JSONP' http request to a url that looks like this
  //https://itunes.apple.com/search?term=' + artist + '&callback=JSON_CALLBACK'
  //Note that in the above line, artist is the parameter being passed in. 
  //You can return the http request or you can make your own promise in order to manipulate the data before you resolve it.

    //Code here
this.getSongData = function(artist) {
	return $http({
		method: 'JSONP',
		url: 'https://itunes.apple.com/search?term=' + artist + '&callback=JSON_CALLBACK'
	});
};





});

////////////NOTES
//////////////////////////////////////////////////////////////
 ///.get shortcut

 // this.getArtist = funtion(artist) {
 // 	$http.get('url' + artist + '&cb=JSON_CALLBACK-guy');
 // }
////////////////
    // this.getArtist = function(name) {
    // 	return $http({
    // 		method: 'JSONP',
    // 		url: ''
    // 	});
////// 


         ////////////////////////////////////
         //var defferred = $q.defer();
        // $http({
        // 	method: 'JSONP',
        // 	url: ''
        // }).success(function(data) {
        //    var result = data.result;

        //    console.log(data);  ////////// benefit to handling promise manually is handling data. 

        // 	defferred.resolve(data);
        // }).error(function(error) {
        // 	defferred.reject(error);
        // })
        // return defferred.promise;
        //////////////////////////////////////
        // setTimeout(function() {
        // 	var number = Math.random();
        // 	if (number > .5) {
        // 		defferred.resolve({text: 'success'});
        // 	} else {
        // 		defferred.reject({error: 'nope'});
        // 	}
        // })

    	///return defferred.promise;
    /////}
