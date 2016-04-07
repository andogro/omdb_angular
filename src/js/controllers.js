    app.controller('mainMovieController', function($scope, $http){
    
     $scope.search = function() {    
      $http.get("http://www.omdbapi.com/?s="+$scope.movieSearch)
       .then(function (data) {
       $scope.results = data.data.Search;
        console.log($scope.results);
      })
     }

    });

   app.controller('singleMovieController', function($scope, $http, $location) {
   
   var movie  = $location.url().substring(1);
   $http.get("http://www.omdbapi.com/?i="+movie)
   .then(function (data) {
    $scope.results = data.data
   })


  });

