const assert = require('chai').assert;
const symbolKeyMirror = require('../dist/index.js').default;

describe('symbol-key-mirror', () => {
  const keys = [
    'KEY_1',
    'KEY_2',
    'KEY_3',
    'KEY_3'
  ];

  const mirorred = symbolKeyMirror(keys)

  it('should returns an object', () => {
    assert.typeOf(mirorred, 'object');
  });

  it('should have symbol as values', () => {
    keys.forEach((key) => {
      assert.typeOf(mirorred[key], 'symbol');
    });
  });

  it('should drop doubled keys', () => {
    assert.equal(Object.keys(mirorred).length, 3);
  })
});
