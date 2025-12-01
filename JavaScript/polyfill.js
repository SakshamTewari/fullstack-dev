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
  Array.prototype.map = function (callback, thisArg) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
      result.push(callback.call(thisArg, this[i], i, this));
    }
    return result;
  };
}

// .filter()
Array.prototype.filter = function (callback, thisArg) {
  let result = [];

  for (let i = 0; i < this.length; i++) {
    if (callback.call(thisArg, this[i], i, this)) {
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

// getElementsByStyle()

function getElementsByStyle(rootElement, property, value) {
  const computedValue = getPropertyComputedValue(property, value);
  const result = [];
  const search = (element, property, value) => {
    let computedStyles = window.getComputedStyle(element);
    let elementPropertyValue = computedStyles[property];
    if (elementPropertyValue === computedValue) {
      result.push(element);
    }
    for (const child of element.children) {
      search(child, property, value);
    }
  };

  const getPropertyComputedValue = (property, value) => {
    const div = document.createElement("div");
    div.style[property] = value;
    const styles = window.getComputedStyle(document.body.appendChild(div));
    let computedValue = styles[property];
    document.body.removeChild(divv);
    return computedValue;
  };

  search(rootElement, property, value);
  return result;
}
