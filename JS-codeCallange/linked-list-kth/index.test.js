const {LinkedList} = require('./index')
const {getNodeFromEnd} = require('./index')


describe('getNodeFromEnd', () => {
  test('returns the node from the end of the linked list', () => {
    // Create a linked list with nodes containing numbers 1, 2, 3, 4, 5
    const head = new LinkedList(1);
    let node = head;
    for (let i = 2; i <= 5; i++) {
      node.next = new LinkedList(i);
      node = node.next;
    }

    // Test for getting nodes from the end
    expect(getNodeFromEnd(head, 1).data).toBe(5); // Expect the last node (5)
    expect(getNodeFromEnd(head, 2).data).toBe(4); // Expect the second last node (4)
    expect(getNodeFromEnd(head, 5).data).toBe(1); // Expect the first node (1)
  });

  test('throws an error for invalid values of n', () => {
    const head = new LinkedList(1); // Create a linked list with a single node

    // Test for negative and zero values of n
    expect(() => getNodeFromEnd(head, -1)).toThrowError('Invalid value: n = -1');
    expect(() => getNodeFromEnd(head, 0)).toThrowError('Invalid value: n = 0');

    // Test for n greater than the number of nodes in the linked list
    expect(() => getNodeFromEnd(head, 2)).toThrowError('2 is greater than the number in the list');
  });

  test('returns null for an empty linked list', () => {
    // Test for an empty linked list
    expect(getNodeFromEnd(null, 1)).toBeNull();
  });
});

