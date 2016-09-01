'use strict';

describe('Auth factory', function() {

  describe("Auth", function () {
    beforeEach(module('crossoverDemoApp'));
    var Auth;

    beforeEach(inject(function (_Auth_) {
      Auth = _Auth_;
    }));

    it("should be defined", function () {
      expect(Auth).toBeDefined();
    });

    it("should be an object", function () {
      expect(typeof Auth).toBe('object');
    });

    it("should have a method Login()", function () {
      expect(Auth.Login).toBeDefined();
    });

    it("shoul have a method Logout()", function () {
      expect(Auth.Logout).toBeDefined();
    });

  });

  describe("Auth API", function () {

    var $httpBackend,
    Auth,
    baseURL = 'http://localhost:8080';

    beforeEach(module('crossoverDemoApp'));

    beforeEach(inject(function(_$httpBackend_, _Auth_) {
      $httpBackend = _$httpBackend_;
      Auth = _Auth_;
    }));

    afterEach(function () {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });

    describe("Auth.Login()", function () {

      it('should call the backend with params', function() {
        $httpBackend.when('GET', baseURL + '/login?password=Test&username=Test').respond(200,
          {sessionId:"c4b0b46a04b54247ac27f3bd4db289a0", loginSucceeded:true}
        );
        var data = {username: "Test", password: "Test"};
        var result;
        Auth.Login(data).then(function (response) {
          result = response;
        });

        $httpBackend.flush();
        expect(result).toBeDefined();
      });

    });

    describe("Auth.Logout()", function () {

    });

  });

});
