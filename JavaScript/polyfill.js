/*
    Polyfill
    -A polyfill is custom code that adds support for a feature that a browser or JavaScript engine does not support.
    This is extremely important for:
        older browsers (IE)
        older mobile browsers
        supporting modern JS features in legacy environments
*/

// .map() polyfill
if (!Array.prototype.map) {
  Array.prototype.map = function (callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
      result.push(callback(this[i], i, this));
    }
    return result;
  };
}

// .filter()
Array.prototype.filter = function (callback) {
  let result = [];

  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      result.push(this[i]);
    }
  }
  return result;
};

// promise
window.Promise = function (callback) {
  let onResolve, onReject;

  function resolve(value) {
    onResolve(value);
  }

  function reject(value) {
    onReject(value);
  }

  this.then = function (cb) {
    onResolve = cb;
    return this;
  };

  this.catch = function (cb) {
    onReject = cb;
    return this;
  };

  callback(resolve, reject);
};
