const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

console.log(countLetters("lighthouse in the house"));