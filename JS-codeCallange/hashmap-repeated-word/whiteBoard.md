<div style="float: left; width: 45%;">
<h1> Problem Domain </h1>
<p>
Write a function called repeated word that finds the first word to occur more than once in a string
</p>

<ul> <li>Input:string -> I'm Aya, I'm 24 </li>
<li> Output:string -> I'm </li>
 </ul> </div>

<div style="float: right; width: 45%;">
<h1> Algorithm </h1>
<ol>

1. The input to the algorithm is a string word.

2. Split the input word into an array of individual words using the space character as the delimiter. Store this array in the variable words.

3. Create an empty Map called setOfWords. This Map will be used to store each word as a key and its frequency as the corresponding value.

4. Iterate through the words array using a for loop:

   a. Check if the current word (words[i]) already exists as a key in the setOfWords Map using the has method.
   
   b. If the word exists in the Map, increment its frequency by 1 by getting the current value associated with the word and adding 1 to it. Update the value in the Map.
   
   c. If the word does not exist in the Map, add it as a key with an initial frequency of 1.

5. After the loop, iterate through the words array again using another for loop:

   a. For each word, retrieve its frequency from the setOfWords Map using the get method and store it in the variable count.
   
   b. Check if the count is greater than 1 (indicating that the word is repeated).

   c. If a repeated word is found, return that word immediately.

6. If the entire words array has been iterated through and no repeated word is found, return "NoRepetition" to indicate that there are no repeated words in the input string.

</ol>
</div>


<div style="float: left; width: 45%;">
<h1> Test Cases </h1>
<table style="border: solid black">
      <thead>
        <td> Input</td>
        <td> Output</td>
      </thead>
      <tr>
        <td>"Once upon a time, there was a brave princess who..."</td>
        <td> "a"</td>
      </tr>
      <tr>
         <td> "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only..."</td>
        <td> "it"</td> 
      </tr>
      <tr>
       <td> "It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York..."</td>
       <td> "summer"</td>
      </tr>
      <tr>
       <td> " "</td>
       <td> " "</td>
      </tr>
       <tr>
       <td> "Hi, I'm aya, 24 ,studid chemistry"</td>
       <td> "NoRepetition"</td>
      </tr>
    </table>
</div>

<div style="float: left; width: 40%;">
<h1> Visiulization </h1> 
Input: "Hi, I'm aya, I'm 24, I'm chemist."

Split the input into words: ["Hi,", "I'm ", "aya,", "I'm ", "24,", "I'm", "chemist."].

Count the frequency of each word:

"Hi," appears once.
"I'm " appears once.
"aya," appears once.
"I'm " appears twice.
"24," appears once.
"I'm" appears triples.
"chemist." appears once.

Return the first word that appears more than once, which is "I'm."

returns "I'm" as the first repeated word.
</div>

<div style="float: right; width: 45%;">
<h1> Code </h1>
 <pre><code>
 function findFirstRepeated(word) {
    var words = word.split(" ");
    var setOfWords = new Map();
  
    for (let i = 0; i < words.length; i++) {
      if (setOfWords.has(words[i])) {
        setOfWords.set(words[i], setOfWords.get(words[i]) + 1);
      } else {
        setOfWords.set(words[i], 1);
      }
    }
  
    for (let i = 0; i < words.length; i++) {
      var count = setOfWords.get(words[i]);
      if (count > 1) {
        return words[i];
      }
    }
    
    return "NoRepetition";
  }
 </pre></code>
</div>



<div style="float: left; width: 45%;">
<h1> BigO </h1>
 time complexity of this algorithm is O(n) </br>
 space complexity of this algorithm is O(n)
</div>


