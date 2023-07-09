<div style="float: left; width: 45%;">
<h1> Problem Domain </h1>

<strong>Node</strong>
<ul><li>Create a Node class that has properties for the value stored in the Node, and a pointer to the next node.</li></ul>

<strong>Stack</strong>
<ul>
<li>Create a Stack class that has a top property. It creates an empty Stack when instantiated.</li>
<ol>
<li>This object should be aware of a default empty value assigned to top when the stack is created.</li>
<li>The class should contain the following methods:</li>
<ul>
<li>push</li>
<ul>
<li>Arguments: value</li>
<li>adds a new node with that value to the top of the stack with an O(1) Time performance.</li>
</ul>
<li>pop</li>
<ul>
<li>Arguments: none</li>
<li>Returns: the value from node from the top of the stack</li>
<li>Removes the node from the top of the stack</li>
<li>Should raise exception when called on empty stack</li>
</ul>
<li>peek</li>
<ul>
<li>Arguments: none</li>
<li>Returns: Value of the node located at the top of the stack</li>
<li>Should raise exception when called on empty stack</li>
</ul>
<li>is empty</li>
<ul>
<li>Arguments: none</li>
<li>Returns: Boolean indicating whether or not the stack is empty.</li>
</ul>
</ul>
</ol>
</ul>

<strong>Queue</strong>
<ul>
<li>Create a Queue class that has a front property. It creates an empty Queue when instantiated.</li>
<ol>
<li>This object should be aware of a default empty value assigned to front when the queue is created.</li>
<li>The class should contain the following methods:</li>
<ul>
<li></li>
<ul>
<li>Arguments: value</li>
<li>adds a new node with that value to the back of the queue with an O(1) Time performance.</li>
</ul>
<li>dequeue</li>
<ul>
<li>Arguments: none</li>
<li>Returns: the value from node from the front of the queue</li>
<li>Removes the node from the front of the queue</li>
<li>Should raise exception when called on empty queue</li>
</ul>
<li>peek</li>
<ul>
Arguments: none
<li>Returns: Value of the node located at the front of the queue</li>
<li>Should raise exception when called on empty stack</li>
</ul>
<li>is empty</li>
<ul>
<li>Arguments: none</li>
<li>Returns: Boolean indicating whether or not the queue is empty</li>
</ul>
</ul></ol></ul>
</p>

<ul> <li>Input: 
<ol>
<li>Stack</li>
<ul>
<li>push(value)</li>
<li>pop()</li>
<li>peek()</li>
<li>isEmpty()</li>
</ul>
<li>Queue</li>
<ul>
<li>enqueue(value)</li>
<li>dequeue()</li>
<li>peek()</li>
<li>isEmpty()</li>
</ul>
<ol>
 </li>
<li> Output: 
<ol>
<li>Stack</li>
<ul>
<li>adds the value to the top of the stack</li>
<li>Returns the value of the node at the top of the stack and removes that node from the stack.</li>
<li>Returns the value of the node located at the top of the stack without modifying the stack.</li>
<li>Returns a boolean indicating whether the stack is empty (true) or not (false).</li>
</ul>
<li>Queue</li>
<ul>
<li>adds the value to the back of the queue.</li>
<li>Returns the value of the node at the front of the queue and removes that node from the queue.</li>
<li>Returns the value of the node located at the front of the queue without modifying the queue.</li>
<li>Returns a boolean indicating whether the queue is empty (true) or not (false).</li>
</ul>
</ol>
 </li>
 </ul> </div>

<div style="float: right; width: 45%;">
<h1> Algorithm </h1>

<ul>
<strong><li>Stack:</li></strong>
<ol>
<li>Create an empty array to represent the stack.</li>
<li>To push an element onto the stack:</li>
<ul>
<li>Append the element to the end of the array.</li>
</ul>
<li>To pop an element from the stack:</li>
<ul>
<li>Check if the stack is empty. If it is, throw an error.</li>
<li>Retrieve and remove the last element from the array and return it.</li>
</ul>
<li>To peek at the top element of the stack:</li>
<ul>
<li>Check if the stack is empty. If it is, throw an error.</li>
<li>Return the last element of the array without removing it.</li>
</ul>
<li>To check if the stack is empty:</li>
<ul>
<li>Return true if the array is empty, false otherwise.</li>
</ul>
</ol>
<strong><li>Queue:</li></strong>
<ol>
<li>Create an empty array to represent the queue.</li>
<li>To enqueue an element into the queue:</li>
<ul>
<li>Append the element to the end of the array.</li>
</ul>
<li>To dequeue an element from the queue:</li>
<ul>
<li>Check if the queue is empty. If it is, throw an error.</li>
<li>Retrieve and remove the first element from the array and return it.</li>
</ul>
<li>To peek at the front element of the queue:</li>
<ul>
<li>Check if the queue is empty. If it is, throw an error.</li>
<li>Return the first element of the array without removing it.</li>
</ul>
<li>To check if the queue is empty:</li>
<ul>
<li>Return true if the array is empty, false otherwise.</li>
</ul>
</ul></ol>
</ul>

</div>


<div style="float: right; width: 45%;">
<h1> Test Cases </h1>
<strong>Stack</strong>
// Test push and peek
push --> 10
peek() -->  Output: 10

// Test push and pop
push --> 20;
push --> 30;
pop() --> Output: 30
pop() --> Output: 20

// Test isEmpty
isEmpty() --> Output: false
pop() --> Output: 10
isEmpty() --> Output: true

<strong>Queue</strong>
// Test enqueue and peek
enqueue --> 10
peek() -->  Output: 10

// Test enqueue and dequeue
enqueue --> 20
enqueue --> 30
dequeue() -->  Output: 10
dequeue() -->  Output: 20

// Test isEmpty
isEmpty() -->  Output: false
dequeue() -->  Output: 30
isEmpty() -->  Output: true



</div>

<div style="float: right; width: 40%;">
<h1> Visiulization </h1> 
<strong>Stack</strong>
Initial stack: []

Push --> 10, return --> Stack: [10]

Push --> 20, return --> Stack: [10, 20]

Push --> 30, return --> Stack: [10, 20, 30]

Pop --> 30, return --> Stack: [10, 20]

Pop --> 20, return --> Stack: [10]

Is empty, return false.

Pop --> 10, return --> Stack: []

Is empty --> return true.

<strong>Queue</strong>

Initial queue: []

Enqueue --> 10, return --> Queue: [10]

Enqueue --> 20, return --> Queue: [10, 20]

Enqueue --> 30, return --> Queue: [10, 20, 30]

Dequeue --> 10, return --> Queue: [20, 30]

Dequeue --> 20, return --> Queue: [30]

Is empty --> return false.

Dequeue --> 30, return --> Queue: []

Is empty --> return true
</div>

<div style="float: left; width: 45%;">
<h1> Code </h1>
 <pre><code>
class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class Stack {
    constructor() {
      this.topNode = null;
    }
  
    push(value) {
      const newNode = new Node(value);
      newNode.next = this.topNode;
      this.topNode = newNode;
    }
  
    pop() {
      if (this.isEmpty()) {
        throw new Error("Stack is empty");
      }
      const value = this.topNode.value;
      this.topNode = this.topNode.next;
      return value;
    }
  
    peek() {
      if (this.isEmpty()) {
        throw new Error("Stack is empty");
      }
      return this.topNode.value;
    }
  
    isEmpty() {
      return this.topNode === null;
    }
  }
  
  class Queue {
    constructor() {
      this.frontNode = null;
      this.backNode = null;
    }
  
    enqueue(value) {
      const newNode = new Node(value);
      if (this.isEmpty()) {
        this.frontNode = newNode;
      } else {
        this.backNode.next = newNode;
      }
      this.backNode = newNode;
    }
  
    dequeue() {
      if (this.isEmpty()) {
        throw new Error("Queue is empty");
      }
      const value = this.frontNode.value;
      this.frontNode = this.frontNode.next;
      if (this.frontNode === null) {
        this.backNode = null;
      }
      return value;
    }
  
    peek() {
      if (this.isEmpty()) {
        throw new Error("Queue is empty");
      }
      return this.frontNode.value;
    }
  
    isEmpty() {
      return this.frontNode === null;
    }
}
 </pre></code>
</div>



<div style="float: right; width: 45%;">
<h1> BigO </h1>
 time complexity of this algorithm is O(1) </br>
 space complexity of this algorithm is O(n)
</div>

_______________________

## Whiteboard screenshoot
<img src='../Assests/Screenshot 2023-07-09 084242(1).png'/>
<img src='../Assests/Screenshot 2023-07-09 084359(2).png'/>
<img src='../Assests/Screenshot 2023-07-09 084440(3).png'/>
________________

## Testing
```
The zipLists function has been tested with various cases and works correctly. It has a time complexity of O(n) and a space complexity of O(1). Overall, the function is both efficient and reliable.
```
