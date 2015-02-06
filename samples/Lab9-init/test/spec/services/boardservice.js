'use strict';

describe('Service: Boardservice', function () {

    // load the service's module
    beforeEach(module('twinApp'));

    // mock CardFactory
    beforeEach(function () {
      var cardsDependency =   // coder le tableau de cartes

      module(function ($provide) {
        $provide.value('CardFactory', cardsDependency);
      });
    });

    // instantiate service
    var Boardservice;
    beforeEach(inject(function (_Boardservice_) {
      Boardservice = _Boardservice_;
    }));

    describe('On deal', function(){

        it('set the board', function(){

        });

        it('has 3 rows and 4 columns', function(){

        });

        it('has pairs', function(){

          // vous pouvez utiliser sortedCellsByCardId et compter les paires successives


        });

    });


    describe('On sortedCells', function(){

       it('board is flatten and sorted', function(){

       });

    });


    describe('On getCellAt row column', function(){

       it('returns the cell', function(){


       });

    });


});
