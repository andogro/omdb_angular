app.config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/results.html',
      controller: 'mainMovieController'
    })
    .when('/:movies', {
      templateUrl: 'views/show.html',
      controller: 'singleMovieController'
    })
    .otherwise('/');
});