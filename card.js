var Card = function(shortform) {
  this.suit = shortform.slice(-1);
  this.value = shortform.slice(0,-1);
}

// the official Array.includes implementation
if (!Array.prototype.includes) {
  Array.prototype.includes = function(searchElement /*, fromIndex*/ ) {
    'use strict';
    var O = Object(this);
    var len = parseInt(O.length, 10) || 0;
    if (len === 0) {
      return false;
    }
    var n = parseInt(arguments[1], 10) || 0;
    var k;
    if (n >= 0) {
      k = n;
    } else {
      k = len + n;
      if (k < 0) {k = 0;}
    }
    var currentElement;
    while (k < len) {
      currentElement = O[k];
      if (searchElement === currentElement) { // NaN !== NaN
        return true;
      }
      k++;
    }
    return false;
  };
}

const validSuits = ['c', 'd', 'h', 's'];

const validValues = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

Card.prototype.invalidCard = function() {
  return (validSuits.includes(this.suit) || validValues.includes(this.value));
}

module.exports = Card;
