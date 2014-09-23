(function(){
  'use strict';

  function startFrom(){
    return function(input, start){
      return input.slice(parseInt(start));
    };
  }

  angular
    .module('dispatchApp')
    .filter('startFrom', startFrom);
})();
