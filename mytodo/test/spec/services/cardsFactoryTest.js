'use strict';

describe('Services : cardsFactory', function(){

    beforeEach(module('mytodoApp'));

    describe('On initialisation', function(){

        it('returns a list of cards', inject(function(cardsFactory){

           expect( cardsFactory ).toBeDefined( );
           expect( cardsFactory.length ).toBeGreaterThan( 0 );

        }));

        it('cards have attributes', inject(function(cardsFactory){

          var card = cardsFactory[0];
          expect( card.id ).toBeDefined( );
          expect( card.color ).toBeDefined( );
          expect( card.shape ).toBeDefined( );

        }));

        it('first card id is 1', inject(function(cardsFactory){

          var card = cardsFactory[0];
          expect( card.id ).toBe( 1 );

        }));

    });

});

