<div style="float: left; width: 45%;">
<h1> Problem Domain </h1>
<p>Node <br/>
1- Create a Node class that has properties for the value stored in the Node, and a pointer to the next Node.<br/>
2- Linked List<br/>
<ul><li>Create a Linked List class
Within your Linked List class, include a head property.</li>
<ul><li>
Upon instantiation, an empty Linked List should be created.</li></ul>
The class should contain the following methods<br/>
<strong>insert</strong>

<ol><li>Arguments: value</li>
<li>Returns: nothing</li>
<li>Adds a new node with that value to the head of the list with an O(1) Time performance.</li></ol>
<strong>includes</strong>
<ol><li>Arguments: value</li>
<li>Returns: Boolean</li>
<li>Indicates whether that value exists as a Node’s value somewhere within the list.<br/></ol>
<strong>to string</strong>
<ol>
<li>
Arguments: none
</li>
<li>
Returns: a string representing all the values in the Linked List, formatted as:
"{ a } -> { b } -> { c } -> NULL"
</li></ol><ul>
</p>

<ul> <li>Input: values</li>
<li> Output: the values should be added to linked list as next value</li>

 </ul> </div>

<div style="float: right; width: 45%;">
<h1> Algorithm </h1>
<h3>Node Class </h3>
<ol><li>Create a class called Node.</li>
<li>The class should have properties:
<><li>value: to store the value of the node.</li>
<li>next: to store a reference to the next node (initialized to null).</li></oi>
<h3>Linked List Class</h3>
<ul><li>Create a class called LinkedList.</li>
<li>The class should have a property:</li>
<h4>head: to store the reference to the first node (initialized to null).</h4>
<h4>insert Method</h4>
<ul><li>Create a method called insert in the LinkedList class.<li>
<li>This method takes a value as a parameter.</li>
<li>Create a new node with the given value.</li>
<li>If the linked list is empty (head is null), set the head to the new node.</li>
<li>If the linked list is not empty, set the new node's next property to the current head.</li>
<li>Update the head to the new node.</li></ul>
<h4>includes Method</h4>
<ul><li>Create a method called includes in the LinkedList class.</li>
<li>This method takes a value as a parameter.</li>
<li>Start from the head of the linked list.</li>
<li>Traverse the linked list by following the next reference until reaching the end or finding a node with the target value.</li>
<li>If a node with the target value is found, return true.</li>
<li>If the end of the linked list is reached without finding the target value, return false.</li></ul>
<h4>toString Method</h4>
<ul><li>Create a method called toString in the LinkedList class.</li>
<li>Start from the head of the linked list.</li>
<li>Traverse the linked list by following the next reference.</li>
<li>Build a string representation of the linked list by appending the value of each node surrounded by curly braces and separated by arrows (->).</li>
<li>Append 'NULL' at the end to indicate the end of the linked list.</li>
<li>Return the resulting string.</li></ul></ol>
</div>
<div style="float: left; width: 45%;">
<h1> Test Cases </h1>

insert -> nothing, return -> head=null
<br/>
insert -> 10, return -> head= 10, next=null<br/>
insert -> 10 20 30, return -> head= 30, next=20, next.next=10, next.next.next=null<br/>
includes -> 10, return -> true<br/>
includes -> 50, return -> false<br/>
toString -> 10, return -> {'10'}<br/>
includes -> nothing, return -> 'null'
</div>

<div style="float: left; width: 45%;">
<h1> Code </h1>
 <pre><code>
class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    if (this.head === null) {
      this.head = new Node(value);
    } else {
      const newNode = new Node( value, this.head);
      this.head = newNode;
    }
  }

  includes(value) {
    let currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  }

  toString() {
    if (this.head === null) {
      return 'NULL';
    }
    let result = '';
    let currentNode = this.head;
    while (currentNode !== null) {
      result += `{ ${currentNode.value} } -> `;
      currentNode = currentNode.next;
    }
    result += 'NULL';
    return result;
  }
}
 </pre></code>
</div>

<div style="float: right; width: 45%;">
<h1> pseudocode </h1>
 <pre><code>
Node class:
Properties:
value
 next (default: null)

LinkedList class:
Properties:
 head (default: null)

insert(value):
 Create a new node with the given value
 If the linked list is empty:
   Set the head to the new node
 Otherwise:
   Set the new node's next to the current head
   Update the head to the new node

includes(value):
 Start from the head of the linked list
 While the current node is not null:
   If the current node's value is equal to the target value:
     Return true
   Move to the next node
 Return false

toString():
 Start from the head of the linked list
 Initialize an empty string variable
While the current node is not null:
   Append the current node's value surrounded by curly braces to the string
   If the current node has a next node:
     Append ' -> ' to the string
   Move to the next node
 Append 'NULL' to the string
 Return the string

 </pre></code>
</div>

<div style="float: left; width: 40%;">
<h1> Visiulization </h1>
head Null return Null <br/>
Null<br/>
insert 10 head 10 -> Null <br/>
{10}->Null<br/>
insert 20 head 20 ->10 -> Null <br/>
{20} -> {10} -> Null <br/>
insert 30  head 30 -> 20 -> 10 -> Null <br/>
{30} -> {20} -> {10} -> Null<br/>
</div>

<div style="float: right; width: 45%;">
<h1> Step through </h1>
<table border='4'>
        <tbody>
            <tr>
                <td>Current</td>
                <td>Null</td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>Passengers</td>
                <td>10</td>
                <td>Null</td>
                <td></td>
            </tr>
               <tr>
                <td>Passengers</td>
                <td>20</td>
                <td>10</td>
                <td>Null</td>
            </tr>
        </tbody>
    </table>
</div>
_______________________

## Whiteboard screenshoot
<img src='../Assests/Screenshot%202023-06-17%20192140.png'/>
________________

## Testing
```
Testing is crucial for verifying the correctness of our Linked List implementation. We can create tests to cover different aspects of the code.

First, we test the creation of an empty Linked List to ensure it initializes properly. We check if the head property is null or if the object has the expected properties.

Next, we test the insertion operation by adding nodes with different values. We verify if the nodes are inserted correctly and if the head property is updated accordingly.

To validate the includes method, we test it with both existing and non-existing values. We expect true when searching for an existing value and false when searching for a non-existing one.

Lastly, we test the toString method to confirm that it generates the correct string representation of the Linked List. We compare the output with the expected format and content.
```
