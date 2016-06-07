var Card = require('./card');

var Needlefingers = function() {};

Needlefingers.prototype.score = function(cards) {
  var hand = cards.split(' ').map(function(shortform){
    return new Card(shortform);
  });
  if (hand.length != 5 || hand.some(function(card) {
    return (card.invalidCard());
  })) {
    return 'Invalid hand';
  }
  return '';
}

module.exports = Needlefingers;
