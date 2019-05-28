const isPalindromeEasy = require("./easy");
const isPalindromeMedium = require("./medium");

describe("Palindrome Number", function() {
  [["easy", isPalindromeEasy], ["medium", isPalindromeMedium]].forEach(
    ([nameFunction, isPalindrome]) => {
      describe(`${nameFunction}`, () => {
        [[121, true], [-121, false], [10, false]].forEach(
          ([value1, result]) => {
            it(`if put "${value1}" then return ${result}`, () => {
              expect(isPalindrome(value1)).toEqual(result);
            });
          }
        );
      });
    }
  );
});
