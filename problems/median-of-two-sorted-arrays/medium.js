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

module.exports = findMedianSortedArrays;
