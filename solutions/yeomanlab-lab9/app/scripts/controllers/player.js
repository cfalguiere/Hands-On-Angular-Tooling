'use strict';

/**
 * @ngdoc function
 * @name twinApp.controller:PlayerCtrl
 * @description
 * # PlayerCtrl
 * Controller of the twinApp
 */
angular.module('twinApp')
  .controller('PlayerCtrl', function ($scope) {

    $scope.newPlayer = '';
    $scope.players = [
      'Alice',
      'Bob'
    ];

    $scope.addPlayer = function () {
      //$window.alert('adding ' + $scope.newPlayer);
      $scope.players.push($scope.newPlayer);
      $scope.newPlayer = '';
    };

});



