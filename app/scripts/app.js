'use strict';

/**
* @ngdoc overview
* @name crossoverDemoApp
* @description
* # crossoverDemoApp
*
* Main module of the application.
*/
var interceptor = ['$q', '$localStorage', '$location', function ($q, $localStorage, $location) {
  return {
    'response': function (result) {
      if (result.data.data === null && result.data.resultDescription === "User is not logged in") {
        $location.url('/login');
      }
      return result;
    }
  };
}];

angular
.module('crossoverDemoApp', [
  'chart.js',
  'ngStorage',
  'ngRoute',
  'angular-loading-bar'
])
.config(['$routeProvider', '$httpProvider', function ($routeProvider, $httpProvider) {
  $httpProvider.interceptors.push(interceptor);
  $routeProvider
  .when('/', {
    templateUrl: 'views/dashboard.html',
    controller: 'DashboardCtrl'
  })
  .when('/login', {
    templateUrl: 'views/login.html',
    controller: 'LoginCtrl'
  })
  .otherwise({
    redirectTo: '/'
  });
}])
.run(['$rootScope', '$http', '$location', '$localStorage', function ($rootScope, $http, $location, $localStorage) {

  // redirect to login page if not logged in and trying to access a restricted page
  $rootScope.$on('$locationChangeStart', function (event, next, current) {
      var publicPages = ['/login'];
      var restrictedPage = publicPages.indexOf($location.path()) === -1;
      if (restrictedPage && !$localStorage.sessionId) {
          $location.path('/login');
      }
  });
}]);
