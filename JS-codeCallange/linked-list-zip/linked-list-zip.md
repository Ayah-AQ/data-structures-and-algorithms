<div style="float: left; width: 45%;">
<h1> Problem Domain </h1>

<ul>
<li>Write a function called zip lists</li>
<li>Arguments: 2 linked lists</li>
<li>Return: New Linked List, zipped as noted below</li>
<li>Zip the two linked lists together into one so that the nodes alternate between the two lists and return a reference to the the zipped list.</li>
<li>Try and keep additional space down to O(1)</li>
<li>You have access to the Node class and all the properties on the Linked List class as well as the methods created in previous challenges.</li>
<ul>
</p>

<ul> <li>Input: 2 Linked list </li>
<li> Output: add thim togther as zipped </li>

 </ul> </div>

<div style="float: right; width: 45%;">
<h1> Algorithm </h1>

<ol>
<li>Check if either list1 or list2 is null. If one of them is null, return the other list.</li>
<li>Set the head variable to list1, as it will be the head of the zipped list.</li>
<li>Initialize current1 as the next node after the head of list1.</li>
<li>Initialize current2 as the head of list2.</li>
<li>Iterate while both current1 and current2 are not null:</li>
<ul>
<li>Create temporary variables temp1 and temp2 to store the next nodes of current1 and current2, respectively.</li>
<li>Update the next pointer of current1 to point to current2.</li>
<li>Update the next pointer of current2 to point to temp1.</li>
<li>Move current1 to temp1 and current2 to temp2</li>
</ul>
<li>Return the head of the zipped list.</li>
</ol>
</div>
<div style="float: left; width: 45%;">
<h1> Test Cases </h1>
list1: 1 -> 3 -> 2 -> null | list2: 5 -> 9 -> 4 -> null , return  1 -> 5 -> 3 -> 9 -> 2 -> 4 -> null
list1: 1 -> 3 -> null | list2: 5 -> 9 -> 4 -> null , return 1 -> 5 -> 3 -> 9 -> 4 -> null
list1: 1 -> 3 -> 2 -> null | list2:5 -> 9 -> null , return 1 -> 5 -> 3 -> 9 -> 2 -> null
list1: null | list2: 5 -> 9 -> 4 -> null , return 5 -> 9 -> 4 -> null
list1: null | list2: null , return  null

</div>

<div style="float: right; width: 40%;">
<h1> Visiulization </h1> 
List 1: 1 -> 3 -> 2 -> null | List 2: 5 -> 9 -> 4 -> null<br/>

Add the first node from List 1 (1) to the new list. <br/>

1 </br>

Add the first node from List 2 (5) after the node from List 1.<br/>

1 -> 5 <br/>

Add the second node from List 1 (3) after the node from List 2.

1 -> 5 -> 3<br/>

Add the second node from List 2 (9) after the node from List 1.

1 -> 5 -> 3 -> 9 <br/>

Add the third node from List 1 (2) after the node from List 2.

1 -> 5 -> 3 -> 9 -> 2<br/>

Add the third node from List 2 (4) after the node from List 1.

1 -> 5 -> 3 -> 9 -> 2 -> 4 <br/>

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

function zipLists(list1, list2) {
  if (!list1) {
    return list2;
  }
  if (!list2) {
    return list1;
  }

  let head = list1;
  let current1 = list1.next;
  let current2 = list2;

  while (current1 && current2) {
    let temp1 = current1.next;
    let temp2 = current2.next;

    current1.next = current2;
    current2.next = temp1;

    current1 = temp1;
    current2 = temp2;
  }

  return head;}
 </pre></code>
</div>



<div style="float: right; width: 45%;">
<h1> BigO </h1>
 time complexity of this algorithm is O(n) </br>
 space complexity of this algorithm is O(1)
</div>

_______________________

## Whiteboard screenshoot
<img src='../Assests/Screenshot%202023-07-03%20150204.png'/>
________________

## Testing
```
The zipLists function has been tested with various cases and works correctly. It has a time complexity of O(n) and a space complexity of O(1). Overall, the function is both efficient and reliable.
```
