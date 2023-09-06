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

    preOrder() {
        const result = [];
        const traverse = (node) => {
            if (node) {
                result.push(node.value);
                traverse(node.left);
                traverse(node.right);
            }
        };
        traverse(this.root);
        return result;
    }
}

function treeIntersection(tree1, tree2) {
    const arr1 = tree1.preOrder();
    const set2 = new Set(tree2.preOrder());

    const commonValues = arr1.filter((value) => set2.has(value));

    if (commonValues.length > 0) {
        return commonValues;
    } else {
        return 'There are no common values';
    }
}
module.exports = { TreeNode, BinaryTree, treeIntersection };
