/* filter an array of objects based on value or index 

    - Check if filter is string, then loop through object values and return that object
    - if filter is an index, return arr[index]
    - else return undefined

*/

const filterObject = (arr, filter) => {
  if (typeof filter === 'string') {
    for (const entry of arr) {
      for (const [key, val] of Object.entries(entry)) {
        if (val === filter) return entry;
      }
    }
  } else if (filter in arr) {
    return arr[filter];
  } else {
    return undefined;
  }
};

// Test

const arr = [
  { name: 'Saksham', id: '1' },
  { name: 'Tewari', id: '2' },
];

console.log(filterObject(arr, 'Tewari'));
console.log(filterObject(arr, 0));
