# Palindrome Number [(leetcode)](https://leetcode.com/problems/palindrome-number/)

Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

## Example 1

```
Input: 121
Output: true
```

## Example 2

```
Input: -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
```

## Example 3

```
Input: 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
```

**Follow up:**

Coud you solve it without converting the integer to a string?

## Solution

Runtime: **168 ms**, faster than **99.38%** of JavaScript online submissions for Palindrome Number.
Memory Usage: **45.4 MB**, less than **71.09%** of JavaScript online submissions for Palindrome Number.

```javascript
/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = x => {
  const str = `${x}`;
  const length = str.length;

  for (let i = 0; i < length >> 1; ++i) {
    if (str[i] !== str[length - 1 - i]) return false;
  }

  return true;
};
```

complexity: O(log(len(n)))
