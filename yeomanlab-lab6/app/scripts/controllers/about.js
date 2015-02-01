'use strict';

/**
 * @ngdoc function
 * @name twinApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the twinApp
 */
angular.module('twinApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
