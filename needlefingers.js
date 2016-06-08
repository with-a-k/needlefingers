var Card = require('./card');
var Hand = require('./hand');

var Needlefingers = function() {};

Needlefingers.prototype.score = function(cards) {
  var hand = new Hand(cards);
  if (hand.isInvalid()) {
    return 'Invalid hand';
  }
  if (hand.hasStraight()) {
    if (hand.hasFlush()) {
      return `Straight flush (${hand.highCard()})`;
    }
    return `Straight (${hand.highCard()})`;
  }
  if (hand.hasFlush()) {
    return `Flush (${hand.highCard()})`;
  }
  return `High card (${hand.highCard()})`;
}

module.exports = Needlefingers;
