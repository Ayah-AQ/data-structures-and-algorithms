<div style="float: left; width: 45%;">
<h1> Problem Domain </h1>
<ul>
<li>Create a class called AnimalShelter which holds only dogs and cats.</li>
<li>The shelter operates using a first-in, first-out approach.</li>
<li>Implement the following methods:</li>
<ol>
<li>enqueue</li>
<ul>
<li>Arguments: animal</li>
<li>animal can be either a dog or a cat object.</li>
<li>It must have a species property that is either "cat" or "dog"</li>
<li>It must have a name property that is a string.</li>
</ul>
<li>dequeue</li>
<ul>
<li>Arguments: pref</li>
<li>pref can be either "dog" or "cat"</li>
<li>Return: either a dog or a cat, based on preference.</li>
<li>If pref is not "dog" or "cat" then return null.</li>
</ul>
</ol></ul>
</p>

<ul> <li>Input: Cat or Dog</ul>
<li> Output:   whichever animal has been waiting in the shelter the longest</li>
 </ul> </div>

<div style="float: right; width: 45%;">
<h1> Algorithm </h1>
<ul>
<li>Define the AnimalShelter class with an array to store the animals.</li>
<li>Implement the enqueue method:</li>
<ul>
<li>Accept an animal object as an argument.</li>
<li>Add the animal to the end of the animals array.</li>
</ul>
<li>Implement the dequeue method:</li>
<ul>
<li>Accept a preference (either "dog" or "cat") as an argument.</li>
<li>If the preference is neither "dog" nor "cat", return null.</li>
<li>Find and remove the first animal in the animals array that matches the preference.</li>
<li>Return the removed animal, or null if no matching animal is found.</li>
</ul></ul>
</div>


<div style="float: right; width: 45%;">
<h1> Test Cases </h1>
enque --> dog(max) ,cat(lucy) ,cat(kitty), dog(bud) </br>
deque --> dog ,cat ,cat,dog / output --> max, lucy, kitty, bud </br>

// empty shulter deque</br>
output --> null</br>
</div>

<div style="float: left; width: 40%;">
<h1> Visiulization </h1> 
<strong>Stack</strong>
AnimalShelter --> [ ]</br>

Enqueue(dog: Max),  AnimalShelter --> [Max (dog)]</br>

Enqueue(cat: Lucy), AnimalShelter --> [Max (dog), Lucy (cat)]</br>

Enqueue(cat: Kitty), AnimalShelter --> [Max (dog), Lucy (cat), Kitty (cat)]</br>

Enqueue(dog: Bud), AnimalShelter --> [Max (dog), Lucy (cat), Bud (dog), Kitty (cat)]</br>
</div>

<div style="float: right; width: 45%;">
<h1> Code </h1>
 <pre><code>
class Animal {
    constructor(species, name) {
      this.species = species;
      this.name = name;
    }
  }
  
  class AnimalShelter {
    constructor() {
      this.animals = [];
    }
  
    enqueue(animal) {
      this.animals.push(animal);
    }
  
    dequeue(pref) {
      if (pref !== "dog" && pref !== "cat") {
        return null;
      }
  
      let foundIndex = -1;
      for (let i = 0; i < this.animals.length; i++) {
        if (this.animals[i].species === pref) {
          foundIndex = i;
          break;
        }
      }
  
      if (foundIndex !== -1) {
        return this.animals.splice(foundIndex, 1)[0];
      }
  
      return null;
    }
  }
   </pre></code>
</div>



<div style="float: left; width: 45%;">
<h1> BigO </h1>
 time complexity of this algorithm is O(n) </br>
 space complexity of this algorithm is O(1)
</div>

_______________________

## Whiteboard screenshoot
<img src='../Assests/Screenshot 2023-07-12 185014.png'/>

________________

## Testing
```
tests cover scenarios related to enqueueing and dequeuing animals, ensuring the correct retrieval based on preference, as well as handling the case of dequeuing from an empty AnimalShelter.
```
