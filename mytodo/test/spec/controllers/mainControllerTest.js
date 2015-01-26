'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('mytodoApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  describe('Initialize', function () {

    it('should create a player list', function () {
      expect(scope.players.length).toBe(2);
    });

  });

  describe('add player', function () {

    it('should add the player to the list', function () {
      scope.newPlayer = 'Chris';
      scope.addPlayer();
      expect(scope.players.length).toBe(3);
      expect(scope.players[2]).toBe('Chris');
    });

  });
});
