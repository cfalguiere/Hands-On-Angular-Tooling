'use strict';


/**
 * @ngdoc function
 * @name mytodoApp.controller:GameController
 * @description
 * # GameController
 * Controller of the game play
 */

angular.module('mytodoApp')
  .controller('GameController', function ($scope, $window, boardService) {

    var selectedCell = null;
    //var card1 = { 'color': 'blue', 'shape': 'heart' };

    boardService.deal(2,2);
    $scope.board = boardService.board();

    $scope.isPlayable = function (cell) {

    }

    $scope.playCell = function (cell) {
      /*
      if (selectedCell !== null) {
        $window.alert(selectedCell.id);
      }
      if (selectedCell !== null) {
        $window.alert(selectedCell.id + ' ' + cell.match(selectedCell));
      }*/
/*
      if (selectedCell !== null && boardService.match(cell,selectedCell) ) {
        cell.state = 'removed';
        selectedCell.remove();
        selectedCell = null;
        $window.alert('Ok');
      } else {
        selectedCell = cell;
        if (cell.state !== 'removed') {
          cell.select();
        }
      }
*/
    };

  });
