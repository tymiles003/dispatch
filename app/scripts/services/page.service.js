(function(){
  'use strict';

  function pageService(){

    function numPages(scope){
      return Math.ceil(scope.resultSet.length / scope.pageSize);
    }

    function getSequenceStart(scope){
      return (scope.currentPage - 1) * scope.pageSize + 1;
    }

    function getSequenceEnd(scope){
      return (scope.currentPage * scope.pageSize) > scope.resultSet.length ? scope.resultSet.length : (scope.currentPage * scope.pageSize);
    }

    function getNextQty(scope){
      return (scope.currentPage + 1) < numPages(scope) ? scope.pageSize : scope.resultSet.length % scope.pageSize;
    }

    function getPreviousQty(scope) {
      return scope.currentPage === 1 ? 0 : scope.pageSize;
    }

    //---------- Public functions ----------//

    function updatePageStats(scope){
      scope.sequenceStart = getSequenceStart(scope);
      scope.sequenceEnd = getSequenceEnd(scope);
      scope.nextQty = getNextQty(scope);
      scope.previousQty = getPreviousQty(scope);
    }

    function incrementPage(scope){
      scope.currentPage = scope.currentPage + 1;
      updatePageStats(scope);
    }

    function decrementPage(scope){
      scope.currentPage = scope.currentPage - 1;
      updatePageStats(scope);
    }

    return {
      updatePageStats : updatePageStats,
      incrementPage : incrementPage,
      decrementPage : decrementPage
    };
  }

  angular
    .module('dispatchApp')
    .factory('PageService', pageService);

})();
