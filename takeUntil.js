const takeUntil = function(array, callback) {
  const results = [];
  for (let arr of array) {
    if (callback(arr)) {
      break;
    }
    results.push(arr)
  }
  return results;
}

module.exports = takeUntil;

// [ 1, 2, 5, 7, 2 ]
// ---
// [ 'I\'ve', 'been', 'to', 'Hollywood' ]