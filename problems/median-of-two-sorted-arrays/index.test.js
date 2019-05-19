const findMedianSortedArraysMedium = require("./medium");
const findMedianSortedArraysHard = require("./hard");

describe("Median of Two Sorted Arrays", function() {
  [
    ["medium", findMedianSortedArraysMedium],
    ["hard", findMedianSortedArraysHard]
  ].forEach(([nameFunction, findMedianSortedArrays]) => {
    describe(`${nameFunction}`, () => {
      [
        [[1, 3], [2], 2],
        [[1, 2], [3, 4], 2.5],
        [[3, 4], [1, 2], 2.5],
        [[2], [], 2],
        [[], [2, 3], 2.5],
        [
          [
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            13,
            14,
            15,
            16,
            17,
            18,
            19,
            20,
            21,
            22
          ],
          [0, 6],
          10.5
        ]
      ].forEach(([value1, value2, result]) => {
        it(`if put "${value1}", "${value2}" then return ${result}`, () => {
          expect(findMedianSortedArrays(value1, value2)).toEqual(result);
        });
      });
    });
  });
});
