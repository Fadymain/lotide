const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe("letterPsitions", () => {
  it("should return the position of each letter in the string in an array", () => {
    assert.deepEqual(letterPositions("lighthouse in the house"), {
      l: [ 0 ],
      i: [ 1, 10 ],
      g: [ 2 ],
      h: [ 3, 5, 13, 15 ],
      t: [ 4, 12 ],
      o: [ 6, 16 ],
      u: [ 7, 17 ],
      s: [ 8, 18 ],
      e: [ 9, 14, 19 ],
      n: [ 11 ]
    });
  })
});