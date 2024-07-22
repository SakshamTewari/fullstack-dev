/*
You are keeping the scores for a baseball game with strange rules. At the beginning of the game, you start with an empty record.

You are given a list of strings operations, where operations[i] is the ith operation you must apply to the record and is one of the following:

An integer x.
Record a new score of x.
'+'.
Record a new score that is the sum of the previous two scores.
'D'.
Record a new score that is the double of the previous score.
'C'.
Invalidate the previous score, removing it from the record.
Return the sum of all the scores on the record after applying all the operations.

The test cases are generated such that the answer and all intermediate calculations fit in a 32-bit integer and that all operations are valid.

 

Example 1:

Input: ops = ["5","2","C","D","+"]
Output: 30
Explanation:
"5" - Add 5 to the record, record is now [5].
"2" - Add 2 to the record, record is now [5, 2].
"C" - Invalidate and remove the previous score, record is now [5].
"D" - Add 2 * 5 = 10 to the record, record is now [5, 10].
"+" - Add 5 + 10 = 15 to the record, record is now [5, 10, 15].
The total sum is 5 + 10 + 15 = 30.
*/
/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function (operations) {
  let result = [];
  for (let op of operations) {
    if (op === '+') {
      let l = result.length - 1;
      result.push(result[l] + result[l - 1]);
    } else if (op === 'D') {
      let l = result.length - 1;
      result.push(2 * result[l]);
    } else if (op === 'C') {
      result.pop();
    } else {
      result.push(parseInt(op));
    }
  }
  console.log(result);
  let sum = 0;
  for (let i = 0; i < result.length; i++) {
    sum += result[i];
  }
  return sum;
};
