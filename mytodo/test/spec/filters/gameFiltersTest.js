'use strict';

describe('filter', function() {

  beforeEach(module('mytodoApp'));


  describe('render', function() {

    it('has a render Filter',
        inject(function($filter) {
          expect($filter('render')).toBeDefined();
    }));

    it('should return a list of CSS classes',
        inject(function(renderFilter) {
          var cell1 = { id: 1, card: { id: 1, color: 'red', shape: 'heart'}, state: 'placed' };
          expect(renderFilter(cell1)).toBe('glyphicon glyphicon-heart card card-placed card-red');
    }));

  });
});
