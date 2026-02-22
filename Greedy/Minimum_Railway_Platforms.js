/*
We are given two arrays that represent the arrival and departure times of trains that stop at the platform. 
We need to find the minimum number of platforms needed at the railway station so that no train has to wait.

Input:  N=6, 
arr[] = {9:00, 9:45, 9:55, 11:00, 15:00, 18:00}
dep[] = {9:20, 12:00, 11:30, 11:50, 19:00, 20:00}
Output: 3
Explanation: There are at-most three trains at a time. The train at 11:00 arrived but the trains which had arrived at 9:45 and 9:55 have still not departed. So, we need at least three platforms here.
*/

function minPlatforms(arr, dep) {
  arr.sort();
  dep.sort();

  let platforms = 1; // denotes number of trains on the platform at a time
  let maxPlatforms = 1;
  let i = 1;
  j = 0;

  while (i < arr.length && j < dep.length) {
    if (arr[i] < dep[j]) {
      platforms++;
      i++; // to check if next train is also intersecting
    } else {
      platforms--;
      j++; // as last departure does not matter then;
    }

    maxPlatforms = Math.max(maxPlatforms, platforms);
  }
  return maxPlatforms;
}

// Test
let arr = ["09:00", "09:45", "09:55", "11:00", "15:00", "18:00"];
let dep = ["09:20", "12:00", "11:30", "11:50", "19:00", "20:00"];

console.log(minPlatforms(arr, dep));
