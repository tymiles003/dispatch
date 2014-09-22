(function(){
  'use strict';

  function filterService(PageService){
    var that = this;

    that.getDateString = function(date) {
      if(typeof date === 'string') {
        date = new Date(date);
      }
      var dateStr = (date.getMonth() + 1).toString() + '/' +
          date.getDate().toString() + '/' +
          date.getFullYear().toString() + ' ' +
          date.getHours().toString() + ':' +
          date.getMinutes().toString() + ':' +
          date.getSeconds().toString();
      return dateStr;
    };

    function setPagination(scope) {
        scope.firstSequenceNum = 0;
        scope.lastSequenceNum = PageService.lastSequenceNum(scope);
        scope.numNext = PageService.numNext(scope);
        scope.numPrior = PageService.numPrior(scope);
    }

    function filter(scope){
      if(scope.filter.query && scope.filter.query.length > 0) {
        var q = scope.filter.query.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'),
        regexp = new RegExp(q, 'gi');

        scope.resultSet = scope.data.filter(function(e){
          if(that.getDateString(e.createdOn).match(regexp)) {
            return true;
          }
          if(that.getDateString(e.lastEdited).match(regexp)) {
            return true;
          }
          return e.lastName.match(regexp) ||
            e.firstName.match(regexp) ||
            e.age.toString().match(regexp) ||
            e.email.match(regexp);
        });
      } else {
        scope.resultSet = scope.data;
      }
      setPagination(scope);
    }

    return {
      filter: filter
    };
  }

  filterService.$inject = ['PageService'];

  angular
    .module('dispatchApp')
    .factory('FilterService', filterService);
})();
