/*
Given a word pat and a text txt. Return the count of the occurrences of anagrams of the word in the text.

Example 1:

Input: txt = "forxxorfxdofr", pat = "for"
Output: 3
Explanation: for, orf and ofr appears in the txt, hence answer is 3.

Example 2:
Input: txt = "aabaabaa", pat = "aaba"
Output: 4
Explanation: aaba is present 4 times in txt.
*/

function occurences_of_anagram(txt, pat) {
  let i = 0,
    j = 0;
  let ans = 0;
  let k = pat.length;

  // Characters frequency map
  let freq = {};
  for (let ch of pat) {
    freq[ch] = (freq[ch] || 0) + 1;
  }

  // Count of distinct characters in pat
  let count = Object.keys(freq).length;

  while (j < txt.length) {
    let ch = txt[j];

    // If current char belongs to pattern, decrease its frequency
    if (freq[ch] !== undefined) {
      freq[ch]--;
      if (freq[ch] === 0) count--; // one character fully matched
    }

    // Expand window until k
    if (j - i + 1 < k) {
      j++;
    } else if (j - i + 1 === k) {
      if (count === 0) {
        ans++; // found an anagram;
      }

      // Before sliding, restore the frequency of leaving char
      let leaving = txt[i];
      if (freq[leaving] !== undefined) {
        if (freq[leaving] === 0) {
          count++; // no longer fully matched
        }
        freq[leaving]++;
      }
      i++;
      j++;
    }
  }
  return ans;
}

// Test
console.log(occurences_of_anagram('forxxorfxdofr', 'for'));

/*
When a character enters the window:
We decrease its frequency (freq[ch]--).
If it hits 0, that means we have matched all required instances of this character → we decreased count.

When the same character leaves the window:
We need to increase its frequency back (freq[leaving]++).
If its frequency was zero before leaving, that means it was fully matched. By removing it, we broke the match → so we increase count.
*/
