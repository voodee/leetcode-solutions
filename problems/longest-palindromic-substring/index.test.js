const longestPalindromeEasy = require("./easy");
const longestPalindromeHard = require("./hard");

describe("Longest Palindromic Substring", function() {
  [["easy", longestPalindromeEasy], ["hard", longestPalindromeHard]].forEach(
    ([nameFunction, longestPalindrome]) => {
      describe(`${nameFunction}`, () => {
        [
          ["babad", "bab"],
          ["cbbd", "bb"],
          ["a", "a"],
          ["ac", "a"],
          ["bb", "bb"],
          ["ac", "a"],
          ["ccc", "ccc"],
          ["", ""]
        ].forEach(([value, result]) => {
          it(`if put "${value}" then return ${result}`, () => {
            expect(longestPalindrome(value)).toEqual(result);
          });
        });
      });
    }
  );
});
