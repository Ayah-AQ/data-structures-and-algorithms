<div style="float: left; width: 45%;">
<h1> Problem Domain </h1>
<ul>

<li>implement a 'Max Stack,' which is a variation of a traditional stack that has an additional member function called 'getMax()' that returns the biggest element in the stack.</li>

<li>Before we proceed, I'd like to confirm that we will only store numeric values in the stack. Is that correct?</li>

<li>You can use a linked list to implement the internal memory of the stack, which will use O(n) space.</li>

<li>Your 'Max Stack' needs to support the following methods:
<ol>
<li> `push(val)`: Add the given value to the stack.</li>
<li> `pop()`: Remove and return the top element from the stack.</li>
<li> `getMax()`: Return the maximum value in the stack.</li>
</ol>
</li>

<li>To efficiently implement 'getMax()', you can use the following approach:
<ul>
<li> Maintain a separate stack called 'maxStack' alongside the actual stack.</li>
<li> When pushing a number onto the actual stack, check if it's greater than or equal to the top element of maxStack.' If so, push it onto both stacks. </li>
<li> When popping from the actual stack, check if the value is equal to the top element of 'maxStack.' If so, also pop from 'maxStack.' </li>
</ul></li>

<li>This approach will allow you to maintain and retrieve the maximum value in O(1) time. Keep in mind that there might be more efficient ways to calculate the maximum value, but let's focus on this approach for now.</li>

<li>You can use a Node class to create connections between elements in the linked list. Please go ahead and write the implementation for the 'Max Stack' with the 'getMax()' function.</li>
</ul>
</p>

<ul> <li>Input: push numbers to stack </li> </ul>
<li> Output: max input </li>
 </ul> </div>

<div style="float: right; width: 45%;">
<h1> Algorithm </h1>
<ul>
<li> create MaxStack class is defined with two properties: 
<ul>
<li>"stackData" (an array to store the stack elements)  </li>
<li>"maxValue" (to track the current maximum value).</li>
</ul></li>

<li> push(value)  When pushing a new value:
<ul>
 <li>If the stack is empty or the new value is greater than or equal to the current max value, the current max value is updated to the new value.</li>
 <li>If the stack is not empty, the previous max value is also pushed into the stack along with the new value so that we can track it later.</li>
</ul</li>
<li> pop()  When popping an element:
<ul>
<li> If the stack is empty, it returns null.</li>
<li>If the popped value is the current max value, it means that the next element in the stack (if any) is the previous max value. So, the "maxValue" variable is updated to this previous max value.</li> 
</ul></li>
<li> getMax() returns the current maximum value tracked by the "maxValue" variable. </li>
</ul>
</div>


<div style="float: right; width: 45%;">
<h1> Test Cases </h1>
push --> 1 5 3 2 4</br>
 max 5</br>
max.pop()</br>
1,3,2,4</br>
max 4</br>
max.pop()</br>
 1,3,2 </br>
max 3</br>
max.pop()</br>
 1,2 </br>
 max 2</br>
max.pop()</br>
 1 </br>
 max 1</br>
max.pop()</br>
 empty </br>

</div>

<div style="float: left; width: 40%;">
<h1> Visiulization </h1> 
<strong>const max = new MaxStack()</strong>
max.push(5)</br>
max.push(2)</br>
max.push(10)</br>

max.getMax() / 10</br>
maxStack.pop()</br>
max.getMax() / 5</br>
</div>

<div style="float: left; width: 45%;">
<h1> Code </h1>
 <pre><code>
class MaxStack {
    constructor() {
      this.stackData = [];
      this.maxValue = null;
    }
  
    push(value) {
      // If the stack is empty or the new value is greater than the current max, update the max value.
      if (this.stackData.length === 0 || value >= this.maxValue) {
        // If the stack is not empty, push the previous max value as well, so we can track it.
        if (this.stackData.length > 0) {
          this.stackData.push(this.maxValue);
        }
        this.maxValue = value;
      }
      this.stackData.push(value);
    }
  
    pop() {
      if (this.stackData.length === 0) return null;
  
      const poppedValue = this.stackData.pop();
  
      // If the popped value is the current max, update the max value to the previous max value stored in the stack.
      if (poppedValue === this.maxValue) {
        this.maxValue = this.stackData.pop();
      }
  
      return poppedValue;
    }
  
    getMax() {
      return this.maxValue;
    }
  }
  </pre></code>
</div>



<div style="float: right; width: 45%;">
<h1> BigO </h1>
 time complexity of this algorithm is O(1) </br>
 space complexity of this algorithm is O(n)
</div>

<!-- _______________________ -->

<!-- ## Whiteboard screenshoot
<img src='../Assests/Screenshot 2023-07-20 142148.png'/>

________________

## Testing
```
The provided code defines classes for binary trees and binary search trees. It includes algorithms for traversing the trees in pre-order, in-order, and post-order, and supports efficient insertion and searching in the binary search tree. The time complexity is O(n) for traversals and O(log n) for search operations (balanced trees), with space complexity of O(n) for traversals and O(h) for search (height of the tree).
``` -->
