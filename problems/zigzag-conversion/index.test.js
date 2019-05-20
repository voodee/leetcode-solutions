const convertMedium = require("./medium");
const convertEasy = require("./easy");

describe("ZigZag Conversion", function() {
  [["medium", convertMedium], ["easy", convertEasy]].forEach(
    ([nameFunction, convert]) => {
      describe(`${nameFunction}`, () => {
        [
          ["A", 1, "A"],
          ["PAYPALISHIRING", 3, "PAHNAPLSIIGYIR"],
          ["PAYPALISHIRING", 4, "PINALSIGYAHRPI"],
          ["AB", 2, "AB"],
          ["AB", 1, "AB"],
          ["ABC", 1, "ABC"],
          ["ABCD", 3, "ABDC"]
        ].forEach(([value1, value2, result]) => {
          it(`if put "${value1}", "${value2}" then return ${result}`, () => {
            expect(convert(value1, value2)).toEqual(result);
          });
        });
      });
    }
  );
});
