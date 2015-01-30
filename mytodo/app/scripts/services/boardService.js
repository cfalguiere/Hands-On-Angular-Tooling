'use strict';

angular.module('mytodoApp')
  .service('boardService', function(cardsFactory) {

    function Cell(anId, aCard) {
       this.id = anId;
       this.card = aCard;
       this.state = 'placed';
    }

    var board;
    var nbLines;
    var nbCols;

    this.sortedCellsByCardId = function() {
      var cells = board.reduce(function(acc, row){
         return acc.concat(row);
      });
      function compareByCardId (a, b) {
        return a.card.id - b.card.id;
      }

      return cells.sort(compareByCardId);
    };

    //@ http://jsfromhell.com/array/shuffle [v1.0]
    function shuffle (o) {
        for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x) {
        }
        return o;
    }

    function dealCells (cards) {
      var cells = [];
      var nbCells = nbLines * nbCols;
      var nbCards = cards.length;
      var cardIndex = 0;
      for (var cellId = 1; cellId <= nbCells; cardIndex++) {
        if (cardIndex >= nbCards) {
          cardIndex = 0;
        }
        cells.push( new Cell(cellId++, cards[cardIndex]) );
        cells.push( new Cell(cellId++, cards[cardIndex]) );
      }
      return cells;
    }

    function makeBoard (cells) {
      board = [];
      var i = 0;
      for (var l = 0; l < nbLines; l++) {
        var row = [];
        for (var c = 0; c < nbCols; c++) {
          row.push( cells[i++] );
        }
        board.push(row);
      }

      return board;
    }

    this.deal = function(aNbLines, aNbCols) {

      nbLines = aNbLines;
      nbCols = aNbCols;
      var cards = shuffle(cardsFactory);
      var shuffledCells = shuffle(dealCells(cards));
      return makeBoard(shuffledCells);

    };

    this.match = function(cell1, cell2) {
        return cell1.id !== cell2.id && cell1.card.id === cell2.card.id;
    };


    this.coordinates = function(aCell) {
      var notfound = true;
      var coord = [];
      for (var r=0; r<board.length; r++ && notfound) {
        for (var c=0; c<board[r].length; c++ && notfound) {
          if (aCell.id === board[r][c].id ) {
            coord = [r, c];
            notfound = false;
          }
        }
      }
      return coord;
    };

});
