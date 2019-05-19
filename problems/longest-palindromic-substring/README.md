# Longest Palindromic Substring [(leetcode)](https://leetcode.com/problems/longest-palindromic-substring/)

Given a string **s**, find the longest palindromic substring in **s**. You may assume that the maximum length of **s** is 1000.

## Example 1

```
Input: "babad"
Output: "bab"
Note: "aba" is also a valid answer.
```

## Example 2

```
Input: "cbbd"
Output: "bb"
```

## Solution №1 (easy)

Runtime: **116 ms**, faster than **63.32%** of JavaScript online submissions for Longest Palindromic Substring.
Memory Usage: **37.7 MB**, less than **37.91%** of JavaScript online submissions for Longest Palindromic Substring.

```javascript
/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = s => {
  let strMax = s[0] || "";
  for (let i = 0, j = 1; i < s.length - 1; ++i, ++j) {
    const variants = [];

    if (s[i] === s[j]) variants.push([i, j]);
    if (s[i - 1] === s[j]) variants.push([i - 1, j]);

    variants.forEach(([left, right]) => {
      while (s[left] === s[right] && ~left) {
        --left;
        ++right;
      }

      if (right - left - 1 > strMax.length) {
        strMax = s.slice(left + 1, right);
      }
    });
  }
  return strMax;
};
```

complexity: O(n^2)

## Solution №2 (hard) / Manacher's Algorithm

[![Manacher's Algorithm](https://img.youtube.com/vi/V-sEwsca1ak/0.jpg)](https://www.youtube.com/watch?v=V-sEwsca1ak)

Runtime: **56 ms**, faster than **99.93%** of JavaScript online submissions for Longest Palindromic Substring.
Memory Usage: **37.5 MB**, less than **42.19%** of JavaScript online submissions for Longest Palindromic Substring.

```javascript
/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = s => {
  let pattern = "";
  for (let i = 0; i < s.length; ++i) pattern += "#" + s[i];
  pattern += "#";

  const palindrome = [];
  let center = 0,
    boundary = 0,
    maxLen = 0,
    resCenter = 0;

  for (let i = 1; i < pattern.length - 1; ++i) {
    let iMirror = 2 * center - i;

    palindrome[i] =
      boundary > i ? Math.min(boundary - i, palindrome[iMirror]) : 0;

    while (
      i - 1 - palindrome[i] >= 0 &&
      i + 1 + palindrome[i] <= pattern.length - 1 &&
      pattern[i + 1 + palindrome[i]] == pattern[i - 1 - palindrome[i]]
    )
      palindrome[i]++;

    if (i + palindrome[i] > boundary) {
      center = i;
      boundary = i + palindrome[i];
    }

    if (palindrome[i] > maxLen) {
      maxLen = palindrome[i];
      resCenter = i;
    }
  }

  return s.substr((resCenter - maxLen) >> 1, maxLen);
};
```

complexity: O(n)
