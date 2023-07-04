 class LinkedList {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}


 function getNodeFromEnd(head, n) {
  if (head === null) {
    return null;
  }

  if (n <= 0) {
    throw new Error("Invalid value: n = " + n);
  }

  let length = 0;
  let now = head;

  while (now !== null) {
    length++;
    now = now.next;
  }

  if (n > length) {
    throw new Error(n + " is greater than the number in the list");
  }

  let steps = length - n;
  now = head;
  while (steps > 0) {
    now = now.next;
    steps--;
  }

  return now;
}


module.exports = {
  LinkedList,
  getNodeFromEnd,
};