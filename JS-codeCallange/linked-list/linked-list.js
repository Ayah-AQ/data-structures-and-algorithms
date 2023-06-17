'use strict';

/* eslint-disable no-constant-condition */
class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next || null;
  }
}

class Linkedlist {
  constructor() {
    this.head = null;
  }
  insert(val) {
    if(this.head === null) {
      this.head = new Node(val);
    } else {
      this.head = new Node(val, this.head);
    }
  }
  includes(val) {
    let currentNode = this.head;
    while(true) {
      console.log(currentNode.value);
      if(currentNode.value === val) {
        return true;
      } else {
        currentNode = currentNode.next;
      }
      if (currentNode === null) {
        return false;
      }
    }
  }
  toString() {
    let newArr = [];
    let currentNode = this.head;
    while(true) {
      newArr.push(`{${currentNode.value}}`);
      currentNode = currentNode.next;
      if (currentNode === null) {
        newArr.push('NULL');
        break;
      }
    }
    return newArr.join(' -> ');
  }
}

module.exports = Linkedlist;