'use strict';
describe('Main view End-2-End', function() {
    var playerTable
    var newPlayer

    beforeEach(function() {
      browser.get("index.html");

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

    describe('When user enter a player', function() {

      it('should be added to the players list', function() {
        element(by.model('newPlayer')).sendKeys('Chris');
        element(by.id('addPlayer')).click();

        expect(playerTable.count()).toBe(3)

      })
    });



    describe('When user select a player ', function() {

      it('should be taken to the game view', function() {
         var playButton = playerTable[0].element(by.css('.btn-primary'));
         element(playButton).click();

         expect(element(by.tagName('h2'))).toBe('Game')

      })
    });

});
