/*
Assume you are an awesome parent and want to give your children some cookies. But, you should give each child at most one cookie.

Each child i has a greed factor g[i], which is the minimum size of a cookie that the child will be content with; and each cookie j has a size s[j]. If s[j] >= g[i], we can assign the cookie j to the child i, and the child i will be content. Your goal is to maximize the number of your content children and output the maximum number.

Example 1:

Input: g = [1,2,3], s = [1,1]
Output: 1
Explanation: You have 3 children and 2 cookies. The greed factors of 3 children are 1, 2, 3. 
And even though you have 2 cookies, since their size is both 1, you could only make the child whose greed factor is 1 content.
You need to output 1.


*/

/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  // Sort the greed factors and the cookie sizes in ascending order
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);

  let i = 0; // Pointer for children (greed factors)
  let j = 0; // Pointer for cookies (sizes)
  let contentChildren = 0;

  // Traverse both arrays
  while (i < g.length && j < s.length) {
    if (s[j] >= g[i]) {
      // Cookie j can satisfy child i
      contentChildren++;
      i++; // Move to the next child
    }
    j++; // Move to the next cookie (whether it's assigned or not)
  }

  return contentChildren; // Return the number of content children
};
