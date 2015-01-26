'use strict';

//angular.module('gameFilters', [])
angular.module('mytodoApp')
  .filter('render', function() {
    return function(cell) {
      //return 'glyphicon glyphicon-heart card card-placed card-red';
      return 'glyphicon glyphicon-' + cell.card.shape + ' card card-' + cell.state + ' card-' + cell.card.color;
    };
});
