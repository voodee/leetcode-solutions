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

module.exports = findMedianSortedArrays;
