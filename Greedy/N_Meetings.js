/*
There is one meeting room in a firm. You are given two arrays, start and end each of size N. For an index ‘i’, start[i] denotes the starting time of the ith meeting while end[i] will denote the ending time of the ith meeting. 
Find the maximum number of meetings that can be accommodated if only one meeting can happen in the room at a particular time. 
Print the order in which these meetings will be performed.

Input: N = 6,  start[] = {1,3,0,5,8,5}, end[] =  {2,4,5,7,9,9}
Output: [1, 2, 4, 5]
*/

function maxMeetings(start, end) {
  let meetings = [];

  for (let i = 0; i < start.length; i++) {
    meetings.push({ start: start[i], end: end[i], index: i + 1 });
  }

  // Sort by end time
  meetings.sort((a, b) => a.end - b.end);

  let result = [];
  let lastEnd = -1;

  for (let meeting of meetings) {
    if (meeting.start > lastEnd) {
      result.push(meeting.index);
      lastEnd = meeting.end;
    }
  }
  return result;
}

// Test
let start = [1, 3, 0, 5, 8, 5];
let end = [2, 4, 6, 7, 9, 9];
console.log(maxMeetings(start, end));
