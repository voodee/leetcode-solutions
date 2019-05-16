const ListNode = require("./libs/list-node");

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @param {number} diff
 * @param {ListNode} current
 * @return {void}
 */
const addNextNumber = (l1, l2, diff, current) => {
  current.val += (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + diff;

  if (current.val > 9) {
    current.val = current.val - 10;
    diff = 1;
  } else {
    diff = 0;
  }

  if (l1) l1 = l1.next;
  if (l2) l2 = l2.next;

  if (!l1 && !l2 && !diff) {
    return;
  }

  current.next = new ListNode(0);

  addNextNumber(l1, l2, diff, current.next);
};

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = (l1, l2) => {
  const parrent = new ListNode(0);

  addNextNumber(l1, l2, 0, parrent);

  return parrent;
};

module.exports = addTwoNumbers;
