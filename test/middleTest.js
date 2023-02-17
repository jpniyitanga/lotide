// const assertArraysEqual = require('../assertArraysEqual');
// const eqArrays = require('../eqArrays');
// const middle = require('../middle');

// console.log(middle([0,1, 3, 4]));


const assert = require('chai').assert;
const middle   = require('../middle');

describe("#middle", () => {
  it("returns [1, 3] for [0, 1, 3, 4]", () => {
    assert.deepEqual(middle([0, 1, 3, 4]), [1, 3]);
  });

  
});
