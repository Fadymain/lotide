const middle = require('../middle');
const assert = require('chai').assert;


describe("#middle", () => {
  it("should return an empty array if array value is < 3", () => {
    assert.deepEqual(middle([1, 2]), []);
  });

  it("should return the middle number if array lenght is odd", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

  it("should return the middle two integers if the array lenght is even", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6, 7, 8]), [4, 5])
  })
});