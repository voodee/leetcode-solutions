/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = function(s, numRows) {
  if (numRows < 2) return s;

  let res = {};

  let curRow = 0;
  let goingDown = false;

  for (let i = 0; i < s.length; ++i) {
    const letter = s[i];
    res[curRow] = (res[curRow] || "") + letter;
    if (curRow === 0 || curRow === numRows - 1) goingDown = !goingDown;
    curRow += goingDown ? 1 : -1;
  }

  return Object.values(res).join("");
};

module.exports = convert;
