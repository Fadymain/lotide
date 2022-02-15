const findKey = function(objects, callback) {
  for (let object in objects) {
    if (callback(objects[object])) {
      return object;
    }
  }
};

module.exports = findKey;