  app.service('movieService', function ($http) {
        return {
        search: function() {

          return $http.get("http://www.omdbapi.com/?s=")
          }
        }
    }); 






