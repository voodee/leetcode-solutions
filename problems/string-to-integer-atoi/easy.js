/**
 * @param {string} str
 * @return {number}
 */
const limit = 2 ** 31;
const min = -limit;
const max = limit - 1;

const myAtoi = str => Math.max(Math.min(parseInt(str) || 0, max), min);

module.exports = myAtoi;
