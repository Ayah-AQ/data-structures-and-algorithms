class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  function zipLists(list1, list2) {
    if (!list1) {
      return list2;
    }
    if (!list2) {
      return list1;
    }
  
    let dummyHead = new Node(null);
    let tail = dummyHead;
    let current1 = list1;
    let current2 = list2;
  
    while (current1 && current2) {
      tail.next = current1;
      current1 = current1.next;
      tail = tail.next;
  
      tail.next = current2;
      current2 = current2.next;
      tail = tail.next;
    }
  
    if (current1) {
      tail.next = current1;
    } else if (current2) {
      tail.next = current2;
    }
  
    return dummyHead.next;
  }
  
  module.exports = {
    Node,
    zipLists,
  };
  