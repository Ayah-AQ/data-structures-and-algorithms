const { Node, levelOrder, currentLevel } = require('./index');

describe('Node', () => {
  test('creates a new node with data, left, and right properties', () => {
    const node = new Node(10);
    expect(node.data).toBe(10);
    expect(node.left).toBeNull();
    expect(node.right).toBeNull();
  });
});

describe('levelOrder', () => {
  test('returns level-order traversal as an array', () => {
    const root = new Node(2);
    root.left = new Node(7);
    root.right = new Node(5);
    root.left.left = new Node(2);
    root.left.right = new Node(6);

    const expectedResult = [2, 7, 5, 2, 6];
    expect(levelOrder(root)).toEqual(expectedResult);
  });
});
;
