'use strict';
describe('Player view End-2-End', function() {
    var playerTable
    var newPlayer

    beforeEach(function() {
      browser.get("#/player");

      playerTable = element.all(by.repeater('player in players'))
      newPlayer = element(by.model('newPlayer'))
    })

    describe('When Main view appears', function() {

      it('has the title Players', function() {

         expect(element(by.tagName('h2')).getText()).toBe('Players')

      })

      it('should show a list of players', function() {

         expect(playerTable.count()).toBe(2)

      })

      it('has an input field that shows What is your name? as a placeholder', function() {

         expect(newPlayer.getAttribute('placeholder')).toBe('What is your name?')

      })
    });

});
