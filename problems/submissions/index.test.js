const lengthOfLongestSubstringMedium = require("./medium");
const lengthOfLongestSubstringEasy = require("./easy");

describe("Longest Substring Without Repeating Characters", function() {
  [
    ["medium", lengthOfLongestSubstringMedium],
    ["easy", lengthOfLongestSubstringEasy]
  ].forEach(([nameFunction, lengthOfLongestSubstring]) => {
    describe(`${nameFunction}`, () => {
      [
        ["abcabcbb", 3],
        ["bbbbb", 1],
        ["pwwkew", 3],
        ["abcabcbb", 3],
        [" ", 1],
        ["aab", 2],
        ["dvdf", 3],
        ["", 0],
        ["au", 2],
        ["aa", 1]
      ].forEach(([value, result]) => {
        it(`if put "${value}" then return ${result}`, () => {
          expect(lengthOfLongestSubstring(value)).toEqual(result);
        });
      });
    });
  });
});
