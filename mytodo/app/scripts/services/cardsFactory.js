'use strict';

//angular.module('BrickInventoryApp.factories', [])
angular.module('mytodoApp')
  .factory('cardsFactory', function() {

    function Card(anId, aShape, aColor) {
       this.id = anId;
       this.shape = aShape;
       this.color = aColor;
    }

    var colors = [ 'blue', 'cyan', 'purple', 'green', 'pink', 'orange', ]; //red
    var shapes = [ 'heart', 'star', 'music', 'headphones', 'cloud', 'flag' ];

    var cards = [];

    var i = 1;
    for (var s = 0; s < shapes.length; s++) {
      for (var c = 0; c < colors.length; c++) {
        cards.push( new Card(i, shapes[s], colors[c]) );
        i++;
      }
    }

    return cards;
});

