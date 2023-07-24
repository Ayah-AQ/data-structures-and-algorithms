<div style="float: left; width: 45%;">
<h1> Problem Domain </h1>
<P>
<ul>
<li>Write a function called breadth first</li>
<li>Arguments: tree</li>
<li>Return: list of all values in the tree, in the order they were encountered</li>
<li>NOTE: Traverse the input tree using a Breadth-first approach</li>
</ul>
</p>

<ul> <li>Input: numbers to be added to tree  </li> </ul>
<li> Output:  numbers ordered based on level from left to right</li>
 </ul> </div>

<div style="float: right; width: 45%;">
<h1> Algorithm </h1>
<ul>
<li>Node class: A class representing a node in the binary tree, with properties data, left, and right.</li>

<li>levelOrder(root): The main function to perform level order traversal. It takes the root of the binary tree as input and returns an array containing the data of the tree nodes in level order.</li>

<li>depth(root): A helper function that calculates the depth (maximum height) of the binary tree starting from the given root. It uses recursion to find the height of the left and right subtrees and returns the maximum height plus one.</li>

<li>currentLevel(root, level): A helper function that traverses the binary tree at a given level. It is used by the levelOrder function to visit nodes at each level. The function recursively moves down the tree, decreasing the level count until it reaches the desired level. It adds the data of nodes at that level to the global array arr.</li>
</ul>
</div>


<div style="float: left; width: 45%;">
<h1> Test Cases & Visiulization</h1>

       1
      / \
     2   3
    / \   \
   4   5   6

   Expected output: [1, 2, 3, 4, 5, 6]

         1
        / \
       2   3
      / \   
     4   5   

     Expected output: [1, 2, 3, 4, 5]

</div>


<div style="float: right; width: 45%;">
<h1> Code </h1>
 <pre><code>
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
  </pre></code>
</div>



<div style="float: left; width: 45%;">
<h1> BigO </h1>
 time complexity of this algorithm is O(n) </br>
 space complexity of this algorithm is O(n)
</div>

_______________________

## Whiteboard screenshoot
<img src='../Assests/Screenshot 2023-07-24 180446(1).png'/>
<img src='../Assests/Screenshot 2023-07-24 180506(2).png'/>

________________

## Testing
```

Test the binary tree level-order traversal algorithm with different cases, such as empty and single-node trees, balanced and unbalanced binary trees, and trees with various node values. Verify the output matches the expected level-order traversal sequence and assess its efficiency with a large tree.

```
