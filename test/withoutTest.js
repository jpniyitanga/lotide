const without = require('../without');
const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');

const assert = require('chai').assert;

describe("#without", () => {
  it("returns ['lighthouse'] for ['hello', 'world', 'lighthouse']", () => {
    assert.deepEqual(without(['hello', 'world', 'lighthouse'], ['hello', 'world']), ['lighthouse']);
  });

  it("returns ['lighthouse', labs] for ['hello', 'world', 'lighthouse', 'labs']", () => {
    assert.deepEqual(without(['hello', 'world', 'lighthouse', 'labs'], ['hello', 'world']), ['lighthouse', 'labs']);
  });
});