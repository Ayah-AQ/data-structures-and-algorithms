<div style="float: left; width: 45%;">
<h1> Problem Domain </h1>
<ul>
<li><strong>Node</strong></li>
<ul>
<li>Create a Node class that has properties for the value stored in the node, the left child node, and the right child node.</li>
</ul>
<li><strong>Binary Tree</strong></li>
<ul>
<li>Create a Binary Tree class</li>
<ol>
<li>Define a method for each of the depth first traversals:</li>
<ul>
<li>pre order</li>
<li>in order</li>
<li>post order</li>
</ul>
<li>Each depth first traversal method should return an array of values, ordered appropriately.</li>
</ol>
</ul>
<li><strong>Binary Search Tree</strong></li>
<ul>
<li>Create a Binary Search Tree class</li>
<ol>
<li>This class should be a sub-class (or your languages equivalent) of the Binary Tree Class, with the following additional methods:</li>
<li>Add</li>
<ul>
<li>Arguments: value</li>
<li>Return: nothing</li>
<li>Adds a new node with that value in the correct location in the binary search tree.</li>
</ul>
<li>Contains</li>
<ul>
<li>Argument: value</li>
<li>Returns: boolean indicating whether or not the value is in the tree at least once.</li>
</ul></ol></ul></ul>
</p>

<ul> <li>Input: add numbers to tree </ul>
<li> Output:
<ul>
<li></li>Pre-order traversal:  traversal visits the nodes in the following order: root, left subtree, right subtree.

<li></li>In-order traversal: traversal visits the nodes in ascending order for a binary search tree.

<li></li>Post-order traversal:  traversal visits the nodes in the following order: left subtree, right subtree, root.

<li></li>Contains method: checks if the value is present in the Binary Search Tree and return true or false
</ul>
</li>
 </ul> </div>

<div style="float: right; width: 45%;">
<h1> Algorithm </h1>
<strong><strong>BinaryTree Class Methods:</strong></strong>
<ul>
<li><strong>Pre-order Traversal:</strong></li>
<ul>
<li>Visit the root node, then traverse the left subtree, and finally traverse the right subtree.</li>
</ul>
<li><strong>In-order Traversal:</strong></li>
<ul>
 <li>Traverse the left subtree, visit the root node, and then traverse the right subtree.</li>
 </ul>
<li><strong>Post-order Traversal: </strong></li>
<ul>
<li>Traverse the left subtree, traverse the right subtree, and then visit the root node.</li>
</ul>
</ul>
<strong><strong>BinarySearchTree Class Methods:</strong></strong>
<ul>
<li><strong>add(value):</strong></li>
<ul>
 <li>Add a new node with the given value to the binary search tree in the correct position based on its value.</li>
 </ul>
<li><strong>contains(value):</strong></li>
<ul>
 <li>Check if a node with the given value exists in the binary search tree.</li>
 </ul>
 </ul>
</div>


<div style="float: right; width: 45%;">
<h1> Test Cases </h1>
add --> 1 5 3 2 4</br>
preOrder output --> 1,5,3,2,4</br>
inOrder output --> 1,2,3,4,5</br>
postOrder output -->  2, 4, 3, 5, 1 </br>
contain 5 output --> true</br>


</div>

<div style="float: right; width: 40%;">
<h1> Visiulization </h1> 
<strong>8, 3, 10, 1, 6, 14, 4, 7, 13</strong>

Binary Tree:

         8
        / \
       3   10
      / \    \
     1   6    14
        / \   /
       4   7 13

Binary Search Tree (BST):

         8
        / \
       3   10
      / \    \
     1   6    14
        / \   /
       4   7 13
</div>

<div style="float: left; width: 45%;">
<h1> Code </h1>
 <pre><code>
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
     </pre></code>
</div>



<div style="float: right; width: 45%;">
<h1> BigO </h1>
 time complexity of this algorithm is O(n) </br>
 space complexity of this algorithm is O(n)
</div>

_______________________

## Whiteboard screenshoot
<img src='../Assests/Screenshot 2023-07-17 220658(1).png'/>
<img src='../Assests/Screenshot 2023-07-17 220733(2).png'/>
<img src='../Assests/Screenshot 2023-07-17 220748(3).png'/>

________________

## Testing
```
The provided code defines classes for binary trees and binary search trees. It includes algorithms for traversing the trees in pre-order, in-order, and post-order, and supports efficient insertion and searching in the binary search tree. The time complexity is O(n) for traversals and O(log n) for search operations (balanced trees), with space complexity of O(n) for traversals and O(h) for search (height of the tree).
```
