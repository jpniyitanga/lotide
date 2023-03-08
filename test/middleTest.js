const assert = require('chai').assert;
const middle   = require('../middle');

describe("#middle", () => {
  it("returns [1, 3] for [0, 1, 3, 4]", () => {
    assert.deepEqual(middle([0, 1, 3, 4]), [1, 3]);
  });

  it("returns [] for [0, 1]", () => {
    assert.deepEqual(middle([0, 1]), []);
  });

  it("returns [] for [1]", () => {
    assert.deepEqual(middle([1]), []);
  });
});
