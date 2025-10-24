function frequencySort(arr) {
  let freqMap = new Map();
  for (let num of arr) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }
  console.log(freqMap);
  console.log(...freqMap.entries());
  // convert to array and sort by frequency
  const sortedArr = [...freqMap.entries()].sort((a, b) => b[1] - a[1]);
  console.log(sortedArr);

  // rebuild array based on frequency
  const result = [];
  for (let [num, freq] of sortedArr) {
    for (let i = 0; i < freq; i++) {
      result.push(num);
    }
  }

  return result;
}

console.log(frequencySort([1, 1, 2, 2, 2, 2, 3]));
