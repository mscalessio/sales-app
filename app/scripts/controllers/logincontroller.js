'use strict';

/**
* @ngdoc function
* @name crossoverDemoApp.controller:LogincontrollerCtrl
* @description
* # LogincontrollerCtrl
* Controller of the crossoverDemoApp
*/
angular.module('crossoverDemoApp')
.controller('LoginCtrl',['$rootScope', '$scope', '$location', '$localStorage', 'Auth', function ($rootScope, $scope, $location, $localStorage, Auth) {

  Auth.Logout();
  $rootScope.loginSucceeded = false;
  //$scope.currentUser = {};

  $scope.login = function () {
    var formData = {
      username: $scope.username,
      password: $scope.password
    };

    Auth.Login(formData).then(function (response) {
      if (response.data.loginSucceeded === true && response.data.sessionId !== null) {
        //$scope.currentUser = {username: $scope.username, sessionId: response.data.sessionId};
        //$localStorage.currentUser = $scope.currentUser;
        $localStorage.sessionId = response.data.sessionId;
        $rootScope.loginSucceeded = true;
        window.location = '/';
      } else {
        $scope.error = 'Invalid credentials';
      }
    }, function (response) {
      $scope.error = 'Connection error';
      console.log(response);
    });
  };

}]);
