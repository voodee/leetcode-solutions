/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = s => {
  let pattern = "";
  for (let i = 0; i < s.length; ++i) pattern += "#" + s[i];
  pattern += "#";

  const palindrome = [];
  let center = 0,
    boundary = 0,
    maxLen = 0,
    resCenter = 0;

  for (let i = 1; i < pattern.length - 1; ++i) {
    let iMirror = 2 * center - i;

    palindrome[i] =
      boundary > i ? Math.min(boundary - i, palindrome[iMirror]) : 0;

    while (
      i - 1 - palindrome[i] >= 0 &&
      i + 1 + palindrome[i] <= pattern.length - 1 &&
      pattern[i + 1 + palindrome[i]] == pattern[i - 1 - palindrome[i]]
    )
      palindrome[i]++;

    if (i + palindrome[i] > boundary) {
      center = i;
      boundary = i + palindrome[i];
    }

    if (palindrome[i] > maxLen) {
      maxLen = palindrome[i];
      resCenter = i;
    }
  }

  return s.substr((resCenter - maxLen) >> 1, maxLen);
};

module.exports = longestPalindrome;
