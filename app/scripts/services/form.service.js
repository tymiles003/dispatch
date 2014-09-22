(function(){
  'use strict';

  function formService(){

    function reset(scope){
      scope.mode = 'read';
      scope.user = {
        id: null,
        lastName: '',
        firstName: '',
        age: '',
        email: '',
        createdOn: null,
        lastEdited: null,
        active: false
      };
      if(scope.userForm) {
        scope.userForm.$setPristine();
      }
    }

    function save(scope){
      scope.data.unshift({
        id: scope.data.length,
        lastName: scope.user.lastName,
        firstName: scope.user.firstName,
        age: scope.user.age,
        email: scope.user.email,
        createdOn: new Date(),
        lastEdited: new Date(),
        active: scope.user.active
      });
      reset(scope);
    }

    function edit(user, scope){
      scope.mode = 'edit';
      scope.user = {
        id: user.id,
        lastName: user.lastName,
        firstName: user.firstName,
        age: user.age,
        email: user.email,
        createdOn: user.createdOn,
        lastEdited: user.lastEdited,
        active: user.active
      };
    }

    function update(scope){
      scope.data.forEach(function(elem){
        if(elem.id === scope.user.id) {
          elem.lastName = scope.user.lastName;
          elem.firstName = scope.user.firstName;
          elem.age = scope.user.age;
          elem.email = scope.user.email;
          elem.lastEdited = new Date();
          elem.active = scope.user.active;
        }
      });
      reset(scope);
    }

    function isUnchanged(user, scope){
      var unchanged = true;
      scope.data.forEach(function(elem){
        if(elem.id === user.id) {
          unchanged = angular.equals(user, elem);
        }
      });
      return unchanged;
    }

    return {
      reset: reset,
      save: save,
      edit: edit,
      update: update,
      isUnchanged: isUnchanged
    };
  }

  angular
    .module('dispatchApp')
    .factory('FormService', formService);
})();
