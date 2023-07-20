<div style="float: left; width: 45%;">
<h1> Problem Domain </h1>
<ul>
<li>Write the following method for the Binary Tree class</li>
<ol>
<li>find maximum value</li>
<li>Arguments: none</li>
<li>Returns: number</li>
</ol>
<li>Find the maximum value stored in the tree. You can assume that the values stored in the Binary Tree will be numeric.</li>
</ul>
</p>

<ul> 
<li>Input:  numbers to be added to tree </ul>
<li> Output: maximum input </li>
 </ul> </div>

<div style="float: right; width: 45%;">
<h1> Algorithm </h1>
<li>Start with an empty binary tree or check if it's empty.</li>
<li>Initialize a variable maxVal to store the maximum value found.</li>
<li>Use a stack to traverse the binary tree depth-first.</li>
<li>Pop nodes from the stack, update maxVal if a larger value is found.</li>
<li>Explore right child first, then left child (DFS).</li>
<li>Continue until all nodes are processed.</li>
<li>Return the final value of maxVal, which is the maximum value in the binary tree.</li>
</div>


<div style="float: right; width: 45%;">
<h1> Test Cases and Visiulization</h1>
 balanced binary tree:

         50
       /  \
      30   70
     / \   / \
    20  40 60 80
 
 output: 80

unbalanced binary tree:

         10
        /
       5
      /
     2
    /
   1

 output: 10
 
 negative values:

         -5
       /  \
     -2   -8
    / \   / \
  -10 -3 -6 -4

 output: -2

 single node tree:
       
       100

 output: 100

empty tree:

        (Empty)

 output: ERROR

</div>


<div style="float: left; width: 45%;">
<h1> Code </h1>
 <pre><code>

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
  
</pre></code>
</div>



<div style="float: left; width: 45%;">
<h1> BigO </h1>
 time complexity of this algorithm is O(n) </br>
 space complexity of this algorithm is O(log(n))
</div>

_______________________

## Whiteboard screenshoot
<img src='../Assests/Screenshot 2023-07-20 160905.png'/>

________________

## Testing
```
Testing of the code involves creating various binary tree instances with different structures, values, and edge cases, then verifying that the `findMaximumValue` method returns the expected maximum value correctly, ensuring the algorithm handles both balanced and unbalanced trees. Additionally, testing includes verifying error handling when calling `findMaximumValue` on an empty binary tree instance.

```
