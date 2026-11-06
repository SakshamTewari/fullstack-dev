// Leetcode-76

function minimumWindowSubstring(s, t) {
  let map = new Map();

  for (let i = 0; i < t.length; i++) {
    map.set(s[i], (map.get(s[i]) || 0) + 1);
  }

  let high = 0;
  let minLen = 0;

  for(let high = 0; high < s.length; high++){

    
    while(high - low + 1 > )
  }

}
