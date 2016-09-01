'use strict';

describe('Controller: DashboardcontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('crossoverDemoApp'));

  var DashboardcontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DashboardcontrollerCtrl = $controller('DashboardcontrollerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  
});
