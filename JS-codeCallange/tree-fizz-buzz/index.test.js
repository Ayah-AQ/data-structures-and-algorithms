const { Tree, Node, fizzBuzzTree } = require('./index '); 

describe('fizzBuzzTree', () => {
  test('should handle an empty K-ary tree', () => {
    const emptyTree = new Tree();
    const result = fizzBuzzTree(emptyTree);
    expect(result).toBe('empty K-ary Tree');
  });

  test('should transform tree node values correctly', () => {
    const node1 = new Node(15, [new Node(5), new Node(3)]);
    const node2 = new Node(10, [new Node(7), new Node(30)]);
    const root = new Node(6, [node1, node2]);
    const karyTree = new Tree(root);

    const result = fizzBuzzTree(karyTree);

    expect(result.root.value).toBe('Fizz');
    expect(result.root.children[0].value).toBe('FizzBuzz');
    expect(result.root.children[1].value).toBe('Buzz');
    expect(result.root.children[0].children[0].value).toBe('Buzz');
    expect(result.root.children[0].children[1].value).toBe('Fizz');
    expect(result.root.children[1].children[0].value).toBe('none');
    expect(result.root.children[1].children[1].value).toBe('FizzBuzz');
  });
});
