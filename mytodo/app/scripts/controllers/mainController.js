'use strict';


/**
 * @ngdoc function
 * @name mytodoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mytodoApp
 */

angular.module('mytodoApp')
  .controller('MainCtrl', function ($scope, $window, $location) {
    var currentPlayer;

    $scope.players = ['Alice', 'Bob'];

    $scope.addPlayer = function () {
      //$window.alert('adding ' + $scope.newPlayer);
      $scope.players.push($scope.newPlayer);
      $scope.newPlayer = '';
    };

    $scope.removePlayer = function (index) {
      $scope.players.splice(index, 1);
    };

    $scope.play = function (player){
      //$window.alert('playing ' + player);
      currentPlayer = player;
      $location.path('/play/');
    };

  });
