/*
Given two arrays start[] and finish[], representing the start and finish times of activities. 
A person can perform only one activity at a time, and an activity can be performed only if its start time is greater than the finish time of the last chosen activity.
Find the maximum number of activities that can be performed without overlapping.

Examples:  

Input: start[] = [1, 3, 0, 5, 8, 5], finish[] = [2, 4, 6, 7, 9, 9]
Output: 4
Explanation: A person can perform at most four activities. The maximum set of activities that can be performed is {0, 1, 3, 4} (these are the indexes in the start[] and finish[] arrays).

Input: start[] = [10, 12, 20], finish[] = [20, 25, 30]
Output: 1
Explanation: A person can perform at most one activity.
*/

// Greedy : using sort
function activitySelection(start, finish) {
  let arr = [];
  for (let i = 0; i < start.length; i++) {
    arr.push([start[i], finish[i]]);
  }

  arr.sort((a, b) => a[1] - b[1]);

  let count = 1; // atleast 1 activity can be performed

  let lastFinishIndex = 0;

  for (let i = 1; i < arr.length; i++) {
    // check if current activity starts after last selected activity finishes
    if (arr[i][0] > arr[lastFinishIndex][1]) {
      count++;
      lastFinishIndex = i;
    }
  }
  return count;
}

// Test
console.log(activitySelection([1, 3, 0, 5, 8, 5], [2, 4, 6, 7, 9, 9]));
