var Card = require('./card');

pry = require('pryjs');

var Needlefingers = function() {};

Needlefingers.prototype.score = function(cards) {
  var hand = cards.split(' ').map(function(shortform){
    return new Card(shortform);
  });
  if (hand.length != 5 || hand.some(function(card) {
    return !(card.validCard());
  })) {
    return 'Invalid hand';
  }
  return '';
}

module.exports = Needlefingers;
