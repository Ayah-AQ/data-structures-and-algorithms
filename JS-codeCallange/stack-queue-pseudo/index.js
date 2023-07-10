class Stack {
  constructor() {
    this.items = [];
  }

  push(value) {
    this.items.push(value);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }
}

class PseudoQueue {
  constructor() {
    this.inStack = new Stack();
    this.outStack = new Stack();
  }

  enqueue(value) {
    while (!this.inStack.isEmpty()) {
      this.outStack.push(this.inStack.pop());
    }
    this.inStack.push(value);
    while (!this.outStack.isEmpty()) {
      this.inStack.push(this.outStack.pop());
    }
  }

  dequeue() {
    return this.inStack.pop();
  }
}

module.exports = PseudoQueue;
