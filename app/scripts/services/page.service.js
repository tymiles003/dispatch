(function(){
  'use strict';

  function pageService(){

    function numPages(scope){
      return Math.ceil(scope.data.length / scope.pageSize);
    }

    function incrementPage(scope){
      scope.currentPage = scope.currentPage + 1;
      scope.firstSequenceNum = firstSequenceNum(scope);
      scope.lastSequenceNum = lastSequenceNum(scope);
      scope.numPrior = numPrior(scope);
      scope.numNext = numNext(scope);
    }

    function decrementPage(scope){
      scope.currentPage = scope.currentPage - 1;
      scope.firstSequenceNum = firstSequenceNum(scope);
      scope.lastSequenceNum = lastSequenceNum(scope);
      scope.numPrior = numPrior(scope);
      scope.numNext = numNext(scope);
    }

    function firstSequenceNum(scope){
      return scope.currentPage * scope.pageSize <= 0 ? 0 : scope.currentPage * scope.pageSize;
    }

    function lastSequenceNum(scope){
      return (scope.currentPage + 1) * scope.pageSize > scope.data.length ? scope.data.length : (scope.currentPage + 1) * scope.pageSize;
    }

    function numNext(scope){
      return scope.currentPage + 1 < (numPages(scope) - 1) ? scope.pageSize : scope.data.length - scope.lastSequenceNum;
    }

    function numPrior(scope) {
      return scope.currentPage >= 1 ? scope.pageSize : scope.firstSequenceNum - 1;
    }

    return {
      incrementPage : incrementPage,
      decrementPage : decrementPage,
      firstSequenceNum : firstSequenceNum,
      lastSequenceNum : lastSequenceNum,
      numNext : numNext,
      numPrior : numPrior
    };
  }

  angular
    .module('dispatchApp')
    .factory('PageService', pageService);

})();
