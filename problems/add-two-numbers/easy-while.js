const ListNode = require("./libs/list-node");

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = (l1, l2) => {
  const result = (parrent = {});

  let diff = 0;
  while (l1 || l2 || diff) {
    const current = new ListNode((l1 ? l1.val : 0) + (l2 ? l2.val : 0) + diff);
    parrent.next = current;
    diff = 0;
    if (current.val > 9) {
      current.val -= 10;
      diff = 1;
    }
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
    parrent = current;
  }
  return result.next;
};

module.exports = addTwoNumbers;
