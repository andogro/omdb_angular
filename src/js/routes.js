app.config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/results.html',
      controller: 'mainMovieController'
    })
    .when('/:id', {
      templateUrl: 'views/show.html',
      controller: 'mainMovieController'
    })
    .otherwise('/');
});