'use strict';

function boardService4by4MockFunction () {
    var nl, nc;

    var cards =   [
      { id: 1, shape: 'heart', color: 'red'},
      { id: 2, shape: 'leaf', color: 'green'},
      { id: 3, shape: 'star', color: 'orange'},
      { id: 4, shape: 'music', color: 'blue'},
      { id: 5, shape: 'book', color: 'cyan'},
      { id: 6, shape: 'hand', color: 'purple'},
      { id: 7, shape: 'cloud', color: 'yellow'},
      { id: 8, shape: 'plane', color: 'black'}
    ];

    var boardCards = [  [ 1, 1, 2, 2 ],
                        [ 3, 3, 4, 4 ],
                        [ 5, 5, 6, 6 ],
                        [ 7, 7, 8, 8 ]  ];


    var id = 1;
    var cellMapper = function(cardId, index, context) {
        return { id: id++, card: cards[cardId-1], state: 'placed' };
    };
    var rowMapper = function(rowCards, index, context) {
        return rowCards.map( cellMapper );
    };
    var board = boardCards.map( rowMapper );


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
      }
    };

    module(function ($provide) {
      $provide.value('boardService', boardDependency);
    });
  }
