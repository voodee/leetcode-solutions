# Reverse Integer [(leetcode)](https://leetcode.com/problems/reverse-integer/)

Given a 32-bit signed integer, reverse digits of an integer.

## Example 1

```
Input: 123
Output: 321
```

## Example 2

```
Input: -123
Output: -321
```

## Example 3

```
Input: 120
Output: 21
```

**Note:** Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−2^31, 2^31 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

## Solution

Runtime: **64 ms**, faster than **99.45%** of JavaScript online submissions for Reverse Integer.
Memory Usage: **35.6 MB**, less than **90.50%** of JavaScript online submissions for Reverse Integer.

```javascript
const limit = 2 ** 31;
const min = -limit;
const max = limit - 1;

/**
 * @param {number} x
 * @return {number}
 */
const reverse = x => {
  const result =
    parseInt(
      x
        .toFixed(0)
        .split("")
        .reverse()
        .join("")
    ) * Math.sign(x);

  if (result < min || result > max) return 0;

  return result;
};
```

complexity: O(len(x))
