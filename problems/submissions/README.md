# Longest Substring Without Repeating Characters [(leetcode)](https://leetcode.com/problems/longest-substring-without-repeating-characters/)

Given a string, find the length of the **longest substring** without repeating characters.

## Example 1

```
Input: "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
```

## Example 2

```
Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
```

## Example 3

```
Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
             Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
```

## Solution №1 (easy)

Runtime: **380 ms**, faster than **32%** of JavaScript online submissions for Add Two Numbers.

Memory Usage: **58.5 MB**, less than **24.51%** of JavaScript online submissions for Add Two Numbers.

```javascript
/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function(s) {
  let maxLength = 0;
  let currentLength = 0;
  let hash = {};

  for (let i = 0; i < s.length; ++i) {
    const letter = s[i];
    if (letter in hash) {
      if (maxLength < currentLength) {
        maxLength = currentLength;
      }
      i = hash[letter];
      hash = {};
      currentLength = 0;
    } else {
      hash[letter] = i;
      ++currentLength;
    }
  }

  return Math.max(maxLength, currentLength);
};
```

complexity: O(n\*3)

## Solution №2 (meduim)

Runtime: **84 ms**, faster than **98.29%** of JavaScript online submissions for Longest Substring Without Repeating Characters.
Memory Usage: **39.6 MB**, less than **74.63%** of JavaScript online submissions for Longest Substring Without Repeating Characters.

```javascript
/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = s => {
  let maxLength = 0;
  let hash = {};
  let left = 0;

  for (let i = 0; i < s.length; ++i) {
    const letter = s[i];
    if (hash[letter] > left) {
      left = hash[letter];
    }

    hash[letter] = i + 1;
    const currentLength = i + 1 - left;
    if (maxLength < currentLength) {
      maxLength = currentLength;
    }
  }

  return maxLength;
};
```

complexity: O(n)
