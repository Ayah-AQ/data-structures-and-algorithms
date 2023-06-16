<div style="float: left; width: 45%;">
<h1> Problem Domain </h1>
<p>Write a function called insertShiftArray which takes in an array and a value to be added. Without utilizing any of the built-in methods available to your language, return an array with the new value added at the middle index.</p>
<ul> <li>Input: A new value</li>
<li> Output: the value will be added to the middle index</li>
 </ul> </div>

<div style="float: right; width: 50%;">
<h1> Algorithm </h1>
<ol>
<li>Calculate the middle index of the input array.</li>
 <li>Create a new array.</li>
<ul>Iterate over the elements of the original array.
<li> If the current index is before the middle index, copy the element to the new array at the same index.</li>
<li>If the current index is the middle index, insert the given value into the new array.</li>
<li>If the current index is after the middle index, copy the element to the new array at the next index.</li>
</ul>
<li>Return the new array.</li>
<ol>
</div>

<div style="float: left; width: 45%;">
<h1> Test Cases </h1>
Given -> [2, 4, 5, -8],6 ,return ->  [2, 4, 5, 6, -8] / even length case
<br/>
Given -> [42, 8, 15, 23, 42],16 ,return -> [42, 8, 16, 15, 23, 42] / odd length case
<br/>
Given -> [ ],5 return ->  [5] / empty array case
<br/>
Given -> [1, 2, 3, 4, 5] return ->  [1, 2, Null, 3, 4, 5] / if no value
<br/>
Given -> 10, return ->  [10] / no array case
</div>

<div style="float: right; width: 50%;">
<h1> Code </h1>
 <pre><code>
function insertShiftArray(arr, value) {
  const middle = Math.floor(arr.length / 2);
  const newArr = new Array(arr.length + 1);

  for (let i = 0; i < middle; i++) {
    newArr[i] = arr[i];
  }

  newArr[middle] = value;

  for (let i = middle; i < arr.length; i++) {
    newArr[i + 1] = arr[i];
  }
  return newArr;
}
 </pre></code>
</div>

<div style="float: left; width: 45%;">
<h1> Visiulization </h1>
head 1 -> 2 -> 3 -> 4 > 5 -> 6 Null, value 7 find the middle of arr = 6/2 =3<br/>
[1,2,3,middle,4,5,6]<br/>
head 1 -> 2 -> 3 -> middle -> 4 -> 5 Null, value 7 return 7 <br/>
[1,2,3,7,4,5,6]

</div>
<div style="float: left; width: 45%;">
<h1> pseudocode </h1>
 <pre><code>
    function insertShiftArray(arr, value):
    middle = length(arr) / 2 
    newArr = new Array(length(arr) + 1)
    for i = 0 to middle - 1:
    newArr[i] = arr[i]
    newArr[middle] = value
    for i = middle to length(arr) - 1:
    newArr[i + 1] = arr[i]
   return newArr
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
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>Value</td>
                <td>4</td>
                <td>5</td>
                <td>6</td>
            </tr>
        </tbody>
    </table>
</div
 
------------------------

 ## Whiteboard screenshoot 
<img src='../Assests/Screenshot%202023-06-14%20073157.png'/>

------------------------

## Testing
```
Testing involves creating test cases that cover different scenarios to validate the behavior and correctness of the insertShiftArray function. It includes providing various input arrays and values to ensure the function handles different cases correctly.

Some test case scenarios to consider are:

1- Basic Case: Test with an input array of odd length and a value to insert.
2- Even Length Case: Test with an input array of even length and a value to insert.
3- Empty Array Case: Test with an empty input array.
4- No Value Case: Test without providing a value to insert.
5- Large Array Case: Test with a large input array.

The provided code defines a function called insertShiftArray that is intended to add a value to the middle of the array. When this function is called with an value as input, it is expected to return a new array with the new element at the middle. However, without executing the code, the actual output cannot be determined, but the expected output is a reversed array.
```


