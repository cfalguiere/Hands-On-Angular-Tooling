'use strict';

/**
 * @ngdoc function
 * @name twinProjectApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the twinProjectApp
 */
angular.module('twinProjectApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
