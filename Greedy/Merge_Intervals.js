/*
Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals and return an array of the non-overlapping intervals that cover all the intervals in the input.

Input : intervals=[[1,3],[2,6],[8,10],[15,18]]
Output : [[1,6],[8,10],[15,18]]
Explanation : Since intervals [1,3] and [2,6] are overlapping we can merge them to form [1,6] intervals.
*/

function mergeIntervals(intervals) {
  if (intervals.length <= 1) return intervals;

  // Sort on start time
  intervals.sort((a, b) => a[0] - b[0]);

  let result = [];
  let currentInterval = intervals[0];

  for (let i = 1; i < intervals.length; i++) {
    if (currentInterval[1] >= intervals[i][0]) {
      // merge
      currentInterval[1] = Math.max(currentInterval[1], intervals[i][1]);
    } else {
      result.push(currentInterval);
      currentInterval = intervals[i];
    }
  }
  result.push(currentInterval);
  return result;
}

// Test
console.log(
  mergeIntervals([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ]),
);
