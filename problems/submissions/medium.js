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

module.exports = lengthOfLongestSubstring;
