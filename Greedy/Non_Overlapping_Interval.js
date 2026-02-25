/*
Given an array of N intervals in the form of (start[i], end[i]), where start[i] is the starting point of the interval and end[i] is the ending point of the interval, 
return the minimum number of intervals that need to be removed to make the remaining intervals non-overlapping. 

Input: Intervals = [ [1, 2], [2, 3], [3, 4], [1, 3] ]  
Output: 1  
Explanation: You can remove the interval [1, 3] to make the remaining intervals non-overlapping.

Input: Intervals = [ [1, 3], [1, 4], [3, 5], [3, 4], [4, 5] ]  
Output: 2  
Explanation: You can remove the intervals [1, 4] and [3, 5] to make the rest non-overlapping.
*/

function eraseOverlappingIntervals(intervals) {
  if (intervals.length === 0) return 0;
  // Sort by end time
  intervals.sort((a, b) => a[1] - b[1]);

  let pickCount = 1;
  let lastEnd = intervals[0][1];

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] >= lastEnd) {
      pickCount++;
      lastEnd = intervals[i][1];
    }
  }
  return intervals.length - pickCount;
}

// Test
console.log(
  eraseOverlappingIntervals([
    [1, 3],
    [1, 4],
    [3, 5],
    [3, 4],
    [4, 5],
  ]),
);
