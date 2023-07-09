const { Stack, Queue } = require('./index');

describe('Stack', () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  test('push method should add elements to the stack', () => {
    stack.push(10);
    stack.push(20);
    stack.push(30);
    expect(stack.pop()).toBe(30);
  });

  test('pop method should remove and return the last element from the stack', () => {
    stack.push(10);
    stack.push(20);
    stack.push(30);
    expect(stack.pop()).toBe(30);
    expect(stack.pop()).toBe(20);
  });

  test('peek method should return the last element from the stack', () => {
    stack.push(10);
    stack.push(20);
    stack.push(30);
    expect(stack.peek()).toBe(30);
    expect(stack.peek()).toBe(30);
  });

  test('isEmpty method should return true if the stack is empty', () => {
    expect(stack.isEmpty()).toBe(true);
    stack.push(10);
    expect(stack.isEmpty()).toBe(false);
    stack.pop();
    expect(stack.isEmpty()).toBe(true);
  });
});

describe('Queue', () => {
  let queue;

  beforeEach(() => {
    queue = new Queue();
  });

  test('enqueue method should add elements to the queue', () => {
    queue.enqueue(10);
    queue.enqueue(20);
    queue.enqueue(30);
    expect(queue.dequeue()).toBe(10);
  });

  test('dequeue method should remove and return the first element from the queue', () => {
    queue.enqueue(10);
    queue.enqueue(20);
    queue.enqueue(30);
    expect(queue.dequeue()).toBe(10);
    expect(queue.dequeue()).toBe(20);
  });

  test('peek method should return the first element from the queue', () => {
    queue.enqueue(10);
    queue.enqueue(20);
    queue.enqueue(30);
    expect(queue.peek()).toBe(10);
    expect(queue.peek()).toBe(10);
  });

  test('isEmpty method should return true if the queue is empty', () => {
    expect(queue.isEmpty()).toBe(true);
    queue.enqueue(10);
    expect(queue.isEmpty()).toBe(false);
    queue.dequeue();
    expect(queue.isEmpty()).toBe(true);
  });
});
