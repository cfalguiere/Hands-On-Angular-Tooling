'use strict';

/**
 * @ngdoc overview
 * @name twinProjectApp
 * @description
 * # twinProjectApp
 *
 * Main module of the application.
 */
angular
  .module('twinProjectApp', [
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
      .otherwise({
        redirectTo: '/'
      });
  });
