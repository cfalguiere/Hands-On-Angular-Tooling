'use strict';

/**
 * @ngdoc function
 * @name twinApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the twinApp
 */
angular.module('twinApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
