class Node {
    constructor(val) {
      this.data = val;
      this.left = null;
      this.right = null;
    }
  }
  
  let root = null;
  let arr = [];
  
  function levelOrder(root) {
    const h = depth(root);
    for (let i = 1; i <= h; i++) {
      currentLevel(root, i);
    }
    return arr;
  }
  
  function depth(root) {
    if (root == null) {
      return 0;
    } else {
      const leftH = depth(root.left);
      const rightH = depth(root.right);
  
      if (leftH > rightH)
        return leftH + 1;
      else
        return rightH + 1;
    }
  }
  
  function currentLevel(root, level) {
    if (root == null)
      return;
    if (level === 1) {
      arr.push(root.data);
    } else if (level > 1) {
      currentLevel(root.left, level - 1);
      currentLevel(root.right, level - 1);
    }
  }
  
  module.exports = {
    Node,
    levelOrder,
    currentLevel,
  };
  