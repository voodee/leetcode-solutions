# Median of Two Sorted Arrays [(leetcode)](https://leetcode.com/problems/median-of-two-sorted-arrays/)

There are two sorted arrays **nums1** and **nums2** of size m and n respectively.

Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

You may assume **nums1** and **nums2** cannot be both empty.

## Example 1

```
nums1 = [1, 3]
nums2 = [2]

The median is 2.0
```

## Example 2

```
nums1 = [1, 2]
nums2 = [3, 4]

The median is (2 + 3)/2 = 2.5
```

## Solution №1 (medium)

Runtime: **96 ms**, faster than **99.66%** of JavaScript online submissions for Median of Two Sorted Arrays.
Memory Usage: **38.6 MB**, less than **95.34%** of JavaScript online submissions for Median of Two Sorted Arrays.

```javascript
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = (nums1, nums2) => {
  const length = nums1.length + nums2.length;
  const isEven = length % 2;
  let medianPrev;
  let median;

  const numberIterations = Math.round(length / 2) + (isEven ? 0 : 1);
  for (let i = 0, cursor1 = 0, cursor2 = 0; i < numberIterations; ++i) {
    medianPrev = median;
    if (
      (nums1[cursor1] < nums2[cursor2] && nums1[cursor1]) ||
      !(cursor2 in nums2)
    ) {
      median = nums1[cursor1];
      ++cursor1;
    } else {
      median = nums2[cursor2];
      ++cursor2;
    }
  }

  if (isEven) {
    return median;
  }

  return (medianPrev + median) / 2;
};
```

complexity: O(log (m+n))

## Solution №2 (hard) / Binary Search

[![Binary Search](https://img.youtube.com/vi/LPFhl65R7ww/0.jpg)](https://www.youtube.com/watch?v=LPFhl65R7ww)

Runtime: **108 ms**, faster than **98.20%** of JavaScript online submissions for Median of Two Sorted Arrays.
Memory Usage: **39.7 MB**, less than **30.92%** of JavaScript online submissions for Median of Two Sorted Arrays.

```javascript
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = (nums1, nums2) => {
  const length1 = nums1.length;
  const length2 = nums2.length;

  if (length1 > length2) return findMedianSortedArrays(nums2, nums1);

  let min = 0;
  let max = length1;
  const halfLen = (length1 + length2 + 1) >> 1;

  while (min <= max) {
    const i = (min + max) >> 1;
    const j = halfLen - i;

    if (i < max && nums2[j - 1] > nums1[i]) {
      min = i + 1;
    } else if (i > min && nums1[i - 1] > nums2[j]) {
      max = i - 1;
    } else {
      const maxLeft = Math.max(
        nums1[i - 1] || nums2[j - 1],
        nums2[j - 1] || nums1[i - 1]
      );
      if ((length1 + length2) % 2) return maxLeft;

      return (
        (maxLeft + Math.min(nums1[i] || nums2[j], nums2[j] || nums1[i])) / 2
      );
    }
  }
};
```

complexity: O(min(m, n))
