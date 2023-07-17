"use strict";

const { BinarySearchTree, Node } = require("./index"); 

describe("BinarySearchTree", () => {
  function createBST(values) {
    const tree = new BinarySearchTree();
    values.forEach((value) => tree.add(value));
    return tree;
  }

  it("should successfully instantiate an empty tree", () => {
    const tree = new BinarySearchTree();
    expect(tree.root).toBeNull();
  });

  it("should successfully instantiate a tree with a single root node", () => {
    const rootNode = new Node(5);
    const tree = new BinarySearchTree(rootNode);
    expect(tree.root.value).toBe(5);
    expect(tree.root.left).toBeNull();
    expect(tree.root.right).toBeNull();
  });

  it("should add nodes properly to a Binary Search Tree", () => {
    const tree = createBST([9, 7, 10, 8, 6]);
    expect(tree.root.value).toBe(9);
    expect(tree.root.left.value).toBe(7);
    expect(tree.root.right.value).toBe(10);
    expect(tree.root.left.left.value).toBe(6);
    expect(tree.root.left.right.value).toBe(8);
  });

  it("should perform pre-order traversal and return the correct collection", () => {
    const tree = createBST([9, 7, 10, 8, 6]);
    expect(tree.preOrder()).toEqual([9, 7, 6, 8, 10]);
  });

  it("should perform in-order traversal and return the correct collection", () => {
    const tree = createBST([9, 7, 10, 8, 6]);
    expect(tree.inOrder()).toEqual([6, 7, 8, 9, 10]);
  });

  it("should perform post-order traversal and return the correct collection", () => {
    const tree = createBST([9, 7, 10, 8, 6]);
    expect(tree.postOrder()).toEqual([6, 8, 7, 10, 9]);
  });

  it("should return true/false for the contains method", () => {
    const tree = createBST([9, 7, 10, 8, 6]);
    expect(tree.contains(10)).toBe(true);
    expect(tree.contains(9)).toBe(true);
    expect(tree.contains(0)).toBe(false);
  });
});
