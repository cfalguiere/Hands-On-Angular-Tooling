'use strict';

describe('Services : boardService', function(){

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

          boardService.deal(2,3);
          expect(boardService.cells).toBeDefined();
          expect(boardService.board).toBeDefined();

        }));

        it('has 6 cells', inject(function(boardService){

          boardService.deal(2,3);
          var cells = boardService.cells();
          expect(cells.length).toBe(6);
          expect(cells[0].id).toBeDefined();
          expect(cells[0].card.id).toBeDefined();

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
          var cells = boardService.cells();

          expect(cells.length).toBe(8);
          expect(cells[0].card.id).toBe(1);

          function compareByCardId (a, b) {
              return b.card.id - a.card.id;
          }

          cells.sort(compareByCardId);

          var nbPairs = 0;
          for (var i=0; i<cells.length; i+2) {
            nbPairs += (cells[i].card.id === cells[i+1].card.id ? 1 : 0);
          }

          expect(nbPairs).toBe(4);

        }));


        it('roll over when more cells than twice the number of cards', inject(function(boardService){

          boardService.deal(4,3);
          var cells = boardService.cells();

          expect(cells.length).toBe(12);
          expect(cells[0].card.id).toBe(0);
          expect(cells[1].card.id).toBe(1);
          expect(cells[2].card.id).toBe(2);
          expect(cells[3].card.id).toBe(2);
          expect(cells[8].card.id).toBe(1);
          expect(cells[9].card.id).toBe(1);

        }));

    });

    describe('On match', function(){

       it('true if has same card id and different cell id', inject(function(boardService){

          boardService.deal(2,3);
          var cells = boardService.cells();
          var cell1 = cells[0];
          var cell2 = cells[1];

          expect(boardService.match(cell1, cell2)).toBe(true) ;

        }));


       it('false if has different card id', inject(function(boardService){

          boardService.deal(2,3);
          var cells = boardService.cells();
          var cell1 = cells[0];
          var cell2 = cells[2];

          expect(boardService.match(cell1, cell2)).toBe(false) ;

        }));

    });


});

