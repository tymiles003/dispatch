(function(){
  'use strict';

  function asDate(){
    return function(raw) {
      if(raw === null) {
        return new Date();
      }
      return new Date(raw);
    };
  }

  angular
    .module('dispatchApp')
    .filter('asDate', asDate);

})();
