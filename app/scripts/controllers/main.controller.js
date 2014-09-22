(function(){
  'use strict';

  function mainController($scope, DataService, PageService, FormService, FilterService){
    $scope.data = [];
    $scope.resultSet = [];
    $scope.currentPage = 0;
    $scope.pageSize = 10;
    $scope.orderByField = 'lastName';
    $scope.reverseSort = false;

    function init(){
      DataService.getSeedData()
      .then(function(result){
        $scope.data = result;
        $scope.resultSet = result;
        $scope.firstSequenceNum = 0;
        $scope.lastSequenceNum = PageService.lastSequenceNum($scope);
        $scope.numNext = PageService.numNext($scope);
        $scope.numPrior = PageService.numPrior($scope);
      });
      FormService.reset($scope);
    };

    $scope.test = function(){
      console.log($scope.userForm.lastName);
    };

    $scope.reset = function(){
      FormService.reset($scope);
    };

    $scope.save = function(){
      console.log('save called');
      FormService.save($scope);
    };

    $scope.edit = function(user){
      FormService.edit(user, $scope);
    };

    $scope.update = function(){
      FormService.update($scope);
    };

    $scope.isUnchanged = function(user){
      return FormService.isUnchanged(user, $scope);
    };

    $scope.isReadMode = function(){
      return $scope.mode === 'read';
    };

    $scope.filter = function(){
      FilterService.filter($scope);
    };

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

  mainController.$inject = ['$scope', 'DataService', 'PageService', 'FormService', 'FilterService'];

  angular
  .module('dispatchApp')
  .controller('MainController', mainController);

})();
