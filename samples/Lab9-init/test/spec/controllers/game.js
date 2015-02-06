'use strict';

describe('Controller: GameCtrl', function () {

  // load the controller's module
  beforeEach(module('twinApp'));

  var GameCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GameCtrl = $controller('GameCtrl', {
      $scope: scope
    });
  }));

  describe('On init', function () {

    it('should create a board', function () {
      var board = scope.board;
      expect(board.length).toBe(3);
      expect(board[0].length).toBe(4);
      expect(board[0][0].state).toBe('placed');
    });


    it('does not have a selectedCell', function () {
      expect(scope.selectedCell).toBeNull();
    });

    it('game is not completed', function () {
      expect(scope.completed).toBe(false);
    });

  });
});
