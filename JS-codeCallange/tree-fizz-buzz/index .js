'use strict';

class Node {
    constructor(value, children = []) {
        this.value = value;
        this.children = children;
    }
}

class Tree { 
    constructor(root = null) {
        this.root = root;
    }
}

function fizzBuzzTree(tree) { 
    if (!tree.root) return 'empty K-ary Tree'; 

    let queue = [];
    let breadth = [];
    let start = tree.root;
    let dequeued;

    queue.push(start);
    while (queue.length > 0) {
        dequeued = queue.shift();
        breadth.push(dequeued.value);

        
        if (dequeued.value % 5 === 0 && dequeued.value % 3 === 0) {
            dequeued.value = 'FizzBuzz';
        } else if (dequeued.value % 5 === 0) {
            dequeued.value = 'Buzz';
        } else if (dequeued.value % 3 === 0) {
            dequeued.value = 'Fizz';
        } else {
            dequeued.value = 'notFuzzingORBuzzing';
        }

        if (dequeued.children) {
            queue.push(...dequeued.children);
        }
    }

    
    breadth.forEach((element, index) => {
        if (element === 'FizzBuzz') return;
        breadth[index] = element % 5 === 0 && element % 3 === 0 ? 'FizzBuzz' : element % 5 === 0 ? 'Buzz' : element % 3 === 0 ? 'Fizz' : 'notFuzzingORBuzzing';
    });

    console.log(tree.root);
    console.log(breadth);
    gi
    return tree;
}

module.exports = {
    Tree, 
    Node,
    fizzBuzzTree
};
