'use strict';

angular.module('mytodoApp')
  .service('gameService', function(PathFinderService, boardService) {

    var board;

    this.init = function(aBoard) {
      board =  aBoard;
    };

    this.acceptPair = function(aCell1, aCell2) {

      var fun = function (cell) {
        return (cell.state === 'removed') ? 0 : 1;
      };
      var world = PathFinderService.convert(board, fun);
      var pathStart = boardService.coordinates(aCell1);
      var pathEnd = boardService.coordinates(aCell2);
      var path = PathFinderService.findPath(world, pathStart, pathEnd, true);

      return path.length > 0;
    };

});
