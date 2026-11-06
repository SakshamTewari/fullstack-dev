const instanceOf = (obj, target) => {
  // if provided input is not object type, return false
  if (obj === null || typeof obj !== 'object') {
    return false;
  }

  // keep checking in the prototype chain
  while (obj) {
    if (obj.__proto__ === target.prototype) {
      return true;
    }
    obj = obj.__proto__;
  }
  return false;
};
