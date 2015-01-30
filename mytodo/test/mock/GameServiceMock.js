'use strict';

function GameServiceMockFunction () {
    var gameDependency =  {
      acceptPair : function(aCell1, aCell2) { }
   };

    module(function ($provide) {
      $provide.value('gameService', gameDependency);
    });
}
