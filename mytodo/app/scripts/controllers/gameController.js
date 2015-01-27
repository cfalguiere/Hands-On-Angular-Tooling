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


    var nbRows = 5;
    var nbColumns = 8;

    $scope.board;
    $scope.completed;
    $scope.selectedCell;


    $scope.newGame = function () {
      $scope.board = boardService.deal(nbRows, nbColumns);
      $scope.selectedCell = null;
      $scope.completed = false;
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
            $scope.selectedCell.state = 'removed';
            cell.state = 'removed';
            $scope.selectedCell = null;
            checkCompleted();
          } else {
            $scope.selectedCell.state = 'placed';
            cell.state = 'selected';
            $scope.selectedCell = cell;
          }

        }

      }


    };

  });
