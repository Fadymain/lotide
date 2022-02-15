const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

describe("#eqObjects", () => {
  it("should return true if the keys and the values match", () => {
    assert.deepEqual(eqObjects(ab, ba), true);
    assert.deepEqual(eqObjects(cd, dc), true);

  });

  it("should return false if one of the objects values dont match", () => {
    assert.deepEqual(eqObjects(ab, abc), false);
    assert.deepEqual(eqObjects(cd, cd2), false);
  })
});
