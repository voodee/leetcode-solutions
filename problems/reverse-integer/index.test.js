const reverseEasy = require("./easy");

describe("Reverse Integer", function() {
  [["easy", reverseEasy]].forEach(([nameFunction, reverse]) => {
    describe(`${nameFunction}`, () => {
      [[123, 321], [-123, -321], [120, 21]].forEach(([value1, result]) => {
        it(`if put "${value1}" then return ${result}`, () => {
          expect(reverse(value1)).toEqual(result);
        });
      });
    });
  });
});
