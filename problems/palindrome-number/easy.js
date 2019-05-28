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

module.exports = isPalindrome;
