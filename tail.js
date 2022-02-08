const tail = function(arr) {
  return arr.shift();
};
const words = ["Yo Yo", "Lighthouse", "Labs"];

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("Assertion Passed: [actual] === [expected]");
  } else {
    console.log("Assertion Failed: [actual] !== [expected]");
  }
};
tail(words);
assertEqual(words.length, 3);