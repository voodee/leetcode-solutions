const myAtoiEasy = require("./easy");

describe("String to Integer (atoi)", function() {
  [["easy", myAtoiEasy]].forEach(([nameFunction, myAtoi]) => {
    describe(`${nameFunction}`, () => {
      [["42", 42], ["   -42", -42], ["4193 with words", 4193]].forEach(
        ([value1, result]) => {
          it(`if put "${value1}" then return ${result}`, () => {
            expect(myAtoi(value1)).toEqual(result);
          });
        }
      );
    });
  });
});
