'use strict';


/**
 * @ngdoc function
 * @name mytodoApp.controller:GameController
 * @description
 * # GameController
 * Controller of the game play
 */

angular.module('mytodoApp')
  .controller('GameController', function ($scope, $window, boardService /*, gameService*/) {


    var nbRows = 5;
    var nbColumns = 8;

    $scope.board = boardService.deal(nbRows, nbColumns);
    $scope.completed = false;
    $scope.selectedCell = null;
//TODO factorisation

    $scope.newGame = function () {
      $scope.board = boardService.deal(nbRows, nbColumns);
      $scope.completed = false;
      $scope.selectedCell = null;
    };
    $scope.newGame();


    function checkCompleted () {
      $scope.completed = $scope.board.reduce( function(acc, row) {
        var lineCompleted = row.reduce( function(acc, cell) {
          return acc && cell.state === 'removed';
        }, true);
        return acc && lineCompleted;
      }, true);
    }

    $scope.playCell = function (cell) {

      if ($scope.selectedCell === null) {
        if (cell.state === 'placed') {
          cell.state = 'selected';
          $scope.selectedCell = cell;
        }
      } else if ($scope.selectedCell !== null) {
        if (cell === $scope.selectedCell) {
          cell.state = 'placed';
          $scope.selectedCell = null;
        } else {
          if (cell.card.id === $scope.selectedCell.card.id) {
            //if (gameService.acceptPair(cell, $scope.selectedCell) {
              $scope.selectedCell.state = 'removed';
              cell.state = 'removed';
              $scope.selectedCell = null;
              checkCompleted();
            //}
          } else {
            $scope.selectedCell.state = 'placed';
            cell.state = 'selected';
            $scope.selectedCell = cell;
          }

        }

      }

    };

  });
