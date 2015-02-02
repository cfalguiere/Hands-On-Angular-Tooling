'use strict';

/**
 * @ngdoc overview
 * @name twinApp
 * @description
 * # twinApp
 *
 * Main module of the application.
 */
angular
  .module('twinApp', [
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/player', {
        templateUrl: 'views/player.html',
        controller: 'PlayerCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
