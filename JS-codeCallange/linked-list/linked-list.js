'use strict';

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    if (this.head === null) {
      this.head = new Node(value);
    } else {
      const newNode = new Node( value, this.head);
      this.head = newNode;
    }
  }

  includes(value) {
    let currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  }

  toString() {
    if (this.head === null) {
      return 'NULL';
    }
    let result = '';
    let currentNode = this.head;
    while (currentNode !== null) {
      result += `{ ${currentNode.value} } -> `;
      currentNode = currentNode.next;
    }
    result += 'NULL';
    return result;
  }
}

let LinkedLst= new LinkedList()
LinkedLst.insert(50)
LinkedLst.insert(40)
LinkedLst.insert(20)


LinkedLst.toString()




console.log(LinkedLst)
module.exports = LinkedList;
