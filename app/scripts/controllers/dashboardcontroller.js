'use strict';

/**
 * @ngdoc function
 * @name crossoverDemoApp.controller:DashboardcontrollerCtrl
 * @description
 * # DashboardcontrollerCtrl
 * Controller of the crossoverDemoApp
 */
angular.module('crossoverDemoApp')
  .controller('DashboardCtrl',['$rootScope', '$scope', '$location', '$localStorage', 'Data', function ($rootScope, $scope, $location, $localStorage, Data) {
    $rootScope.loginSucceeded = true;
    var sessionId = $localStorage.sessionId;
    $scope.salesMandata;
    $scope.lastYearData;
    $scope.topSalesOrders;
    $scope.topSalesMen;

    $scope.sortType     = 'orderNum';
    $scope.sortReverse  = false;

    Data.SalesManData(sessionId).then(
      function (response) {
        if (response.data.resultDescription === "SUCCESS") {
          var dataRes = response.data.data;
          var labels = dataRes.map(function (item) {
            return item[0];
          });
          var data = dataRes.map(function (item) {
            return Number(item[1]);
          });
          $scope.salesMandata = {labels: labels, data: data};
          //console.log($scope.salesMandata);
          //console.log('SalesManData:', response.data.data);
        }
      }
    );
    Data.LastYearData(sessionId).then(
      function (response) {
        if (response.data.resultDescription === "SUCCESS") {
          var dataRes = response.data.data;
          var labels = dataRes.map(function (item) {
            return item[0];
          });
          var data = dataRes.map(function (item) {
            return Number(item[1]);
          });
          $scope.lastYearData = {labels: labels, data: data};
          //console.log($scope.lastYearData);
          //console.log('LastYearData:', response.data.data);
        }
      }
    );
    Data.TopSalesOrders(sessionId).then(
      function (response) {
        if (response.data.resultDescription === "SUCCESS") {
          $scope.topSalesOrders = response.data.data;
          //console.log($scope.topSalesOrders);
          //console.log('TopSalesOrders:', response.data.data);
        }
      }
    );
    Data.TopSalesMen(sessionId).then(
      function (response) {
        if (response.data.resultDescription === "SUCCESS") {
          // $scope.topSalesMen = response.data.data;
          console.log('TopSalesMen:', response.data.data);
        }
      }
    );
  }]);
