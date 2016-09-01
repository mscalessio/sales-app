'use strict';

/**
 * @ngdoc service
 * @name crossoverDemoApp.Data
 * @description
 * # Data
 * Factory in the crossoverDemoApp.
 */
angular.module('crossoverDemoApp')
  .constant('baseURL', 'http://localhost:8080')
  .factory('Data',['$http', 'baseURL', function ($http, baseURL) {

    return {
      SalesManData: function (sessionId) {
        return $http.get(baseURL + '/salesmandata?sessionid=' + sessionId);
      },
      LastYearData: function (sessionId) {
        return $http.get(baseURL + '/lastyeardata?sessionid=' + sessionId);
      },
      TopSalesOrders: function (sessionId) {
        return $http.get(baseURL + '/topsalesorders?sessionid=' + sessionId);
      },
      TopSalesMen: function (sessionId) {
        return $http.get(baseURL + '/topsalesmen?sessionid=' + sessionId);
      }
    };
  }]);
