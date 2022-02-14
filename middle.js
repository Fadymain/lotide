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

module.exports = middle;