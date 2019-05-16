const ListNode = require("./libs/list-node");
const addTwoNumbersRecursion = require("./easy-recursion");
const addTwoNumbersWhile = require("./easy-while");

describe("Add Two Numbers", function() {
  beforeEach(() => {
    this.l1 = {
      val: 2,
      next: {
        val: 4,
        next: {
          val: 3,
          next: null
        }
      }
    };
    this.l2 = {
      val: 5,
      next: {
        val: 6,
        next: {
          val: 4,
          next: null
        }
      }
    };
    this.resultValue = new ListNode(7);
    const result1 = new ListNode(0);
    this.resultValue.next = result1;
    result1.next = new ListNode(8);
  });

  describe("Easy Recursive", () => {
    it("if put [2,4,3], [5,6,4] then return [8,0,7]", () => {
      expect(addTwoNumbersRecursion(this.l1, this.l2)).toEqual(
        this.resultValue
      );
    });
  });

  describe("Easy While", () => {
    it("if put [2,4,3], [5,6,4] then return [8,0,7]", () => {
      expect(addTwoNumbersWhile(this.l1, this.l2)).toEqual(this.resultValue);
    });
  });
});
