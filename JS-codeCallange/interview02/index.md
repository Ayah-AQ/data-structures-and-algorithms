<div style="float: left; width: 45%;">
<h1> Problem Domain </h1>
<p>validate whether or not a Linked list is palindrome <br/>
** <strong>Note</strong> A palindrome is a word, phrase, number, or sequence of nodes which reads the same backward as forward **
</p>

<ul> <li>Input: value string, int or sequence</li>
<li> Output: check if the word is palindrome </li>

 </ul> </div>

<div style="float: right; width: 45%;">
<h1> Algorithm </h1>
<ol><li>Traverse the linked list and store its values in an array.</li>
<li>Use two pointers, left and right, initialized to the start and end of the array, respectively.<li>
<li>While left is less than right:</li>
<ul>
<li>If the values at left and right are not equal, return false as it is not a palindrome.</li>
<li>Increment left and decrement right.</li>
</ul>
<li>If the loop completes without finding any mismatches, return true as the linked list is a palindrome.</li>
</ol>
</div>
<div style="float: left; width: 45%;">
<h1> Test Cases </h1>

insert -> head->{t}->{a}->{c}->{o}->{c}->{a}->{t}	, return -> TRUE<br/>
insert -> head->{m}->{o}->{o}->{m}, return ->	TRUE<br/>
insert -> head->{h}->{o}->{u}->{s}->{e}, return ->	FALSE<br/>
</div>

<div style="float: right; width: 45%;">
<h1> Code </h1>
 <pre><code>
function isPalindrome(head) {
  let values = [];
  let currentNode = head;

  while (currentNode !== null) {
    values.push(currentNode.data);
    currentNode = currentNode.next;
  }

  let leftIndex = 0;
  let rightIndex = values.length - 1;

  while (leftIndex < rightIndex) {
    if (values[leftIndex] !== values[rightIndex]) {
      return false;
    }
    leftIndex++;
    rightIndex--;
  }

  return true;
}

 </pre></code>
</div>

<div style="float: left; width: 40%;">
<h1> Visiulization </h1>
1 -> 2 -> 3 -> 2 -> 1 <br/>
Traverse the linked list and store its values in an array: [1, 2, 3, 2, 1].<br/>
Use two pointers, left and right, pointing to the start and end of the array, respectively.<br/>
Compare the values at left and right:
If they are not equal, the linked list is not a palindrome, so return false.<br/>
If they are equal, move left one step forward and right one step backward.<br/>
Repeat step 3 until left becomes greater than or equal to right.<br/>
If the loop completes without finding any mismatches, the linked list is a palindrome, so return true.<br/>
</div>

<div style="float: left; width: 45%;">
<h1> Step through </h1>
<table border='4'>
        <tbody>
            <tr>
                <td>Current</td>
                <td>1</td>
                <td>2</td>
                <td>3</td>
            </tr>
            <tr>
                <td>Passengers</td>
                <td>3</td>
                <td>2</td>
                <td>1</td>
            </tr>
        </tbody>
    </table>
</div>

<div style="float: left; width: 45%;">
<h1> BigO </h1>
 time complexity of this algorithm is O(n) </br>
 space complexity of this algorithm is O(n)
</div>

<!-- _______________________ -->

<!-- ## Whiteboard screenshoot
<img src='../Assests/Screenshot%202023-06-17%20192140.png'/>
________________ -->

<!-- ## Testing
```
Testing is crucial for verifying the correctness of our Linked List implementation. We can create tests to cover different aspects of the code.

First, we test the creation of an empty Linked List to ensure it initializes properly. We check if the head property is null or if the object has the expected properties.

Next, we test the insertion operation by adding nodes with different values. We verify if the nodes are inserted correctly and if the head property is updated accordingly.

To validate the includes method, we test it with both existing and non-existing values. We expect true when searching for an existing value and false when searching for a non-existing one.

Lastly, we test the toString method to confirm that it generates the correct string representation of the Linked List. We compare the output with the expected format and content.
``` -->
