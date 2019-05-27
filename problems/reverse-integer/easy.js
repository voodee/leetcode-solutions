/**
 * @param {number} x
 * @return {number}
 */

const limit = 2 ** 31;
const min = -limit;
const max = limit - 1;

const reverse = x => {
  const result =
    parseInt(
      x
        .toFixed(0)
        .split("")
        .reverse()
        .join("")
    ) * Math.sign(x);

  if (result < min || result > max) return 0;

  return result;
};

module.exports = reverse;
