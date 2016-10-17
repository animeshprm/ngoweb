'use strict';

/**
 * @ngdoc overview
 * @name ngowebApp
 * @description
 * # ngowebApp
 *
 * Main module of the application.
 */
angular
  .module('ngowebApp', [
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
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
