class LinkedList {
  constructor() {
    this.head = null;
  }

  kthFromEnd(k) {
    if (this.head === null) {
      throw new Error("LinkedList is empty.");
    }

    let count = 0;
    let current = this.head;
    let kthNode = null;

    
    while (current !== null) {
      if (count === k) {
        kthNode = this.head;
      } else if (count > k) {
        kthNode = kthNode.next;
      }
      count++;
      current = current.next;
    }

    if (kthNode === null) {
      throw new Error("k is larger than the size of the LinkedList.");
    }

    return kthNode.value;
  }
}

module.exports = LinkedList;
