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
<li>Create a dummy head node and initialize a tail pointer to track the end of the merged list.</li>
<li>Iterate while both input lists are not null:</li>
<ul>
<li>Append the node from the first list to the merged list by setting tail.next to the current node and moving to the next node in the first list.</li>
<li>Update the tail pointer to the newly appended node.</li>
<li>Swap the first and second lists</li>
</ul>
<li>If any of the input lists still has remaining nodes, append them to the merged list by setting tail.next to the remaining nodes.</li>
<li>Return the merged list by skipping the dummy head node and returning its next pointer.</li>
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

  let dummyHead = new Node(null);
  let tail = dummyHead;
  let current1 = list1;
  let current2 = list2;

  while (current1 && current2) {
    tail.next = current1;
    current1 = current1.next;
    tail = tail.next;

    tail.next = current2;
    current2 = current2.next;
    tail = tail.next;
  }

  if (current1) {
    tail.next = current1;
  } else if (current2) {
    tail.next = current2;
  }

  return dummyHead.next;
}
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
