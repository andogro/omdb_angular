    app.controller('mainMovieController', function($scope, $http){
    
     $scope.search = function() {    
      $http.get("http://www.omdbapi.com/?s="+$scope.movieSearch)
       .then(function (data) {
       $scope.results = data.data.Search;
       var results2 = [];
       for (i=0; i<$scope.results; i++) {
      console.log($scope.results[i]);
       }

      })
     }
    });

