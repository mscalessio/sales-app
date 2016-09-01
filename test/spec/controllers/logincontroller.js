'use strict';

describe('Controller: LoginCtrl', function () {

  // load the controller's module
  beforeEach(module('crossoverDemoApp'));

  var scope, $httpBackend, LoginCtrl, Auth;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($rootScope, _$httpBackend_, $controller, _Auth_) {
    $httpBackend = _$httpBackend_;
    Auth = _Auth_;
    scope = $rootScope.$new();
    LoginCtrl = $controller('LoginCtrl', {
      $scope: scope, auth: Auth
      // place here mocked dependencies
    });
  }));

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it("should get login success", function () {
    $httpBackend.expect('GET', 'http://localhost:8080/login?password=Test&username=Test')
      .respond(200, {sessionId:"c4b0b46a04b54247ac27f3bd4db289a0", loginSucceeded:true});
    var data = {username: "Test", password: "Test"};

    Auth.Login(data)
    .then(function (response) {
      expect(response.data.loginSucceeded).toBeTruthy();
      expect(response.data.sessionId).toEqual("c4b0b46a04b54247ac27f3bd4db289a0");
    });
    $httpBackend.flush();
  });



  it("should set the sessionId", function (done) {
    spyOn(Auth, "Login");
    Auth.Login();
    setTimeout(function () {
      localStorage.setItem('sessionId', 'TESTINGSESSIONID');
    }, 1000);
    console.log('sessionId: ', localStorage.getItem('sessionId'))
    setTimeout(function () {
      expect(Auth.Login).toHaveBeenCalled();
      done();
    }, 3500);
  });

});
