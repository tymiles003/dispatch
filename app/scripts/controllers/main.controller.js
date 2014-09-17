(function(){
  'use strict';

  function mainController($scope, DataService, PageService){
    $scope.data = [];
    $scope.currentPage = 0;
    $scope.pageSize = 10;
    $scope.orderByField = 'last_name';
    $scope.reverseSort = false;

    function init(){
      DataService.getSeedData()
        .then(function(result){
          $scope.data = result;
          $scope.firstSequenceNum = 0;
          $scope.lastSequenceNum = PageService.lastSequenceNum($scope);
          $scope.numNext = PageService.numNext($scope);
          $scope.numPrior = PageService.numPrior($scope);
        });
    }

    $scope.decrementPage = function(){
      PageService.decrementPage($scope);
    };

    $scope.incrementPage = function(){
      PageService.incrementPage($scope);
    };

    $scope.firstSequenceNum = PageService.firstSequenceNum($scope);
    $scope.lastSequenceNum = PageService.lastSequenceNum($scope);
    $scope.numNext = PageService.numNext($scope);
    $scope.numPrior = PageService.numPrior($scope);

    init();
  }

  mainController.$inject = ['$scope', 'DataService', 'PageService'];

  angular
    .module('dispatchApp')
    .controller('MainController', mainController);

})();
