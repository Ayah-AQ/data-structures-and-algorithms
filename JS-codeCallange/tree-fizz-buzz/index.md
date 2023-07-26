<div style="float: left; width: 45%;">
<h1> Problem Domain </h1>
<P>
<ul>
<li>Write a function called fizz buzz tree</li>
<li>Arguments: k-ary tree</li>
<li>Return: new k-ary tree</li>
<li>Determine whether or not the value of each node is divisible by 3, 5 or both. Create a new tree with the same structure as the original, but the values modified as follows:</li>
<ol>
<li>If the value is divisible by 3, replace the value with “Fizz”</li>
<li>If the value is divisible by 5, replace the value with “Buzz”</li>
<li>If the value is divisible by 3 and 5, replace the value with “FizzBuzz”</li>
<li>If the value is not divisible by 3 or 5, simply turn the number into a String.</li>
</ol></ul>
</p>

<ul> <li>Input: numbers to be added to tree  </li> </ul>
<li> Output: Fizz/Buzz/Fizzbuzz  </li>
 </ul> </div>

<div style="float: right; width: 45%;">
<h1> Algorithm </h1>
<ul>
<li>The function fizzBuzzTree(tree) takes a Tree object as input.</li>

<li>It first checks if the tree has a root node. If there's no root, it returns the string 'empty K-ary Tree'.</li>

<li>It initializes three arrays: queue, breadth, and start. The queue is used for breadth-first traversal, breadth is used to store the values in breadth-first order, and start holds the root node of the tree.</li>

<li>The root node is enqueued into the queue.</li>

<li>The function performs a while loop, which continues as long as the queue is not empty.</li>

<li>Inside the loop, the first element in the queue is dequeued (removed from the front of the queue), and its value is appended to the breadth array.</li>

<li>The function then checks the value of the dequeued node to determine if it is divisible by both 3 and 5, only 3, only 5, or neither. Based on the divisibility, the value of the node is replaced with either 'FizzBuzz', 'Fizz', 'Buzz', or 'none', respectively.</li>

<li>If the dequeued node has children, those children are enqueued into the queue to continue the breadth-first traversal.</li>

<li>After the while loop finishes, the breadth array contains all the values of the tree nodes in breadth-first order.</li>

<li>The algorithm then iterates through the breadth array and replaces the values with 'FizzBuzz', 'Fizz', 'Buzz', or 'none' based on the same divisibility criteria used before. This step is required because the original nodes' values have been changed in the previous loop.</li>

<li>The function logs the updated root node of the tree and the breadth array to the console.</li>

<li>Finally, it returns the original tree object with updated node values.</li>
</ul>
</div>


<div style="float: left; width: 45%;">
<h1> Test Cases & Visiulization</h1>

       1
      / \
     9   2
    / \   \
   5   15   4

          none
         /    \
     Fizz      none 
    /   \         \
   Buzz  FizzBuzz none


</div>


<div style="float: right; width: 45%;">
<h1> Code </h1>
 <pre><code>
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
    return tree;
}
  </pre></code>
</div>



<div style="float: left; width: 45%;">
<h1> BigO </h1>
 time complexity of this algorithm is O(n) </br>
 space complexity of this algorithm is O(n)
</div>

<!-- _______________________ -->
<!-- 
## Whiteboard screenshoot
<img src='../Assests/Screenshot 2023-07-24 180446(1).png'/>

________________

## Testing
``` -->

```
