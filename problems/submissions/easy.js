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

module.exports = lengthOfLongestSubstring;
