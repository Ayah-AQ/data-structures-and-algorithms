<div style="float: left; width: 45%;">
<h1> Problem Domain </h1>

<strong>Create a new class called pseudo queue</strong>
<ul>
<li>Do not use an existing Queue.</li>
<li>Instead, this PseudoQueue class will implement our standard queue interface (the two methods listed below)</li>
<li>Internally, utilize 2 Stack instances to create and manage the queue.</li>
</ul>

<strong>Methods</strong>
<ol>
<li>enqueue</li>
<ul>
<li>Arguments: value</li>
<li>Inserts a value into the PseudoQueue, using a first-in, first-out approach.</li>
</ul>

<li>dequeue</li>
<ul>
<li>Arguments: none</li>
<li>Extracts a value from the PseudoQueue, using a first-in, first-out approach.</li>
</ul>
</ol>

NOTE: The Stack instances have only push, pop, and peek methods. You should use your own Stack implementation. Instantiate these Stack objects in your PseudoQueue constructor.
</p>

<ul> <li>Input:  
<ul>
<li>enqueue(value): list and argument</li>
<li>dequeue(): list a</li>
</ul></li>

<li> Output: 
<ul>
<li>enqueue(value): The Arg will be added to the start of list</li>
<li>dequeue(): The Arg will return and remove the last element in list</li>
</ul></li>
 </ul> </div>

<div style="float: right; width: 45%;">
<h1> Algorithm </h1>

<ul>
<ol>
<li>Initially, the inStack stack is empty, and the outStack stack is also empty.</li>
<li>When enqueue is called, it first moves all elements from inStack to outStack (reversing their order).</li>
<li>The new value is then pushed to inStack, which effectively places it at the bottom of the stack.</li>
<li>Finally, all elements from outStack are moved back to inStack, restoring their original order.</li>
<li>The dequeue method simply pops and returns the top element from inStack, which corresponds to the oldest element in the pseudo queue, thus preserving the FIFO order.</li>
</ol>
</ul></div>


<div style="float: right; width: 45%;">
<h1> Test Cases </h1>
<strong>enqueue(value)</strong>

Input --> [10]->[15]->[20] ,Args -->5, Internal State --> [5]->[10]->[15]->[20]

<strong>dequeue()</strong>
Input --> [5]->[10]->[15]->[20], Output --> 20,	Internal State --> 	[5]->[10]->[15]
Input --> [5]->[10]->[15],	Output --> 15,	Internal State --> [5]->[10]
</div>

<div style="float: right; width: 40%;">
<h1> Visiulization </h1> 
Initial State:
inStack: []
outStack: []

Enqueue 10:
inStack: [10]
outStack: []

Enqueue 20:
inStack: [20, 10]
outStack: []

Enqueue 30:
inStack: [30, 20, 10]
outStack: []

Dequeue:
inStack: []
outStack: [10, 20, 30] //Transferred from inStack

Return: 10

Dequeue:
inStack: []
outStack: [20, 30] //Top element popped

Return: 20

Enqueue 40:
inStack: [40]
outStack: [20, 30]

Dequeue:
inStack: []
outStack: [30] //Top element popped

Return: 30

Dequeue:
inStack: []
outStack: [] //Top element popped, outStack becomes empty

Return: 40

</div>

<div style="float: left; width: 45%;">
<h1> Code </h1>
 <pre><code>
class Stack {
  constructor() {
    this.items = [];
  }

  push(value) {
    this.items.push(value);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }
}

class PseudoQueue {
  constructor() {
    this.inStack = new Stack();
    this.outStack = new Stack();
  }

  enqueue(value) {
    while (!this.inStack.isEmpty()) {
      this.outStack.push(this.inStack.pop());
    }
    this.inStack.push(value);
    while (!this.outStack.isEmpty()) {
      this.inStack.push(this.outStack.pop());
    }
  }

  dequeue() {
    return this.inStack.pop();
  }
} 
  </pre></code>
</div>



<div style="float: right; width: 45%;">
<h1> BigO </h1>
 time complexity of this algorithm is O(1) </br>
 space complexity of this algorithm is O(1)
</div>

_______________________

## Whiteboard screenshoot
<img src='../Assests/Screenshot 2023-07-10 214919(1).png'/>
<img src='../Assests/Screenshot 2023-07-10 214941(2).png'/>
________________

## Testing
```
testing ensures that enqueue and dequeue operations work as intended. By creating test cases for different scenarios and running them, we can confirm that the class behaves correctly, produces expected outputs, and handles edge cases appropriately. Testing increases confidence in the code's reliability, aids in maintaining code quality, and facilitates future changes or improvements.
```
