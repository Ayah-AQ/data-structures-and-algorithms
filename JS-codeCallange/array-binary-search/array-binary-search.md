<div style="float: left; width: 45%;">
<h1> Problem Domain </h1>
<p><ul>
<li>Write a function called BinarySearch which takes in 2 parameters: a sorted array and the search key. Without utilizing any of the built-in methods available to your language, return the index of the array’s element that is equal to the value of the search key, or -1 if the element is not in the array.</li>
<li> <strong> NOTE: </strong> The search algorithm used in your function should be a binary search.
Check the Resources section for details </li>
<>ul
</p>
<ul> <li>Input: Sorted array and the search key </li>
<li> Output: index of the array’s element that is equal to the value of the search key, or -1 if the element is not in the array </li>

 </ul> </div>

<div style="float: right; width: 45%;">
<h1> Algorithm </h1>
<ol>
<li>Initialize `start` and `end` as the first and last indices of the array.</li>
 <li>Repeat the following steps while start is less than or equal to end:
</li>
<ul>Within each iteration:
<li>Calculate the middle index as (start + end) / 2.</li>
<li>If the value at the middle index is equal to the search key, return the middle index.</li>
<li>If the value at the middle index is less than the search key, set start to mid + 1.</li>
<li>If the value at the middle index is greater than the search key, set end to mid - 1.
</li>
</ul>
<li>If the search key is not found, return -1.
</li>
<li>
Return the index of key result</li><ol>
</div>
<div style="float: left; width: 45%;">
<h1> Test Cases </h1>

Given -> [4, 8, 15, 16, 23, 42], 15 Return -> 2<br/>
Given -> [-131, -82, 0, 27, 42, 68, 179], 42 Return -> 4<br/>
Given -> [11, 22, 33, 44, 55, 66, 77], 90 Return -> -1<br/>
Given -> [1, 2, 3, 5, 6, 7], 4 Return -> -1<br/>
</div>

<div style="float: right; width: 45%;">
<h1> Code </h1>
 <pre><code>
function BinarySearch(arr, key) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (arr[mid] === key) {
      return mid;
    } else if (arr[mid] < key) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return -1;
}
 </pre></code>
</div>

<div style="float: left; width: 45%;">
<h1> Visiulization </h1>
head 2 -> 5 -> 8 -> 12 -> 16 -> 23 -> 38 -> 56 -> 72 -> 91 Null search 23 <br/>
Left index: 0<br/>
Right index: 9<br/>
head 2 -> 5 -> 8 -> 12 -><stong>16 </stong>-> 23 -> 38 -> 56 -> 72 -> 91 Null<br/>
(0 + 9) / 2 = 4.5 (rounded down to 4)<br/>
arr[4] (16) with the search key (23).<br/>
Since 16 < 23, update the star index to mid + 1, which is 5.<br/>
head 2 -> 5 -> 8 -> 12 -> 16 -> 23 -> 38 -> <strong>56</strong> -> 72 -> 91 Null<br/>
(5 + 9) / 2 = 7
Compare arr[7] (56) with the search key (23).
Since 56 > 23, update the end index to mid - 1, which is 6.
head 2 -> 5 -> 8 -> 12 -> 16 -> 23 -> 38 -> <strong>56</strong> -> 72 -> 91 Null<br/>
(5 + 6) / 2 = 5.5 (rounded down to 5)
Compare arr[5] (23) with the search key (23).
Since 23 is equal to the search key, return the index 5 as the result.

</div>
<div style="float: left; width: 45%;">
<h1> pseudocode </h1>
 <pre><code>
function BinarySearch(arr, key):
    left = 0
    right = length(arr) - 1
    
    while left <= right:
        mid = (left + right) / 2
        
        if arr[mid] equals key:
            return mid
        else if arr[mid] less than key:
            left = mid + 1
        else:
            right = mid - 1
    
    return -1
 </pre></code>
</div>

<div style="float: right; width: 45%;">
<h1> Big O</h1>
<table border='4'>
        <tbody>
            <tr>
                <td>Time</td>
                <td>O(log(n))</td>
            </tr>
            <tr>
                <td>Space</td>
                <td>O(n)</td>
            </tr>
        </tbody>
    </table>
</div>
_______________________

## Whiteboard screenshoot
<img src='../Assests/Screenshot%202023-06-19%20120101.png'/>
________________

## Testing
Binary Search is an efficient algorithm used to find an element in a sorted array. It starts by comparing the target element with the middle element of the array. If they are equal, the element is found. If the target is smaller, the search continues in the left half of the array, or in the right half if the target is larger. This process is repeated by dividing the search range in half until the element is found or the range is exhausted. Binary Search quickly narrows down the search space and has a time complexity of O(log n), making it a powerful technique for searching in sorted arrays. However, without executing the code, the actual output cannot be determined, but the expected output is the index of the key. 

