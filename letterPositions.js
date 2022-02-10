const letterPositions = function(sentence) {
  const results = {}
  const splitStr = sentence.split(" ").join("");
  for (let i = 0; i < splitStr.length; i++) {
    if (results[splitStr[i]]) {
      results[splitStr[i]].push(i)   
    } else {
      const newArr = [];
      newArr.push(i)
        results[splitStr[i]] = newArr;
    }
  }
  return results;
}
console.log(letterPositions("lighthouse in the house"))