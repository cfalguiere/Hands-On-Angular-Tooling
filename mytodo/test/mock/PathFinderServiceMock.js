'use strict';

function PathFinderServiceMockFunction () {
    var word, pathStart, pathEnd;

    var pathfinderDependency =  {
      padmatrix : function(world) { },
      findPath : function(aWord, aPathStart, aPathEnd) {
        word = aWorld;
        pathStart = aPathStart;
        pathEnd = aPathEnd;
        if ( aPathStart === [0,0] &&   aPathStart === [1,1]) {
          return [];
        }
        else {
          return [aPathStart, aPathEnd];
        }
      },
   };

    module(function ($provide) {
      $provide.value('PathFinderService', pathfinderDependency);
    });
}
