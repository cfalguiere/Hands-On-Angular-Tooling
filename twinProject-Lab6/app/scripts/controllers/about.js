'use strict';

/**
 * @ngdoc function
 * @name twinProjectApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the twinProjectApp
 */
angular.module('twinProjectApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
