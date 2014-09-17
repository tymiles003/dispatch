(function(){
  'use strict';

  function dataService($q, $http){

    function getData(url){
      var deferred = $q.defer();

      $http.get(url)
      .success(function(data){
        deferred.resolve(data);
      })
      .error(function(reason, status){
        deferred.reject(reason.error + ' ' + status);
      });

      return deferred.promise;
    }

    function getSeedData(){
      return getData('scripts/data.json');
    }

    return {
      getSeedData : getSeedData
    };
  }

  dataService.$inject = ['$q', '$http'];

  angular
    .module('dispatchApp')
    .factory('DataService', dataService);

})();
