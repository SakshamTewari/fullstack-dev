/*
Extend local storage to accept an expiry tume, and expire the entry after that time

    - override the existing local storage method

*/

window.myLocalStorage = {
  getItem(key) {
    let parsedKey = JSON.parse(window.localStorage.getItem(key));

    if (parsedKey) {
      if (parsedKey.expireTime <= Date.now()) {
        window.localStorage.removeItem(key);
        return null;
      }
    } else {
      return parsedKey.data;
    }
  },

  setItem(key, value, maxAge = 30 * 24 * 60 * 60 * 1000) {
    let result = {
      data: value,
    };
    if (maxAge) {
      result.expireTime = Date.now() + maxAge;
    }
    window.localStorage.setItem(key, JSON.stringify(result));
  },

  clear() {
    window.localStorage.clear();
  },
};
