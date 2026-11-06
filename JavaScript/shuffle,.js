/* Fisher-Yates Suffle

 unbiased algorithm to shuffle elements in a list. It works by going from the end of the array to the beginning, 
 and swapping each element with another random element that comes before it (including itself).

*/

function shuffle(arr) {
  const result = [...arr];
  for (let i = arr.length - 1; i > 0; i--) {
    //Math.random() returns a number between 0 and 1, so multiplying by i + 1 gives us a valid range
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

//Test
let arr = [1, 2, 3, 4, 5, 6];
console.log(shuffle(arr));
console.log(shuffle(arr));
console.log(shuffle(arr));
