/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
  const hash = {};
  // for (let i in nums) {
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num in hash) return [hash[num], i];
    hash[target - num] = i;
  }
};

module.exports = twoSum;
