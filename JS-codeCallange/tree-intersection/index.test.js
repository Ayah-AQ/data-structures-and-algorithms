const { TreeNode, BinaryTree, treeIntersection } = require('.'); // Replace with your actual file path

describe('BinaryTree', () => {

  it('should handle no common values', () => {
    // Create tree1
    const tree1 = new BinaryTree();
    tree1.root = new TreeNode(1);
    tree1.root.left = new TreeNode(2);
    tree1.root.right = new TreeNode(3);

    // Create tree2 with no common values
    const tree2 = new BinaryTree();
    tree2.root = new TreeNode(4);
    tree2.root.left = new TreeNode(5);
    tree2.root.right = new TreeNode(6);

    const result = treeIntersection(tree1, tree2);
    expect(result).toBe('There are no common values');
  });

  it('should handle empty trees', () => {
    // Create empty trees
    const tree1 = new BinaryTree();
    const tree2 = new BinaryTree();

    const result = treeIntersection(tree1, tree2);
    expect(result).toBe('There are no common values');
  });
});
