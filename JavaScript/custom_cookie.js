/* custom - Cookie 

    - extend Object.defineProperty()
    - add custom  'myCookie' that gives us methods get(), set()
    - hint : use Map

*/

// helper function to separate key and value
function separateKeyValue(str) {
  return str.split('=').map((s) => s.trim());
}

// helper function to parse key-value pairs
function parseCookieString(str) {
  const [nameValue, ...rest] = str.split(';');
  const [key, value] = separateKeyValue(nameValue);

  // parse all the options and store it , like max-age
  const options = {};
  for (const option of rest) {
    const [key, value] = separateKeyValue(option);
    options[key] = value;
  }

  return { key, value, options };
}

// enable myCookie
function useCustomCookie() {
  const store = new Map();

  Object.defineProperty(document, 'myCookie', {
    configurable: true,
    get() {
      const cookies = [];
      const time = Date.now();

      // get all the entries from the store
      for (const [name, { value, expires }] of store) {
        if (expires <= time) {
          store.delete(name);
        } else {
          cookies.push(`${name}=${value}`);
        }
      }
      return cookies.join(';');
    },
    set(val) {
      const { key, value, options } = parseCookieString(val);
      let expires = Infinity;
      if (options['max-age']) {
        expires = Date.now() + Number(options['max-age']) * 1000;
      }
      store.set(key, { value, expires });
    },
  });
}

// Test

function test() {
  useCustomCookie();
  document.myCookie = 'Saksham=developer';
  document.myCookie = 'javascript=react;max-age=1';
  console.log('Immediately:', document.myCookie);

  setTimeout(() => {
    console.log('After 2 seconds:', document.myCookie);
  }, 2000);
}

document.getElementById('cookie').addEventListener('click', test);
