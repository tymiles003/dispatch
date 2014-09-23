(function(){
  'use strict';

  function mainController($scope, DataService, PageService, FormService, FilterService){
    $scope.data = [];
    $scope.resultSet = [];

    $scope.currentPage = 1;
    $scope.pageSize = 10;
    $scope.sequenceStart = 0;
    $scope.sequenceEnd = 0;
    $scope.nextQty = 0;
    $scope.previousQty = 0;

    $scope.orderByField = 'lastName';
    $scope.reverseSort = false;

    //---------- Initialization ----------//

    function init(){
      DataService.getSeedData()
      .then(function(result){
        result.forEach(function(e){
          $scope.data.push(e);
          $scope.resultSet.push(e);
        });
        PageService.updatePageStats($scope);
      });
      FormService.reset($scope);
    }
    init();

    //---------- Data manipulation ----------//

    $scope.reset = function(){
      FormService.reset($scope);
    };

    $scope.create = function(){
      if($scope.mode === 'create') {
        FormService.reset($scope);
      } else if($scope.mode !== 'edit') {
        $scope.mode = 'create';
      }
    };

    $scope.edit = function(user){
      FormService.edit(user, $scope);
    };

    $scope.saveOrUpdate = function() {
      if(typeof $scope.user.id === 'number') {
        FormService.update($scope);
      } else {
        FormService.save($scope);
        PageService.updatePageStats($scope);
      }
    };

    $scope.filter = function(){
      FilterService.filter($scope);
    };

    //---------- State tests ----------//

    $scope.isUnchanged = function(user){
      return FormService.isUnchanged(user, $scope);
    };

    $scope.isCreateMode = function(){
      return $scope.mode === 'create' ? true : false;
    };

    $scope.isEditMode = function(){
      return $scope.mode === 'edit' ? true : false;
    };

    $scope.isReadMode = function(){
      return $scope.mode === 'read' ? true : false;
    };

    //---------- Navigation ----------//

    $scope.decrementPage = function(){
      PageService.decrementPage($scope);
    };

    $scope.incrementPage = function(){
      PageService.incrementPage($scope);
    };
  }

  mainController.$inject = ['$scope', 'DataService', 'PageService', 'FormService', 'FilterService'];

  angular
  .module('dispatchApp')
  .controller('MainController', mainController);

})();
