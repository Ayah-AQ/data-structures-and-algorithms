<div style="float: left; width: 45%;">
<h1> Problem Domain </h1>
<p> Write the following methods for the Linked List class:

<ul>
<li><strong>append</strong> </li>
<ol>
<li>arguments: new value</li>
<li>adds a new node with the given value to the end of the list</li>
</ol>

<li>insert before</li>
<ol>
<li>arguments: value, new value</li>
<li>adds a new node with the given new value immediately before the first node that has the value specified</li>
</ol>

<li>insert after</li>
<ol>
<li>arguments: value, new value</li>
<li>adds a new node with the given new value immediately after the first node that has the value specified</li>
</ol>
</p>
<ul> <li>Input: a node </li>
<li> Output: add the node to the wanted place at thr bigining, endor the middle </li>

 </ul> </div>

<div style="float: right; width: 45%;">
<h1> Algorithm </h1>
<ol>
<li>append(newValue):</li>
<ul><li>Create a new node with the given newValue.</li>
 <li>If the linked list is empty (head is null), set the head to the new node.</li>
 <li>Otherwise, iterate through the linked list until the last node.</li>
 <li>Set the next pointer of the last node to the new node.</li></ul>

 <li>insertBefore(value, newValue):</li>
<ul><li>Calculate the middle index as (start + end) / 2.</li>
<li>If the linked list is empty (head is null), return.</li>
<li>If the value to insert before matches the value of the head node:</li>
<ul>
<li>Create a new node with the given newValue.</li>
<li>Set the next pointer of the new node to the current head.</li>
<li>Update the head to point to the new node.</li>
</ul>
<li>Otherwise, iterate through the linked list until finding the node with the value to insert before:</li>
<ul>
<li>Create a new node with the given newValue.</li>
<li>Set the next pointer of the new node to the next node of the current node.</li>
<li>Set the next pointer of the current node to the new node.</li>
</ul></ul>

 <li>insertAfter(value, newValue):</li>
 <ul>
<li>If the linked list is empty (head is null), return.</li>
<li>Iterate through the linked list until finding the node with the value to insert after:</li>
<ul>
<li>Create a new node with the given newValue.</li>
<li>Set the next pointer of the new node to the next node of the current node.</li>
<li>Set the next pointer of the current node to the new node.Set the next pointer of the current node to the new node.</li>
</ul>
 </ul>
<ol>
</div>
<div style="float: left; width: 45%;">
<h1> Test Cases </h1>
append -> 1, return -> head= 1, next=null<br/>
append -> 1,2, return -> head= 1, next=2, next.next=null<br/>
append -> 1,2,3 return -> head= 1, next=2, next.next=3, next.next.next=null<br/>

insertBefore -> (2,4) , return ->  head= 1, next=4, next.next=2, next.next.next=3 ,next.next.next.next=null<br/>   // Inserting before a value that exists in the list
insertBefore -> (1, 5), return ->  head= 5, next=1, next.next=4, next.next.next=2 ,next.next.next.next=3  ,next.next.next.next.next=null <br/> // Inserting before a value that exists in the list
insertBefore -> (9, 8), return ->  error <br/> // Inserting before a value that doesn't exists in the list

insertAfter -> (4, 6), return ->  head= 5, next=1, next.next=4, next.next.next=6 ,next.next.next.next=2, next.next.next.next.next=3,next.next.next.next.next=null  <br/>   // Inserting after a value that exists in the list
insertAfter -> (3, 7), return ->  head= 5, next=1, next.next=4, next.next.next=6 ,next.next.next.next=2, next.next.next.next.next=3, next.next.next.next.next=3,next.next.next.next.next=7, next.next.next.next.next.next=null <br/>   // Inserting after a value that exists in the list
insertAfter -> (9, 8), return ->  error <br/>// Inserting after a value that doesn't exist in the list


</div>

<div style="float: right; width: 45%;">
<h1> Code </h1>
 <pre><code>
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(newValue) {
    const newNode = new Node(newValue);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  insertBefore(value, newValue) {
    if (!this.head) {
      return;
    }

    if (this.head.value === value) {
      const newNode = new Node(newValue);
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.next) {
      if (current.next.value === value) {
        const newNode = new Node(newValue);
        newNode.next = current.next;
        current.next = newNode;
        return;
      }
      current = current.next;
    }

    throw new Error(`Value ${value} not found in the list.`);
  }

  insertAfter(value, newValue) {
    if (!this.head) {
      return;
    }

    let current = this.head;
    while (current) {
      if (current.value === value) {
        const newNode = new Node(newValue);
        newNode.next = current.next;
        current.next = newNode;
        return;
      }
      current = current.next;
    }

    throw new Error(`Value ${value} not found in the list.`);
  }

  toString() {
    let current = this.head;
    let result = '';
    while (current) {
      result += `{${current.value}} -> `;
      current = current.next;
    }
    result += 'NULL';
    return result;
  }
}
 </pre></code>
</div>

<div style="float: left; width: 45%;">
<h1> Visiulization </h1>
head -> null  append 1<br/>
1<br/>
head -> 1 append 2<br/>
1 2 <br/>
head -> 1 next -> 2 append 3<br/>
1 2 3<br/>

head -> 1 next -> 2 next.next -> 3  addBefrore 3 5 <br/>
1 2 5 3<br/>

head -> 1 next -> 2 next.next -> 5 next.next.next -> 3  addBefrore 2 4 <br/>
1 4 2 5 3 

head -> 1 next -> 4 next.next -> 2 next.next.next -> 5 next.next.next.next -> 3   addBeAfter 3 8 <br/>
1 4 2 5 3 8
<br/>


</div>

<div style="float: left; width: 45%;">
<h1> Big O</h1>
<table border='4'>
        <tbody>
            <tr>
                <td>Time</td>
                <td> O(n)</td>
            </tr>
            <tr>
                <td>Space</td>
                <td>O(1)</td>
            </tr>
        </tbody>
    </table>
</div>
_______________________

## Whiteboard screenshoot
<img src='../Assests/Screenshot%202023-06-23%20195236(1).png'/>
<img src='../Assests/Screenshot%202023-06-23%20195314(2).png'/>
________________

## Testing

The provided code for the Linked List methods has been tested and verified to be working correctly. The tests cover various scenarios, including appending nodes to the end of the list, inserting nodes before and after existing nodes, and handling error cases when the specified values are not found in the list. The code has a time complexity of O(n) for all three methods, where n represents the size of the linked list, and a space complexity of O(1). The tests ensure that the methods perform the expected operations and maintain the integrity of the linked list structure.

