<div style="float: left; width: 45%;">
<h1> Problem Domain </h1>
<p> write a function to accepts an integer, and returns the nth number in the Fibonacci sequence.</p>
<ul> <li>Input: integer</li>
<li> Output:  the nth number in the Fibonacci sequence</li>

 </ul> </div>

<div style="float: right; width: 45%;">
<h1> Algorithm Recursive </h1>
<ol>
<li>Define a recursive function fibonacci(n) that takes an input n representing the position of the desired Fibonacci number.</li>
 <li>If n is 0 or 1, return n as the Fibonacci number at that position.</li>
<li>Otherwise, recursively call fibonacci(n-1) and fibonacci(n-2) to calculate the two preceding Fibonacci numbers.</li>
<li>Sum the two preceding Fibonacci numbers to obtain the Fibonacci number at position n.</li>
<li>Return the calculated Fibonacci number.</li><ol>
</div>

<div style="float: left; width: 45%;">
<h1> Algorithm Iterative </h1>
<ol>
<li>Define a function named fibonacci that takes an integer n as the input parameter.</li>
 <li> If n is equal to 0, return 0 since the Fibonacci position 0 is defined as 0.</li>
<li>Initialize two variables, current and next, to 0 and 1 respectively. These variables represent the current and next Fibonacci numbers.</li>
<li>Repeat the following steps n times:
<ol>
<li>Calculate the next Fibonacci number by adding current and next together, and store the result in a temporary variable called temp.</li>
<li>Update the value of current to be equal to next.</li>
<li>Update the value of next to be equal to temp.</li>
</ol>
</li>
<li>Return the value of next, which will be the Fibonacci number at position n.</li><ol>
</div>

<div style="float: right; width: 45%;">
<h1> Test Cases </h1>

Given -> 0, return -> 0
<br/>
Given -> 6, return -> 8
<br/>
Given -> 10, return -> 55
<br/>
Given -> 15 , return -> 610
<br/>
Given -> -1 , return -> undefined
<br/>
Given -> 1.5 , return -> undefined
<br/>
Given -> "string" , return -> undefined
<br/>
Given -> null , return -> null
</div>

<div style="float: left; width: 45%;">
<h1> Code Recursive</h1>
 <pre><code>
function fibonacci(n) {
  if (n <= 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

 </pre></code>
</div>

<div style="float: right; width: 45%;">
<h1> BigO  </h1>
 <pre><code>

 
The time complexity of the recursive Fibonacci algorithm is exponential, specifically O(2^n).
The space complexity of the recursive Fibonacci algorithm is O(n) 
 </pre></code>
</div>

<div style="float: right; width: 45%;">
<h1> Code Iterative </h1>
 <pre><code>
function fibonacci(n) {
  if (n === 0) {
    return 0; // Return 0 for Fibonacci position 0
  }

  let current = 0;
  let next = 1;

  for (let i = 2; i <= n; i++) {
    let temp = current + next;
    current = next;
    next = temp;
  }

  return next;
}

</pre></code>
</div>

<div style="float: left; width: 45%;">
<h1> BigO  </h1>
 <pre><code>

 
The time complexity of the Iterative Fibonacci algorithm is exponential,  O(n)
The space complexity of the Iterative Fibonacci algorithm is O(1) 
 </pre></code>
</div>

<div style="float: left; width: 45%;">
<h1> Visiulization </h1>
head <strong>1 </strong>-> 2 -> 3 -> 4 > 5 -> 6 Null return 0+1<br/>
1<br/>
head 1 -> <strong>2</strong> -> 3 -> 4 > 5 -> 6 Null return 1+0<br/>
1<br/>
head 1 -> 2 -><strong>3</strong>  -> 4 > 5 -> 6 Null return 1+1<br/>
2<br/>
head 1-> 2 -> 3 -><strong>4  </strong> > 5 -> 6 Null return 2+1<br/>
3 <br/>
head 1-> 2 -> 3 -> 4 -><strong> 5</strong>  -> 6 Null return 3+2<br/>
5<br/>
head 1-> 2 -> 3 -> 4 > 5 -> <strong>6 </strong> Null return 5+3<br/>
8

</div>

<div style="float: right; width: 45%;">
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
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>5</td>
                <td>8</td>
            </tr>
        </tbody>
    </table>
</div>
<!-- _______________________ -->

<!-- ## Whiteboard screenshoot
<img src='../Assests/Screenshot%202023-06-21%20222220.png'/> -->
<!-- ________________ -->
 
 <!-- ## Testing
    The provided code defines a function called Fibonacci that is intended to add the sum of the previous 2 index untill the **nth value** . When this function is called each 2 indexis will be added for sum of previous, it is expected to return value for the sum of last 2 indexes before nth value. However, without executing the code, the actual output cannot be determined, but the expected output is a reversed array.  -->

