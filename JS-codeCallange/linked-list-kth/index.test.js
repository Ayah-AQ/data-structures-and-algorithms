const LinkedList = require('./index');

describe('LinkedList', () => {
  describe('kthFromEnd', () => {
    test('should return the kth element from the end of the LinkedList', () => {
      const linkedList = new LinkedList();
      linkedList.head = { value: 1, next: null };
      linkedList.head.next = { value: 2, next: null };
      linkedList.head.next.next = { value: 3, next: null };
      linkedList.head.next.next.next = { value: 4, next: null };
      linkedList.head.next.next.next.next = { value: 5, next: null };

      expect(linkedList.kthFromEnd(2)).toBe(3);
      expect(linkedList.kthFromEnd(0)).toBe(5);
    });

    test('should throw an error if the LinkedList is empty', () => {
      const linkedList = new LinkedList();

      expect(() => linkedList.kthFromEnd(2)).toThrow('LinkedList is empty.');
    });

    test('should throw an error if k is larger than the size of the LinkedList', () => {
      const linkedList = new LinkedList();
      linkedList.head = { value: 1, next: null };

      expect(() => linkedList.kthFromEnd(2)).toThrow('k is larger than the size of the LinkedList.');
    });
  });
});
