'use strict';

describe('Data factory', function() {

  describe("Data", function () {

    beforeEach(module('crossoverDemoApp'));
    var Data;

    beforeEach(inject(function (_Data_) {
      Data = _Data_;
    }));

    it("should be defined", function () {
      expect(Data).toBeDefined();
    });

    it("should be an object", function () {
      expect(typeof Data).toBe('object');
    });

    it("should have a method SalesManData()", function () {
      expect(Data.SalesManData).toBeDefined();
    });

    it("shoul have a method LastYearData()", function () {
      expect(Data.LastYearData).toBeDefined();
    });

    it("shoul have a method TopSalesOrders()", function () {
      expect(Data.TopSalesOrders).toBeDefined();
    });

    it("shoul have a method TopSalesMen()", function () {
      expect(Data.TopSalesMen).toBeDefined();
    });

  });

  describe("Data API", function () {

    var $httpBackend,
        Data,
        baseURL = 'http://localhost:8080';

    beforeEach(module('crossoverDemoApp'));

    beforeEach(inject(function (_$httpBackend_, _Data_) {
      $httpBackend = _$httpBackend_;
      Data = _Data_;
    }));

    afterEach(function () {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });

    describe("Data.SalesManData()", function () {

      it("should call the backend with params", function () {
        var sessionId = 'TESTINGSESSIONID';
        $httpBackend.when('GET', baseURL + '/salesmandata?sessionid=' + sessionId).respond(200,
          {resultDescription:"SUCCESS",data:[]}
        );
        var result;
        Data.SalesManData(sessionId).then(function (response) {
          result = response;
        });
        $httpBackend.flush();
        expect(result).toBeDefined();
      });

    });

    describe("Data.LastYearData()", function () {

      it("should call the backend with params", function () {
        var sessionId = 'TESTINGSESSIONID';
        $httpBackend.when('GET', baseURL + '/lastyeardata?sessionid=' + sessionId).respond(200,
          {"resultDescription":"SUCCESS","data":[]}
        );
        var result;
        Data.LastYearData(sessionId).then(function (response) {
          result = response;
        });
        $httpBackend.flush();
        expect(result).toBeDefined();
      });

    });

    describe("Data.TopSalesOrders()", function () {

      it("should call the backend with params", function () {
        var sessionId = 'TESTINGSESSIONID';
        $httpBackend.when('GET', baseURL + '/topsalesorders?sessionid=' + sessionId).respond(200,
          {"resultDescription":"SUCCESS","data":[]}
        );
        var result;
        Data.TopSalesOrders(sessionId).then(function (response) {
          result = response;
        });
        $httpBackend.flush();
        expect(result).toBeDefined();
      });

    });

    describe("Data.TopSalesMen()", function () {

      it("should call the backend with params", function () {
        var sessionId = 'TESTINGSESSIONID';
        $httpBackend.when('GET', baseURL + '/topsalesmen?sessionid=' + sessionId).respond(200,
          {"resultDescription":"SUCCESS","data":[]}
        );
        var result;
        Data.TopSalesMen(sessionId).then(function (response) {
          result = response;
        });
        $httpBackend.flush();
        expect(result).toBeDefined();
      });

    });

  });

});
