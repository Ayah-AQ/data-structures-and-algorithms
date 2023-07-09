"use strict";

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.topNode = null;
  }

  push(value) {
    const newNode = new Node(value);
    newNode.next = this.topNode;
    this.topNode = newNode;
  }

  pop() {
    if (this.isEmpty()) {
      throw new Error("Stack is empty");
    }
    const value = this.topNode.value;
    this.topNode = this.topNode.next;
    return value;
  }

  peek() {
    if (this.isEmpty()) {
      throw new Error("Stack is empty");
    }
    return this.topNode.value;
  }

  isEmpty() {
    return this.topNode === null;
  }
}

class Queue {
  constructor() {
    this.frontNode = null;
    this.backNode = null;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.frontNode = newNode;
    } else {
      this.backNode.next = newNode;
    }
    this.backNode = newNode;
  }

  dequeue() {
    if (this.isEmpty()) {
      throw new Error("Queue is empty");
    }
    const value = this.frontNode.value;
    this.frontNode = this.frontNode.next;
    if (this.frontNode === null) {
      this.backNode = null;
    }
    return value;
  }

  peek() {
    if (this.isEmpty()) {
      throw new Error("Queue is empty");
    }
    return this.frontNode.value;
  }

  isEmpty() {
    return this.frontNode === null;
  }
}

module.exports = {
  Stack,
  Queue,
};
