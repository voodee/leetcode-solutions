# ZigZag [(leetcode)](https://leetcode.com/problems/zigzag-conversion/)

The string **"PAYPALISHIRING"** is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

```
P   A   H   N
A P L S I I G
Y   I   R
```

And then read line by line: **"PAHNAPLSIIGYIR"**

Write the code that will take a string and make this conversion given a number of rows:

```
string convert(string s, int numRows);
```

## Example 1

```
Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"
```

## Example 2

```
Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
Explanation:

P     I    N
A   L S  I G
Y A   H R
P     I
```

## Solution 1

Runtime: **80 ms**,
Memory Usage: **38.2 MB**,

```javascript
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = function(s, numRows) {
  if (numRows < 2) return s;

  let res = {};

  let curRow = 0;
  let goingDown = false;

  for (let i = 0; i < s.length; ++i) {
    const letter = s[i];
    res[curRow] = (res[curRow] || "") + letter;
    if (curRow === 0 || curRow === numRows - 1) goingDown = !goingDown;
    curRow += goingDown ? 1 : -1;
  }

  return Object.values(res).join("");
};
```

complexity: O(n)

## Solution 2

Runtime: **76 ms**,
Memory Usage: **38.3 MB**,

```javascript
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = function(s, numRows) {
  if (numRows < 2) return s;

  const length = s.length;
  let res = "";
  const step = numRows * 2 - 2;

  for (let i = 0; i < numRows; ++i) {
    for (let j = 0; j + i < length; j += step) {
      res += s[j + i];
      if (i !== 0 && i !== numRows - 1 && j + step - i < length)
        res += s[j + step - i];
    }
  }

  return res;
};
```

complexity: O(n)
