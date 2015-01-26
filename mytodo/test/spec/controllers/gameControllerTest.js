'use strict';

describe('Controller: GameController', function () {

  var gameController, scope;

  // load the controller's module
  beforeEach(module('mytodoApp'));

  beforeEach(function () {
    var nl, nc;
    var board = [
                 [
                   { id: 1, card: { id: 1, shape: 'heart', color: 'red' }, state: 'placed'},
                   { id: 2, card: { id: 2, shape: 'heart', color: 'blue' }, state: 'placed'}
                 ],
                 [
                   { id: 3, card: { id: 3, shape: 'star', color: 'red' }, state: 'placed'},
                   { id: 4, card: { id: 4, shape: 'star', color: 'blue' }, state: 'placed'}
                 ]
               ];
    var boardDependency =  {
      board: function () {
        return board;
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
  });

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    gameController = $controller('GameController', {
      $scope: scope
    });
  }));

  describe('On init', function () {

    it('should create a board', function () {
      expect(scope.board.length).toBeGreaterThan(1);
    });

  });
/*
  describe('When user clicks a cell while no other cell is selected', function () {

    it('if cell is placed it becomes selected', function () {
      var cell1 = scope.board[0][0];
      expect(cell1.state).toBe('placed');

      scope.playCell(cell1);
      expect(cell1.state).toBe('selected');
      expect(scope.selectedCell).toBe(cell1);
    });

    it('if cell is selected again it becomes placed and no cell is selected', function () {
      var cell1 = scope.board[0][0];
      expect(cell1.state).toBe('placed');

      scope.playCell(cell1);
      expect(cell1.state).toBe('selected');

      scope.playCell(cell1);
      expect(cell1.state).toBe('placed');
    });
  });*/
  /*
  describe('When user clicks a cell while another cell is selected', function () {

    it('if cell is selected and another cell is selected both become removed', function () {
      var cell1 = scope.board[0][0];
      var cell2 = scope.board[0][1];
      expect(cell1.state).toBe('placed');

      scope.playCell(cell1);
      expect(cell1.state).toBe('selected');

      scope.playCell(cell2);
      expect(cell1.state).toBe('removed');
      expect(cell2.state).toBe('removed');
    });

  });*/

});
