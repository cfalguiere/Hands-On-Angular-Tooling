'use strict';

/**
 * @ngdoc filter
 * @name twinApp.filter:render
 * @function
 * @description
 * # render
 * Filter in the twinApp.
 */
angular.module('twinApp')
  .filter('render', function () {
    return function(cell) {
      //return 'glyphicon glyphicon-heart card card-placed card-red';
      return 'glyphicon glyphicon-' + cell.card.shape + ' card card-' + cell.state + ' card-' + cell.card.color;
    };
  });
