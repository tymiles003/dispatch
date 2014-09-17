(function(){
  'use strict';

  function asDate(){
    return function(raw) {
      if(raw === null) {
        return '';
      }
      return new Date(raw);
    };
  }

  angular
    .module('dispatchApp')
    .filter('asDate', asDate);

})();
