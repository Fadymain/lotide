const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    } 
  } 
  return true;
}

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`${arr1} = ${arr2}`);
  } else {
    console.log(`${arr1} != ${arr2}`);
  }
}

const without = function (arr1, arr2) {
  let newArr = [];
  for (let i = 0; i < arr1.length; i++) {
    if (!arr2.includes(arr1[i])) {
      newArr.push(arr1[i]);
    }
  }
  return newArr;
}
console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
// assertArraysEqual(eqArrays(without(words, ["hello", "world", "lighthouse"])));
assertArraysEqual(eqArrays(without([1, 2, 3], [1]), [2, 3]), true);