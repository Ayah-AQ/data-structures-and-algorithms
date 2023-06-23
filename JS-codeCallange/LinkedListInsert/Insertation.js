'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(newValue) {
    const newNode = new Node(newValue);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  insertBefore(value, newValue) {
    if (!this.head) {
      return;
    }

    if (this.head.value === value) {
      const newNode = new Node(newValue);
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.next) {
      if (current.next.value === value) {
        const newNode = new Node(newValue);
        newNode.next = current.next;
        current.next = newNode;
        return;
      }
      current = current.next;
    }

    throw new Error(`Value ${value} not found in the list.`);
  }

  insertAfter(value, newValue) {
    if (!this.head) {
      return;
    }

    let current = this.head;
    while (current) {
      if (current.value === value) {
        const newNode = new Node(newValue);
        newNode.next = current.next;
        current.next = newNode;
        return;
      }
      current = current.next;
    }

    throw new Error(`Value ${value} not found in the list.`);
  }

  toString() {
    let current = this.head;
    let result = '';
    while (current) {
      result += `{${current.value}} -> `;
      current = current.next;
    }
    result += 'NULL';
    return result;
  }
}

module.exports = LinkedList;
