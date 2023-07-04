<div style="float: left; width: 45%;">
<h1> Problem Domain </h1>
<p>Write the following method for the Linked List class: <br/>
1- kth from end<br/>
<ul>
<li>argument: a number, k, as a parameter.</li>
<li>Return the node’s value that is k places from the tail of the linked list.</li>
<li>You have access to the Node class and all the properties on the Linked List class as well as the methods created in previous challenges.</li>
<ul>
</p>

<ul> <li>Input: number index starting from the end </li>
<li> Output: the number at input index </li>

 </ul> </div>

<div style="float: right; width: 45%;">
<h1> Algorithm </h1>

<ol>
<li>Initialize variables: count to track the current position in the linked list, current to traverse the list, and kthNode to store the kth node from the end.</li>
<li>Traverse the linked list using a while loop, continuing until current reaches the end (i.e., current becomes null).</li>
<li>Inside the loop, check if the current position count matches the desired kth position. If it does, assign the head as the initial kth node</li>
<li>Inside the loop, check if the current position count matches the desired kth position. If it does, assign the head as the initial kth node </li>
<li>Increment count and move current to the next node in each iteration.</li>
<li>After the loop ends, check if kthNode is still null. If it is, it means k is larger than the size of the linked list, so throw an error.</li>
<li>Return the value of the kth node (kthNode.value).</li>
</ol>
</div>
<div style="float: left; width: 45%;">
<h1> Test Cases </h1>

head -> {1} -> {3} -> {8} -> {2} -> X , arg -> 0 , return -> 2 // last element index 0 from the end <br/>
head -> {1} -> {3} -> {8} -> {2} -> X , arg -> 2 , return -> 3 // seconed element index 2 from the end <br/>
head -> {1} -> {3} -> {8} -> {2} -> X , arg -> 6 , return -> error // there is no index 6 <br/>

</div>

<div style="float: right; width: 40%;">
<h1> Visiulization </h1> 
fast (both pointing to the head)<br/>
{{1}} -> 3 -> 8 -> 2 -> X , slow <br/>

slow will keep pointing to head while fast will move to index 2 (8)<br/>
{1} -> 3 -> {8} -> 2 -> X , k = 2 <br/>

move both from there position untill reach the last element<br/>
1 -> {3} -> 8 -> 2 -> {X}<br/>
return value pointed by slow 

</div>
<div style="float: left; width: 45%;">
<h1> Code </h1>
 <pre><code>
class LinkedList {
  constructor() {
    this.head = null;
  }

  kthFromEnd(k) {
    if (this.head === null) {
      throw new Error("LinkedList is empty.");
    }

    let count = 0;
    let current = this.head;
    let kthNode = null;

    while (current !== null) {
      if (count === k) {
        kthNode = this.head;
      } else if (count > k) {
        kthNode = kthNode.next;
      }
      count++;
      current = current.next;
    }

    if (kthNode === null) {
      throw new Error("k is larger than the size of the LinkedList.");
    }

    return kthNode.value;
  }
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
<img src='../Assests/Screenshot%202023-06-26%20171807.png'/>
________________

## Testing
```
To find the node value that is k places from the tail of a linked list, we start with two pointers: slow and fast, both initially pointing to the head of the linked list. The fast pointer moves k nodes ahead of the slow pointer. If the fast pointer reaches the end of the linked list before completing k iterations, an exception is thrown since k is larger than the size of the linked list. Then, we move both pointers simultaneously until the fast pointer reaches the end of the linked list. At this point, the slow pointer is pointing to the desired node. We return the value of the node pointed to by slow. The algorithm has a time complexity of O(n), where n is the size of the linked list, and a space complexity of O(1).
```
