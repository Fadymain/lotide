const assert = require('chai').assert;
const without = require('../without');

describe("#without", () => {
  it("should return [2, 3] if the 1st array is [1, 2, 3] & 2nd is [1]", () => {
    assert.deepEqual(without([1, 2, 3], [1]), [2, 3]);
  })
});