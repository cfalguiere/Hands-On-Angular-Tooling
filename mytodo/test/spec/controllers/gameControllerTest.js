'use strict';

describe('Controller: GameController', function () {

  var gameController, scope;

  // load the controller's module
  beforeEach(module('mytodoApp'));

  // defines a 2x2 board
  beforeEach(boardService2by2MockFunction);

  beforeEach(GameServiceMockFunction);

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    gameController = $controller('GameController', {
      $scope: scope
    });
  }));

  function getSortedCells(board) {
    var cells = board.reduce(function(acc, row){
      return acc.concat(row);
    });

    function compareByCardId (a, b) {
      return a.card.id - b.card.id;
    }

    return cells.sort(compareByCardId);
  }

  function checkBoardInitialState() {
      var board = scope.board;
      expect(board.length).toBe(2);
      expect(board[0].length).toBe(2);
      expect(board[1].length).toBe(2);
      expect(board[0][0].state).toBe('placed');
      expect(board[0][1].state).toBe('placed');
      expect(board[1][0].state).toBe('placed');
      expect(board[1][1].state).toBe('placed');
  }

  describe('On init', function () {

    it('should create a board', function () {
      checkBoardInitialState();
    });


    it('does not have a selectedCell', function () {
      expect(scope.selectedCell).toBeNull();
    });

    it('game is not completed', function () {
      expect(scope.completed).toBe(false);
    });

  });

  describe('On New Game', function () {

    beforeEach( function () {
      scope.newGame();
    });

    it('should create a board', function () {
      checkBoardInitialState();
    });

    it('does not have a selectedCell', function () {
      expect(scope.selectedCell).toBeNull();
    });

    it('game is not completed', function () {
      expect(scope.completed).toBe(false);
    });

  });

  describe('When user clicks a cell while no other cell is selected', function () {

    it('if cell is placed it becomes selected', function () {
      expect(scope.selectedCell).toBeNull();

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
  });

  describe('When user clicks a cell while another cell is selected', function () {


    it('if they match both become removed and no cell is selected', function () {
      var cells = getSortedCells(scope.board);
      var cell1 = cells[0];
      var cell2 = cells[1];
      expect(cell1.card.id).toBe(cell2.card.id);
      expect(cell1.state).toBe('placed');
      expect(cell2.state).toBe('placed');

      scope.playCell(cell1);
      expect(cell1.state).toBe('selected');
      expect(scope.selectedCell).toBe(cell1);

      scope.playCell(cell2);
      expect(cell1.state).toBe('removed');
      expect(cell2.state).toBe('removed');
      expect(scope.selectedCell).toBeNull();
    });


    it('if they do not match last becomes selected', function () {
      var cells = getSortedCells(scope.board);
      var cell1 = cells[0];
      var cell2 = cells[2];
      expect(cell1.card.id).not.toBe(cell2.card.id);
      expect(cell1.state).toBe('placed');
      expect(cell2.state).toBe('placed');

      scope.playCell(cell1);
      expect(cell1.state).toBe('selected');
      expect(scope.selectedCell).toBe(cell1);

      scope.playCell(cell2);
      expect(cell1.state).toBe('placed');
      expect(cell2.state).toBe('selected');
      expect(scope.selectedCell).toBe(cell2);
    });

  });


  describe('When user removed all cards', function () {

    it('game is completed', function () {
      expect(scope.completed).toBe(false);
      var cells = getSortedCells(scope.board);

      scope.playCell(cells[0]);
      scope.playCell(cells[1]);

      scope.playCell(cells[2]);
      scope.playCell(cells[3]);

      expect(scope.completed).toBe(true);
    });
  });


  //TODO test avec le pathfinding
});

