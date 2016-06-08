var Needlefingers = require('./needlefingers');

describe('Needle Fingers', function() {
  var needleFingers = new Needlefingers();

  it('rejects calls with no input', function() {
    expect(needleFingers.score('')).toEqual('Invalid hand');
  });

  it('gets the highest card of any hand', function() {
    expect(needleFingers.score('Ah 3s 5c 7d 9h')).toEqual('High card (9)');
    expect(needleFingers.score('Ah 3s 5c 7d 6h')).toEqual('High card (7)');
  });

  it('can detect a pair in a hand', function() {
    expect(needleFingers.score('Ad Ah 3s 4d 5d')).toEqual('One pair (A)');
    expect(needleFingers.score('Ad 2h 4s 4d 5d')).toEqual('One pair (4)');
  });

  it('can detect three of a kind in a hand', function() {
    expect(needleFingers.score('3c 3s 3h Js Ks')).toEqual('Three of a kind (3)');
    expect(needleFingers.score('Jc 3s Jh Js Ks')).toEqual('Three of a kind (J)');
  });

  it('can detect hands with two pairs', function() {
    expect(needleFingers.score('Kc Kh 5d 5c 8c')).toEqual('Two pair (K)');
    expect(needleFingers.score('Qh Qd 4s 6s 4h')).toEqual('Two pair (Q)');
  });

  it('can detect flushes', function() {
    expect(needleFingers.score('5h 7h Jh 10h Qh')).toEqual('Flush (Q)');
    expect(needleFingers.score('5c 7c Jc 10c 9c')).toEqual('Flush (J)');
  });

  it('can detect straights', function() {
    expect(needleFingers.score('5h 6h 7c 8h 4c')).toEqual('Straight (8)');
    expect(needleFingers.score('9s 10s Jc Qc Kc')).toEqual('Straight (K)');
  });

  it('can detect full houses', function() {
    expect(needleFingers.score('5h 4h 5c 5s 4c')).toEqual('Full house (5)');
    expect(needleFingers.score('8s 10s 10c 10d 8c')).toEqual('Full house (10)');
  });

  it('can detect four of a kinds', function() {
    expect(needleFingers.score('7d 7c 7h 7s 2s')).toEqual('Four of a kind (7)');
    expect(needleFingers.score('2d 2c 2s 2h As')).toEqual('Four of a kind (2)');
  });

  it('rejects hands with two of the same card', function() {
    expect(needleFingers.score('5h 5h 5c 5s 5c')).toEqual('Invalid hand');
    expect(needleFingers.score('10s 10s 10c 10d 10c')).toEqual('Invalid hand');
  });

  it('rejects hands with values other than A, 2-10, J, Q, K', function() {
    expect(needleFingers.score('Uh Ph 7c Ns 5c')).toEqual('Invalid hand');
    expect(needleFingers.score('16s 10s 9c 10d 8c')).toEqual('Invalid hand');
  });

  it('rejects hands with suits other than h, c, d, s', function() {
    expect(needleFingers.score('5p 5h 5w 5s 5c')).toEqual('Invalid hand');
    expect(needleFingers.score('10s 10k 10c 10d 10c')).toEqual('Invalid hand');
  });

  it('rejects hands with more or less than 5 cards', function() {
    expect(needleFingers.score('Ah 3s 5c 7d')).toEqual('Invalid hand');
    expect(needleFingers.score('Ah 3s 5c 7d 6h 9c')).toEqual('Invalid hand');
  });
});
