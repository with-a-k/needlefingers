var Card = require('./card');
var pry = require('pryjs');

Hand = function(draw) {
  this.cards = draw.split(' ').map(function(shortform){
    return new Card(shortform);
  }).sort(function(a, b) {
    if (a.numberValue() > b.numberValue()) {
      return 1;
    } else if (a.numberValue() < b.numberValue()) {
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
  var check = this.cards[0].suit;
  return this.cards.every(function(card){
    return card.suit === check;
  });
}

Hand.prototype.hasStraight = function() {
  return this.cards.every(function(card, index, collection){
    if (index === 0) {
      return true;
    } else if (index === 1) {
      return card.numberValue() === collection[index-1].numberValue() + 1 ||
        card.numberValue() === collection[index-1].numberValue() + 9;
        // A difference of 9 here means A-10, 2-J, 3-Q, or 4-K.
        // A-10 could pass, the others will fail later.
    } else {
      return card.numberValue() === collection[index-1].numberValue() + 1;
    }
  });
}

Hand.prototype.highCard = function() {
  return this.cards[(this.cards.length)-1].value;
}

module.exports = Hand;
