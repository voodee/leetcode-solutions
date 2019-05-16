const twoSumMedium = require("./medium");

describe("Two Sum", () => {
  it("if put [2,7,11,15], 9 then return [0,1]", () => {
    expect(twoSumMedium([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });
});
