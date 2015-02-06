'use strict';

describe('Controller: PlayerCtrl', function () {

  // load the controller's module
  beforeEach(module('twinApp'));

  var PlayerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PlayerCtrl = $controller('PlayerCtrl', {
      $scope: scope
    });
  }));

  describe('Initialize', function () {

    it('should attach a list of players to the scope', function () {
      expect(scope.players.length).toBe(2);
    });

  });

  describe('Add player', function () {

    it('should add the player to the list', function () {
      expect(scope.players.length).toBe(2);
      scope.newPlayer = 'Chris';
      scope.addPlayer();
      expect(scope.players.length).toBe(3);
      expect(scope.players[2]).toBe('Chris');
    });

  });

});
