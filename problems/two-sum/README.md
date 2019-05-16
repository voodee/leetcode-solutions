# Two Sum

Given an array of integers, return **indices** of the two numbers such that they add up to a specific target.

You may assume that each input would have **exactly** one solution, and you may not use the same element twice.

## Example

```
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1]
```

## Solution

Runtime: **52 ms**, faster than **99.46%**of JavaScript online submissions for Two Sum.
Memory Usage: **35.4 MB**, less than **25.35%** of JavaScript online submissions for Two Sum.

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
  const hash = {};
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num in hash) return [hash[num], i];
    hash[target - num] = i;
  }
};
```

complexity: O(n)
