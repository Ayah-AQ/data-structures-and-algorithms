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
<li>It checks if the head node is null. If it is, it means the linked list is empty, so the function returns null.</li>
<li>It checks if n is less than or equal to 0. If it is, it throws an error with the message "Invalid value: n = " followed by the value of n</li>
<li>It iterates through the linked list starting from the head node and counts the number of nodes in the list, storing the count in the length variable.</li>
<li>It checks if n is greater than the length of the linked list. If it is, it throws an error with the message n + " is greater than the number of nodes in the list".</li>
<li>It calculates the number of steps needed to reach the (length - n + 1)th node from the beginning of the list.</li>
<li>It iterates through the linked list again, starting from the head node, and moves steps number of times to reach the desired node.</li>
<li>It returns the now node, which represents the nth node from the end of the list.</li>
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

1 -> 2 -> 3 -> 4 -> 5 -> null, n=3  <br/>
First, the function iterates through the linked list to find its length. The length is determined to be 5.<br/>
the function proceeds to calculate the number of steps needed to reach the desired node. In this case, steps is calculated as 5 - 3 = 2.<br/>
Starting from the head node, it moves two steps to reach the desired node.<br/>
1 -> 2 -> {3} -> 4 -> 5 -> null <br/>
return 3 <br/>

return value pointed by slow 

</div>
<div style="float: left; width: 45%;">
<h1> Code </h1>
 <pre><code>
class List {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function getNodeFromEnd(head, n) {
  if (head === null) {
    return null;
  }

  if (n <= 0) {
    throw new Error("Invalid value: n = " + n);
  }

  let length = 0;
  let now = head;

  while (now !== null) {
    length++;
    now = now.next;
  }

  if (n > length) {
    throw new Error(n + " is greater than the number in the list");
  }

  let steps = length - n;
  now = head;
  while (steps > 0) {
    now = now.next;
    steps--;
  }

  return now;
}
 </pre></code>
</div>



<div style="float: right; width: 45%;">
<h1> BigO </h1>
 time complexity of this algorithm is O(n) </br>
 space complexity of this algorithm is O(1)
</div>
<!-- _______________________ -->

 <!-- ## Whiteboard screenshoot
<img src='../Assests/Screenshot%202023-06-26%20171807.png'/>
________________ -->

<!-- ## Testing
```
To find the node value that is k places from the tail of a linked list, we start with two pointers: slow and fast, both initially pointing to the head of the linked list. The fast pointer moves k nodes ahead of the slow pointer. If the fast pointer reaches the end of the linked list before completing k iterations, an exception is thrown since k is larger than the size of the linked list. Then, we move both pointers simultaneously until the fast pointer reaches the end of the linked list. At this point, the slow pointer is pointing to the desired node. We return the value of the node pointed to by slow. The algorithm has a time complexity of O(n), where n is the size of the linked list, and a space complexity of O(1).
``` -->
