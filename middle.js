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


const middle = function(arr) {
  if (arr.length <= 2) {
    return [];
  }

  if (arr.length % 2 === 1) {
    const middleInd = Math.floor(arr.length / 2);
    return [arr[middleInd]];
  } 

    const leftInd = Math.floor((arr.length -1)/ 2);
    const rightInd = Math.floor(arr.length / 2);
    return [arr[leftInd], arr[rightInd]];
}
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3])
console.log(middle([1, 2]));
console.log(middle([1, 2, 3]));
console.log(middle([1, 2, 3, 4]));
console.log(middle([1, 2, 3, 4, 5]));
console.log(middle([1, 2, 3, 4, 5, 6, 7, 8]));