const PseudoQueue = require('./index');

describe('PseudoQueue', () => {
  let queue;

  beforeEach(() => {
    queue = new PseudoQueue();
  });

  it('should enqueue and dequeue values correctly', () => {
    queue.enqueue(10);
    queue.enqueue(20);
    queue.enqueue(30);

    expect(queue.dequeue()).toBe(10);
    expect(queue.dequeue()).toBe(20);

    queue.enqueue(40);

    expect(queue.dequeue()).toBe(30);
    expect(queue.dequeue()).toBe(40);
  });
  
it('should return undefined when dequeuing from an empty queue', () => {
    expect(queue.dequeue()).toBeUndefined();
  });
  
  it('should enqueue and dequeue multiple values correctly', () => {
    queue.enqueue(10);
    queue.enqueue(20);
    queue.enqueue(30);
    queue.enqueue(40);
    queue.enqueue(50);
  
    expect(queue.dequeue()).toBe(10);
    expect(queue.dequeue()).toBe(20);
    expect(queue.dequeue()).toBe(30);
  
    queue.enqueue(60);
    queue.enqueue(70);
  
    expect(queue.dequeue()).toBe(40);
    expect(queue.dequeue()).toBe(50);
    expect(queue.dequeue()).toBe(60);
    expect(queue.dequeue()).toBe(70);
  });
  
  it('should handle alternating enqueue and dequeue operations', () => {
    queue.enqueue(10);
    expect(queue.dequeue()).toBe(10);
  
    queue.enqueue(20);
    expect(queue.dequeue()).toBe(20);
  
    queue.enqueue(30);
    queue.enqueue(40);
    expect(queue.dequeue()).toBe(30);
  
    queue.enqueue(50);
    expect(queue.dequeue()).toBe(40);
    expect(queue.dequeue()).toBe(50);
  
    queue.enqueue(60);
    queue.enqueue(70);
    queue.enqueue(80);
    expect(queue.dequeue()).toBe(60);
    expect(queue.dequeue()).toBe(70);
    expect(queue.dequeue()).toBe(80);
  });
  

});

