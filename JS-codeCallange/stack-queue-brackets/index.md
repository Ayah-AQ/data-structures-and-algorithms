<div style="float: left; width: 45%;">
<h1> Problem Domain </h1>
<ul>
<li>Write a function called validate brackets</li>
<li>Arguments: string</li>
<li>Return: boolean</li>
<ul>
<li>representing whether or not the brackets in the string are balanced</li>
</ul>
<li><strong>There are 3 types of brackets:</strong></li>
<ol>
<li>Round Brackets : ()</li>
<li>Square Brackets : []</li>
<li>Curly Brackets : {}</li>
</ol>
</ul>
</p>

<ul> <li>Input: data with brackets </ul>
<li> Output: True if all brackets are balanced & False if they are not</li>
 </ul> </div>

<div style="float: right; width: 45%;">
<h1> Algorithm </h1>
<ul>
<li>It defines a function called validateBrackets that takes a string as input and returns a boolean indicating whether the brackets are balanced or not.</li>
<li>Inside the function, it initializes an empty stack, which will be used to keep track of opening brackets encountered.</li>
<li>It iterates over each character in the input string using a for loop.</li>
<li>For each character, it checks if it is an opening bracket by calling the isOpenBracket function.</li>
<li>If the character is an opening bracket, it pushes it onto the stack.</li>
<li>If the character is a closing bracket, it checks if the stack is empty or if the closing bracket matches the topmost opening bracket on the stack. It uses the isCloseBracket and isMatchingPair functions for these checks.</li>
<li>If the stack is empty or the brackets don't match, the function returns false, indicating that the brackets are not balanced.</li>
<li>After processing all the characters in the string, it checks if the stack is empty. If it is, then all the opening brackets have been properly closed, and the function returns true. Otherwise, there are unclosed opening brackets, and the function returns false.</li>
</ul>
</div>


<div style="float: right; width: 45%;">
<h1> Test Cases </h1>
Input --> {}	, Output --> TRUE
Input --> {}(){}	, Output --> TRUE
Input --> ()[[Extra Characters]]	, Output --> TRUE
Input --> (){}[[]]	, Output --> TRUE
Input --> {}{Code}[Fellows](())	, Output --> TRUE
Input --> [({}]	, Output --> FALSE
Input --> (](	, Output --> FALSE
Input --> {(})	, Output --> FALSE
</div>

<div style="float: left; width: 40%;">
<h1> Visiulization </h1> 
<strong>([]{()})</strong>
<table border='4'>
        <tbody>
            <tr>
                <td>Current</td>
                <td>(</td>
                <td>[</td>
                <td>]</td>
                <td>{</td>
                <td>(</td>
                <td>)</td>
                <td>}</td>
                <td>)</td>
            </tr>
            <tr>
                <td>stack</td>
                <td>(</td>
                <td>([</td>
                <td>(</td>
                <td>({</td>
                <td>({(</td>
                <td>({</td>
                <td>(</td>
                <td>empty</td>
            </tr>
        </tbody>
    </table>
return TRUE
</div>

<div style="float: right; width: 45%;">
<h1> Code </h1>
 <pre><code>
function validateBrackets(string) {
    const stack = [];
  
    for (let i = 0; i < string.length; i++) {
      const currentChar = string[i];
      
      if (isOpenBracket(currentChar)) {
        stack.push(currentChar);
      } else if (isCloseBracket(currentChar)) {
        if (stack.length === 0 || !isMatchingPair(stack.pop(), currentChar)) {
          return false;
        }
      }
    }
  
    return stack.length === 0;
  }
  
  function isOpenBracket(char) {
    return char === '(' || char === '[' || char === '{';
  }
  
  function isCloseBracket(char) {
    return char === ')' || char === ']' || char === '}';
  }
  
  function isMatchingPair(openBracket, closeBracket) {
    return (
      (openBracket === '(' && closeBracket === ')') ||
      (openBracket === '[' && closeBracket === ']') ||
      (openBracket === '{' && closeBracket === '}')
    );
  }
     </pre></code>
</div>



<div style="float: left; width: 45%;">
<h1> BigO </h1>
 time complexity of this algorithm is O(n) </br>
 space complexity of this algorithm is O(n)
</div>

_______________________

## Whiteboard screenshoot
<img src='../Assests//Screenshot 2023-07-15 171709.png'/>

________________

## Testing
```
By running test cases, it can be determined whether the bracket validator algorithm functions as expected, identifying balanced and properly nested brackets while correctly identifying unbalanced cases.
```
