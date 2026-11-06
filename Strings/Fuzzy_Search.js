/* Implement a function that performs fuzzy string matching,

    - it accepts an array of strings and a query as input and returns list of strings that matches.
    - hint: sliding window


*/

const fuzzySearch = function (str, query) {
  str = str.toLowerCase();
  query = query.toLowerCase();

  let i = 0,
    lastSearched = -1,
    current = query[i];

  while (current) {
    if (!~(lastSearched = str.indexOf(current, lastSearched + 1))) return false;
    //indexOf() method returns the first index at which a given value (substring or item) can be found in a string or array.
    //If the value is not found, it returns -1.
    //Takes optional second argument to start search from a specific index
    current = query[++i];
  }
  return true;
};

const search = function (arr, query) {
  return arr.filter((e) => fuzzySearch(e, query));
};
