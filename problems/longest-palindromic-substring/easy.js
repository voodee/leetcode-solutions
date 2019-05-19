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

module.exports = longestPalindrome;
