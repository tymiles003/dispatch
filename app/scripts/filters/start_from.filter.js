(function(){
  'use strict';

  function startFrom(){
    return function(input, start){
      start = parseInt(start);
      return input.slice(start);
    };
  }

  angular
    .module('dispatchApp')
    .filter('startFrom', startFrom);
})();
