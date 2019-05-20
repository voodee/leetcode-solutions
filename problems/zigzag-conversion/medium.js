/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = function(s, numRows) {
  if (numRows < 2) return s;

  const length = s.length;
  let res = "";
  const step = numRows * 2 - 2;

  for (let i = 0; i < numRows; ++i) {
    for (let j = 0; j + i < length; j += step) {
      res += s[j + i];
      if (i !== 0 && i !== numRows - 1 && j + step - i < length)
        res += s[j + step - i];
    }
  }

  return res;
};

module.exports = convert;
