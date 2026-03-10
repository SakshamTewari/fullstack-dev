/*
Given two integers start and goal. Flip the minimum number of bits of start integer to convert it into goal integer.
A bits flip in the number val is to choose any bit in binary representation of val and flipping it from either 0 to 1 or 1 to 0.

Input : start = 10 , goal = 7
Output : 3
Explanation : The binary representation of 10 is "1010". The binary representation of 7 is "111". If we flip the underlined bits in binary representation of 10 then we will obtain our goal.
*/

function minBitsFlips(start, goal) {
  let diff = start ^ goal;
  let count = 0;

  while (diff > 0) {
    count += diff & 1;
    diff >>= 1;
  }
  return count;
}

// Test
console.log(minBitsFlips(10, 7));
