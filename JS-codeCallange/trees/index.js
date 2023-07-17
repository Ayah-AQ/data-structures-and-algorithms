'use strict';

class Node {
  constructor(value, left = null, right = null) {
      this.value = value;
      this.left = left;
      this.right = right;
  }
}
class BinaryTree {
    constructor(root = null) {
        this.root = root;
    }

    preOrder() {
        let arr = [];
        const traversal = node => {
            if (!node) return; 
            arr.push(node.value);
            traversal(node.left);
            traversal(node.right);
        }

        traversal(this.root);
        return arr;
    }

    
    postOrder() {
        let arr = [];
        const traversal = node => {
            if (!node) return; 
            traversal(node.left);
            traversal(node.right);
            arr.push(node.value);
        }

        traversal(this.root);
        return arr;
    }

    
    inOrder() {
        let arr = [];
        const traversal = node => {
            if (!node) return; 
            traversal(node.left);
            arr.push(node.value);
            traversal(node.right);
        }

        traversal(this.root);
        return arr;
    }
}


class BinarySearchTree extends BinaryTree {
    constructor(root = null) {
        super(root);
    }

    
    add(value) {
        const newNode = { value, left: null, right: null };

        const insert = (node, newNode) => {
            if (newNode.value < node.value) {
                if (node.left === null) {
                    node.left = newNode;
                } else {
                    insert(node.left, newNode);
                }
            } else if (newNode.value > node.value) {
                if (node.right === null) {
                    node.right = newNode;
                } else {
                    insert(node.right, newNode);
                }
            }
            
        };

        if (this.root === null) {
            this.root = newNode;
        } else {
            insert(this.root, newNode);
        }
    }

    
    contains(value) {
        const search = (node, value) => {
            if (node === null) {
                return false;
            }

            if (node.value === value) {
                return true;
            } else if (value < node.value) {
                return search(node.left, value);
            } else {
                return search(node.right, value);
            }
        };

        return search(this.root, value);
    }
}

module.exports = {
Node,
BinaryTree,
BinarySearchTree
}