const findKeyByValue = function(object, value) {
  for (let obj in object) {
    if (object[obj] === value) {
      return obj;
    }
  }
}




module.exports = findKeyByValue;