const { BinaryTree, TreeNode } = require('./index'); 

describe('BinaryTree', () => {
  describe('findMaximumValue', () => {
    test('should throw an error when the tree is empty', () => {
      const binaryTree = new BinaryTree();
      expect(() => binaryTree.findMaximumValue()).toThrowError('Binary Tree is empty.');
    });

    test('should find the maximum value in a binary tree', () => {
      const binaryTree = new BinaryTree();
      binaryTree.root = new TreeNode(10);
      binaryTree.root.left = new TreeNode(5);
      binaryTree.root.right = new TreeNode(15);
      binaryTree.root.left.left = new TreeNode(3);
      binaryTree.root.left.right = new TreeNode(7);
      binaryTree.root.right.left = new TreeNode(12);
      binaryTree.root.right.right = new TreeNode(20);

      const maxVal = binaryTree.findMaximumValue();
      expect(maxVal).toBe(20);
    });

    test('should find the maximum value when the root is the only node', () => {
      const binaryTree = new BinaryTree();
      binaryTree.root = new TreeNode(5);

      const maxVal = binaryTree.findMaximumValue();
      expect(maxVal).toBe(5);
    });

    
  });
});
