class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinaryTree {
    constructor() {
      this.root = null;
    }
  
    findMaximumValue() {
      if (!this.root) {
        throw new Error("Binary Tree is empty.");
      }
  
      let maxVal = Number.NEGATIVE_INFINITY;
      const nodeStack = [this.root];
  
      while (nodeStack.length > 0) {
        const currentNode = nodeStack.pop();
        if (currentNode.value > maxVal) {
          maxVal = currentNode.value;
        }
  
        if (currentNode.right) {
          nodeStack.push(currentNode.right);
        }
  
        if (currentNode.left) {
          nodeStack.push(currentNode.left);
        }
      }
  
      return maxVal;
    }
  }
  module.exports ={
    BinaryTree, TreeNode
  }