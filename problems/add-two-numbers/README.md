# Add Two Numbers [(leetcode)](https://leetcode.com/problems/add-two-numbers/)

You are given two **non-empty** linked lists representing two non-negative integers. The digits are stored in **reverse order** and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

## Example

```
Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
```

## Solution №1 (easy) / recursion

Runtime: **88 ms**, faster than **100%** of JavaScript online submissions for Add Two Numbers.

Memory Usage: **38 MB**, less than **94.51%** of JavaScript online submissions for Add Two Numbers.

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

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
```

complexity: O(max(m, n))

## Solution №2 (easy) / while

Runtime: **96 ms**, faster than **99.95%** of JavaScript online submissions for Add Two Numbers.
Memory Usage: **38.2 MB**, less than **81.73%** of JavaScript online submissions for Add Two Numbers.

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

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
```

complexity: O(max(m, n))
