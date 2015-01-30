'use strict';

describe('Services : gameService', function() {

    var theGameService;
    var theBoardService;
    var thePathFinderService;
    var board;

    beforeEach(module('mytodoApp'));

    // defines a 4x4 board
    beforeEach( function () {
            var nl, nc;
            var board = [
                         [
                           { id: 1, card: { id: 1, shape: 'heart', color: 'red' }, state: 'placed'},
                           { id: 2, card: { id: 2, shape: 'heart', color: 'blue' }, state: 'placed'}
                         ],
                         [
                           { id: 3, card: { id: 1, shape: 'heart', color: 'red' }, state: 'placed'},
                           { id: 4, card: { id: 2, shape: 'heart', color: 'blue' }, state: 'placed'}
                         ]
                       ];

            var boardDependency =  {
              sortedCells : function() {
                var cells = board.reduce(function(acc, row){
                 return acc.concat(row);
                });
                return cells;
              },
              deal: function (anl,anc) {
                nl = anl;
                nc = anc;
                return board;
              },
              coordinates: function (acl,ac2) {
                return [0,0];
              }
            };

            var word, pathStart, pathEnd;

            var pathfinderDependency =  {
              convert : function(board, fun) {
                return [ [0,1], [0,1] ];
              },
              padmatrix : function(world) {
              },
              findPath : function(aWord, aPathStart, aPathEnd) {
                  return [ [0,0], [1,0] ];
              }
           };

            module(function ($provide) {
              $provide.value('PathFinderService', pathfinderDependency);
              $provide.value('boardService', boardDependency);
            });
    });

    beforeEach(inject(function (gameService, boardService, PathFinderService) {
      theGameService = gameService;
      theBoardService = boardService;
      thePathFinderService = PathFinderService;
      board = theBoardService.deal(2,2);
      theGameService.init(board);
    }));

    describe('On acceptPair', function(){

        it('true if there is a path from cell1 to cell2', function(){
          var cell1 = board[0][0];
          var cell2 = board[1][0];
          var res = theGameService.acceptPair(cell1, cell2);
          expect(res).toBe(true);
        });

    });


});
