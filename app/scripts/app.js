'use strict';

/**
 * @ngdoc overview
 * @name dispatchApp
 * @description
 * # dispatchApp
 *
 * Main module of the application.
 */

angular
  .module('dispatchApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
