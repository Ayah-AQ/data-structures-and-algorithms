<div style="float: left; width: 50%;">
<h1> Problem Domain </h1>
<p>Write a function called reverseArray which takes an array as an argument. Without utilizing any of the built-in methods available to your language, return an array with elements in reversed order.</p>
<ul> <li>Input: Array of numbers</li>
<li> Output: the same array numbers but in reversed order</li>

 </ul> </div>

<div style="float: right; width: 50%;">
<h1> Algorithm </h1>
<ol>
<li>Create an empty array called <strong>reversedArr</strong>.</li>
 <li>Start a loop that iterates from the last index (arr.length - 1) to the first index (0).</li>
<ul>Within each iteration:
<li> 
Retrieve the element at the current index i from arr using arr[i].
</li>
<li>Append the element to reversedArr using reversedArr.push(arr[i]).</li>
</ul>
<li>Exit the loop.
</li>
<li>
Return the reversedArr as the result.</li><ol>
</div>
<div style="float: left; width: 50%;">
<h1> Test Cases </h1>

Given -> [1, 2, 3, 4, 5, 6], return ->  [6, 5, 4, 3, 2, 1]
<br/>
Given -> [89, 2354, 3546, 23, 10, -923, 823, -12], return -> [-12, 823, -923, 10, 23, 3546, 2354, 89]
</div>

<div style="float: right; width: 50%;">
<h1> Code </h1>
 <pre><code>
function reverseArray(arr) {
  var reversedArr = [];
  for (var i = arr.length - 1; i >= 0; i--) {
    reversedArr.push(arr[i]);
  }
  return reversedArr;
}
 </pre></code>
</div>

<div style="float: left; width: 50%;">
<h1> Visiulization </h1>
head 1 -> 2 -> 3 -> 4 > 5 -> 6 Null return 6<br/>
[6]<br/>
head 1 -> 2 -> 3 -> 4 -> 5 Null return 5<br/>
[6,5]<br/>
head 1 -> 2 -> 3 -> 4 Null return 4<br/>
[6,5,4]<br/>
head 1 -> 2 -> 3 Null return 3<br/>
[6,5,4,3]<br/>
head 1 -> 2 Null return 2<br/>
[6,5,4,3,2]<br/>
head  1  Null return 1<br/>
[6,5,4,3,2,1]

</div>
<div style="float: right; width: 50%;">
<h1> pseudocode </h1>
 <pre><code>
function reverseArray(arr)
    Create an empty array called reversedArr
    
    For i = length(arr) - 1 to 0 (decrementing i by 1 in each iteration)
        Append arr[i] to reversedArr
    
    Return reversedArr
 </pre></code>
</div>

<div style="float: right; width: 50%;">
<h1> Step through </h1>
<table border='4'>
        <tbody>
            <tr>
                <td>Current</td>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
                <td>6</td>
            </tr>
            <tr>
                <td>Passengers</td>
                <td>6</td>
                <td>5</td>
                <td>4</td>
                <td>3</td>
                <td>2</td>
                <td>1</td>
            </tr>
        </tbody>
    </table>
</div>
_______________________

## Whiteboard screenshoot
<img src='../Assests/Screenshot%202023-06-12%20at%208.13.50%20PM.png'/>
________________

## Testing
The provided code defines a function called reverseArray that is intended to reverse the order of elements in an array. When this function is called with an array as input, it is expected to return a new array with the elements in reversed order. However, without executing the code, the actual output cannot be determined, but the expected output is a reversed array.

