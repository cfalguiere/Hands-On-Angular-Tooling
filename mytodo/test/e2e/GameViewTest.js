'use strict';

describe('Game view End-2-End', function() {
    var tableRows, cards;

    beforeEach(function() {
      browser.get("#/play");

      tableRows = element.all(by.repeater('row in board'))
      cards = element.all(by.css('.card'))
    })

    describe('When Game view appears', function() {

      it('has the title Game', function() {

         expect(element(by.tagName('h2')).getText()).toBe('Game')

      })

      it('should have 4 cards', function() {

        expect(cards.count()).toBe(4)

      })

      it('should have 2 rows', function() {

        expect(tableRows.count()).toBe(2)

      })

    });

});

