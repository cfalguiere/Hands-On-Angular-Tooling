'use strict';

angular.module('mytodoApp')
  .service('boardService', function(cardsFactory) {

    function Cell(anId, aCard) {
       this.id = anId;
       this.card = aCard;
       this.state = 'placed';
    }

    var board;

    this.board = function() {
      return board;
    };

    this.cells = function() {
      var cells = board.reduce(function(acc, row){
         return acc.concat(row);
      });
      return cells;
    };

    this.deal = function(nbLines, nbCols) {
      board = [];

      var cells = [];
      var nbCells = nbLines * nbCols;
      var id = 1;
      for (var i = 0; i < nbCols; i++) {
        cells.push( new Cell(id++, cardsFactory[i]) );
        cells.push( new Cell(id++, cardsFactory[i]) );
      }

      var i = 0;
      for (var l = 0; l < nbLines; l++) {
        var row = [];
        for (var c = 0; c < nbCols; c++) {
          row.push( cells[i++] );
        }
        board.push(row);
      }

      return board;
    };

    this.match = function(cell1, cell2) {
        return cell1.id !== cell2.id && cell1.card.id === cell2.card.id;
    };

});
