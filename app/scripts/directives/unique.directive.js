(function(){
  'use strict';

  function uniqueEmail(){
    return {
      require: 'ngModel',
      link: function(scope, elm, attrs, ctrl){
        ctrl.$parsers.unshift(function(viewValue){
          var found = false;
          scope.data.forEach(function(e){
            if(e.email === viewValue && e.id !== scope.user.id) {
              found = true;
            }
          });
          if(!found) {
            ctrl.$setValidity('unique', true);
            return viewValue;
          } else {
            ctrl.$setValidity('unique', false);
            return undefined;
          }
        });
      }
    };
  }

  angular
    .module('dispatchApp')
    .directive('uniqueEmail', uniqueEmail);
})();
