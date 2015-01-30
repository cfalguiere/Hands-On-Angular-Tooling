'use strict';

describe('Services : PathFinderService', function(){

    var thePathFinderService;

    beforeEach(module('mytodoApp'));

    beforeEach(inject(function (PathFinderService) {
      thePathFinderService = PathFinderService;
    }));

    describe('On findPath no edges', function(){

        it('empty when there is no path from cell1 to cell2', function(){
          var world = [ [ 0, 1 ],
                        [ 1, 0 ] ];
          var pathStart = [0,0];
          var pathEnd = [1,1];
          var path = thePathFinderService.findPath(world, pathStart, pathEnd);
          expect(path).toBeDefined();
          expect(path).toEqual([]);
        });

        it('returns a list of cells when there is a path from cell1 to cell2', function(){
          var world = [ [ 0, 0 ],
                        [ 1, 0 ] ];
          var pathStart = [0,0];
          var pathEnd = [1,1];
          var path = thePathFinderService.findPath(world, pathStart, pathEnd);
          expect(path).toBeDefined();
          expect(path.length).toBe(3);
          expect(path[0]).toEqual([0,0]);
          expect(path[1]).toEqual([0,1]);
          expect(path[2]).toEqual([1,1]);
        });


        it('returns a list of cells when there is a path from cell1 to cell2', function(){
          var world = [ [ 0, 0, 1 ],
                        [ 1, 0, 1 ],
                        [ 1, 0, 1 ] ];
          var pathStart = [0,0];
          var pathEnd = [2,1];
          var path = thePathFinderService.findPath(world, pathStart, pathEnd);
          expect(path).toBeDefined();
          expect(path.length).toBe(4);
          expect(path[0]).toEqual([0,0]);
          expect(path[1]).toEqual([0,1]);
          expect(path[2]).toEqual([1,1]);
          expect(path[3]).toEqual([2,1]);
        });

    });


    describe('On findPath with edges', function(){

       it('returns a list of cells when there is a path along the edge', function(){
          var world = [ [ 0, 1, 0 ],
                        [ 1, 1, 1 ],
                        [ 1, 1, 1 ] ];
          var pathStart = [0,0];
          var pathEnd = [0,2];
          var path = thePathFinderService.findPath(world, pathStart, pathEnd, true);
          expect(path).toBeDefined();
          expect(path.length).toBe(5);
          expect(path[0]).toEqual([0,0]);
          expect(path[1]).toEqual([-1,0]);
          expect(path[2]).toEqual([-1,1]);
          expect(path[3]).toEqual([-1,2]);
          expect(path[4]).toEqual([0,2]);
        });


       it('returns empty when there is a corner on the way', function(){
          var world = [ [ 0, 1, 1 ],
                        [ 1, 1, 0 ],
                        [ 1, 1, 1 ] ];
          var pathStart = [0,0];
          var pathEnd = [1,2];
          var path = thePathFinderService.findPath(world, pathStart, pathEnd, true);
          expect(path).toBeDefined();
          expect(path.length).toBe(0);
        });

    });


    describe('Pad rectangular matrix', function(){

        it('if vertical should add a column', function(){
          var world = [ [ 0, 0 ],
                        [ 1, 0 ],
                        [ 1, 0 ] ];
          var squareWorld = thePathFinderService.padMatrix(world);
          expect(squareWorld).toBeDefined();
          expect(squareWorld.length).toBe(3);
          expect(squareWorld[0].length).toBe(3);
          expect(squareWorld[0]).toEqual([0,0,0]);
          expect(squareWorld[1]).toEqual([1,0,0]);
          expect(squareWorld[2]).toEqual([1,0,0]);
        });

        it('if vertical should add a column', function(){
          var world = [ [ 0, 0, 1 ],
                        [ 1, 0, 1 ] ];
          var squareWorld = thePathFinderService.padMatrix(world);
          expect(squareWorld).toBeDefined();
          expect(squareWorld.length).toBe(3);
          expect(squareWorld[0].length).toBe(3);
          expect(squareWorld[0]).toEqual([0,0,1]);
          expect(squareWorld[1]).toEqual([1,0,1]);
          expect(squareWorld[2]).toEqual([0,0,0]);
        });

    });

    describe('Convert board into terrain', function(){

        it('returns a 2d array with 0 or 1', function(){
          var board = [
                 [
                   { id: 1, card: { id: 1, shape: 'heart', color: 'red' }, state: 'removed'},
                   { id: 2, card: { id: 2, shape: 'heart', color: 'blue' }, state: 'selected'}
                 ],
                 [
                   { id: 3, card: { id: 1, shape: 'heart', color: 'red' }, state: 'removed'},
                   { id: 4, card: { id: 2, shape: 'heart', color: 'blue' }, state: 'placed'}
                 ]
               ];

          var fun = function (cell) {
            return (cell.state === 'removed') ? 0 : 1;
          };

          var world = thePathFinderService.convert(board, fun);
          expect( world ).toBeDefined();
          expect( world.length ).toBe( 2 );
          expect( world[0].length ).toBe( 2 );
          expect( world[0] ).toEqual( [0,1] );
          expect( world[1] ).toEqual( [0,1] );
        });

    });

});
