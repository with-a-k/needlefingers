var Card = require('./card');

Hand = function(draw) {
  this.cards = draw.split(' ').map(function(shortform){
    return new Card(shortform);
  }).sort(function(a, b) {
    if (a.sortingValue > b.sortingValue) {
      return 1;
    } else if (a.sortingValue < b.sortingValue) {
      return -1;
    }
    return 0;
  });
};

Hand.prototype.isInvalid = function() {
  return (this.cards.length != 5 || this.cards.some(function(card) {
    return (card.invalidCard());
  }));
}

Hand.prototype.hasFlush = function() {
  return this.cards.every(function(card){
    card.suit === this.cards[0].suit;
  }, this);
}

Hand.prototype.hasStraight = function() {

}

Hand.prototype.highCard = function() {
  return this.cards[(this.cards.length)-1].value;
}

module.exports = Hand;
