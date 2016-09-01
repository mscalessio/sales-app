'use strict';

/**
* @ngdoc service
* @name crossoverDemoApp.Auth
* @description
* # Auth
* Factory in the crossoverDemoApp.
*/
angular.module('crossoverDemoApp')
.constant('baseURL', 'http://localhost:8080')
.factory('Auth',['$http', '$localStorage', 'baseURL', function ($http, $localStorage, baseURL) {

  return {
    Login: function (data) {
      return $http.get(baseURL + '/login', {
        params: data
      });
    },
    Logout: function () {
      delete $localStorage.sessionId;
    }
  };


}]);
