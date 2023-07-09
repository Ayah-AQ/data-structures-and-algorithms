const { Stack, Queue } = require('./index')

describe('Stack', () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  test('Can successfully push onto a stack', () => {
    stack.push(10);
    expect(stack.peek()).toBe(10);
  });

  test('Can successfully push multiple values onto a stack', () => {
    stack.push(10);
    stack.push(20);
    stack.push(30);
    expect(stack.peek()).toBe(30);
  });

  test('Can successfully pop off the stack', () => {
    stack.push(10);
    stack.push(20);
    stack.push(30);
    expect(stack.pop()).toBe(30);
  });

  test('Can successfully empty a stack after multiple pops', () => {
    stack.push(10);
    stack.push(20);
    stack.pop();
    stack.pop();
    expect(stack.isEmpty()).toBe(true);
  });

  test('Can successfully peek the next item on the stack', () => {
    stack.push(10);
    stack.push(20);
    stack.push(30);
    expect(stack.peek()).toBe(30);
    stack.pop();
    expect(stack.peek()).toBe(20);
  });

  test('Can successfully instantiate an empty stack', () => {
    expect(stack.isEmpty()).toBe(true);
  });

  test('Calling pop on empty stack raises an exception', () => {
    expect(() => stack.pop()).toThrowError('Stack is empty');
  });

  test('Calling peek on empty stack raises an exception', () => {
    expect(() => stack.peek()).toThrowError('Stack is empty');
  });
});

describe('Queue', () => {
  let queue;

  beforeEach(() => {
    queue = new Queue();
  });

  test('Can successfully enqueue into a queue', () => {
    queue.enqueue(10);
    expect(queue.peek()).toBe(10);
  });

  test('Can successfully enqueue multiple values into a queue', () => {
    queue.enqueue(10);
    queue.enqueue(20);
    queue.enqueue(30);
    expect(queue.peek()).toBe(10);
  });

  test('Can successfully dequeue out of a queue the expected value', () => {
    queue.enqueue(10);
    queue.enqueue(20);
    queue.enqueue(30);
    expect(queue.dequeue()).toBe(10);
  });

  test('Can successfully peek into a queue, seeing the expected value', () => {
    queue.enqueue(10);
    queue.enqueue(20);
    queue.enqueue(30);
    expect(queue.peek()).toBe(10);
  });

  test('Can successfully empty a queue after multiple dequeues', () => {
    queue.enqueue(10);
    queue.enqueue(20);
    queue.dequeue();
    queue.dequeue();
    expect(queue.isEmpty()).toBe(true);
  });

  test('Can successfully instantiate an empty queue', () => {
    expect(queue.isEmpty()).toBe(true);
  });

  test('Calling dequeue on empty queue raises an exception', () => {
    expect(() => queue.dequeue()).toThrowError('Queue is empty');
  });

  test('Calling peek on empty queue raises an exception', () => {
    expect(() => queue.peek()).toThrowError('Queue is empty');
  });
});
