var Card = function(shortform) {
  this.suit = shortform.slice(-1);
  this.value = shortform.slice(0,-1);
}

Card.prototype.validSuits = [
  'c', 'd', 'h', 's'
];

Card.prototype.validValues = [
  'A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'
];

Card.prototype.validCard = function() {
  return validSuits.includes(this.suit) && validValues.includes(this.value);
}

module.exports = Card;
