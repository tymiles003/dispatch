(function(){
  'use strict';

  function integer(){
    var INTEGER_REGEXP = /^\d+$/;

    return {
      require: 'ngModel',
      link: function(scope, elm, attrs, ctrl){
        ctrl.$parsers.unshift(function(viewValue){
          if(INTEGER_REGEXP.test(viewValue)) {
            ctrl.$setValidity('integer', true);
            return viewValue;
          } else {
            ctrl.$setValidity('integer', false);
            return undefined;
          }
        });
      }
    };
  }

  angular
    .module('dispatchApp')
    .directive('integer', integer);
})();
