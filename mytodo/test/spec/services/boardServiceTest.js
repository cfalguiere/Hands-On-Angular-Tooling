'use strict';

describe('Services : boardService', function(){

  //TODO inverser width et height

    beforeEach(module('mytodoApp'));

    beforeEach(function () {
      var cardsDependency =   [
                    { id: 1, shape: 'heart', color: 'red'},
                    { id: 2, shape: 'heart', color: 'blue'},
                    { id: 3, shape: 'star', color: 'red'},
                    { id: 4, shape: 'star', color: 'blue'}
                 ];

      module(function ($provide) {
        $provide.value('cardsFactory', cardsDependency);
      });
    });

    describe('On deal', function(){

        it('set the board', inject(function(boardService){

          var board = boardService.deal(2,3);
          expect(board).toBeDefined();

        }));

        it('has 2 rows of 3 columns', inject(function(boardService){

          var board = boardService.deal(2,3);
          expect(board.length).toBe(2);
          expect(board[0].length).toBe(3);
          expect(board[0][0].id).toBeDefined();
          expect(board[0][0].card.id).toBeDefined();

        }));

        it('has pairs', inject(function(boardService){

          boardService.deal(2,4);
          var cells = boardService.sortedCellsByCardId();

          expect(cells.length).toBe(8);
          expect(cells[0].card.id).toBe(1);

          var nbPairs = 0;
          for (var i=0; i<cells.length; i+=2) {
            if (cells[i].card.id === cells[i+1].card.id) {
              nbPairs++;
            }
          }

          expect(nbPairs).toBe(4);

        }));


        it('roll over when more cells than twice the number of cards', inject(function(boardService){

          var board = boardService.deal(4,3);
          for (var l = 0; l < 4; l++) {
            for (var c = 0; c < 3; c++) {
              var cell  = board[l][c];
              expect(cell).not.toBeNull();
              expect(cell.id).toBeGreaterThan(0);
              expect(cell.card.id).toBeGreaterThan(0);
            }
          }

          //var cells = boardService.sortedCells();

          //expect(cells.length).toBe(12);

        }));

    });


    describe('On sortedCells', function(){

       it('board is flatten and sorted', inject(function(boardService){

          boardService.deal(2,4);
          var cells = boardService.sortedCellsByCardId();

          //expect(cells).toBeNull() ;
          expect(cells.length).toBe(8) ;
          expect(cells[0].card.id).toBe(1) ;
          expect(cells[0].card.id).toBe(cells[1].card.id) ;
          expect(cells[2].card.id).toBe(2) ;

        }));

    });

    describe('On match', function(){

       it('true if has same card id and different cell id', inject(function(boardService){

          boardService.deal(2,4);
          var cells = boardService.sortedCellsByCardId();
          var cell1 = cells[0];
          var cell2 = cells[1];

          expect(boardService.match(cell1, cell2)).toBe(true) ;

        }));


       it('false if has different card id', inject(function(boardService){

          boardService.deal(2,4);
          var cells = boardService.sortedCellsByCardId();
          var cell1 = cells[0];
          var cell2 = cells[2];

          expect(boardService.match(cell1, cell2)).toBe(false) ;

        }));

    });

    describe('On coordinates', function(){

       it('find the cell coordinates', inject(function(boardService){

          var board = boardService.deal(2,4);
          var cell1 = board[1][2];

          expect( boardService.coordinates(cell1) ).toEqual( [1,2] );

        }));

    });

});

