const countLetters = function(strings)  {
  let result = {}
  let spltStr = strings.split(" ").join("");
  for (let i = 0; i < spltStr.length; i++) {
    if (result[spltStr[i]]) {
      result[spltStr[i]] += 1;
    } else {
      result[spltStr[i]] = 1;
    }
  }
  return result;
}

module.exports = countLetters;