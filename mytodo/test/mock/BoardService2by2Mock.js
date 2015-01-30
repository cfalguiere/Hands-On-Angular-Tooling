'use strict';

function boardService2by2MockFunction () {
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
      }
    };

    module(function ($provide) {
      $provide.value('boardService', boardDependency);
    });
}

