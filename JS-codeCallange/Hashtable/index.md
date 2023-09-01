<div style="float: left; width: 45%;">
<h1> Problem Domain </h1>
<p>
Implement a Hashtable Class with the following methods:

<ol>
<li><strong>set</strong></li></strong></li>
<ul>
<li>Arguments: key, value</li>
<li>Returns: nothing</li>
<li>This method should hash the key, and set the key and value pair in the table, handling collisions as needed.</li>
<li>Should a given key already exist, replace its value from the value argument given to this method.</li>
</ul>
<li><strong>get</strong></li>
<ul>
<li>Arguments: key</li>
<li>Returns: Value associated with that key in the table</li>
</ul>
<li><strong>has</strong></li>
<ul>
<li>Arguments: key</li>
<li>Returns: Boolean, indicating if the key exists in the table already.</li>
</ul>
<li><strong>keys</strong></li>
<ul>
<li>Returns: Collection of keys</li>
</ul>
<li><strong>hash</strong></li>
<ul>
<li>Arguments: key</li>
<li>Returns: Index in the collection for that key</li>
</ul>
</ol>
</p>

<ul> <li>Input: 
<ol></ol>
<li>The constructor method initializes the hashtable with a specified size.</li>
<li>The set method takes a key and a value as input.</li>
<li>The get method takes a key as input</li>
<li>The has method takes a key as input </li>
<li>The keys method doesn't take direct input but provides an output. It returns an array containing all the keys present in the hashtable</li>
</ol></li>
<li> Output: 
<ol>
<li>The set method doesn't have a direct output but modifies the hashtable by adding or updating a key-value pair.</li>
<li>The get method returns the value associated with a given key, or undefined if the key is not found in the hashtable.</li>
<li>The has method returns a boolean value indicating whether the hashtable contains a given key.</li>
<li>The keys method returns an array of all the keys present in the hashtable.</li>
<li>The hashIndex method takes a key and returns the hash index for that key.</li>
</ol>
</li>
 </ul> </div>

<div style="float: right; width: 45%;">
<h1> Algorithm </h1>
<ol>
<li>Constructor (`constructor` method):</li>
<ul>
   <li> Takes the desired size as input.</li>
   <li> Creates an array called `table` of that size.</li>
</ul>
<li> Hash Function (`hash` method):</li>
<ul>
   <li> Takes a key as input.</li>
   <li> Converts key into a number.</li>
   <li> Makes a unique index by using math.</li>
   <li> Returns the index.</li>
</ul>
<li> Set Method (`set` method):</li>
<ul>
   <li> Takes a key and a value.</li>
   <li> Calculates the index using the hash function.</li>
   <li> If the index is empty, creates a space for entries.</li>
   <li> Checks if the key already exists, updates the value.</li>
   <li> If not, adds a new entry.</li>
</ul>
<li> Get Method (`get` method):</li>
<ul>
   <li> Takes a key.</li>
   <li> Calculates the index using the hash function.</li>
   <li> If no entries, returns nothing.</li>
   <li> Checks each entry for the key and returns its value.</li>
</ul>
<li> Has Method (`has` method):</li>
   <ul>
   <li> Takes a key.</li>
   <li> Calculates the index using the hash function.</li>
   <li> If no entries, returns false.</li>
   <li> Checks each entry for the key and returns true if found.</li>
</ul>
<li> Keys Method (`keys` method):</li>
   <ul>
   <li> Creates an empty list for keys.</li>
   <li> Collects keys from entries into the list.</li>
   <li> Returns the list of keys.</li>
</ul>
<li> Hash Index Method (`hashIndex` method):</li>
   <ul>
   <li> Takes a key.</li>
   <li> Returns the index calculated using the hash function.</li>
</ul>
</ol>
</div>


<div style="float: right; width: 45%;">
<h1> Test Cases </h1>

## Set 
set('name', 'Alice');
set('age', 30);
set('city', 'Wonderland');
## get
get('name'); // Output: Alice
get('age'); // Output: 30
get('city'); // Output: Wonderland
## has
has('name'); // Output: true
has('gender'); // Output: false
## keys
keys(); // Output: ['name', 'age', 'city']
</div>

<div style="float: left; width: 40%;">
<h1> Visiulization </h1> 
hash table with a size of 10:

Index:   0   1   2   3   4   5   6   7   8   9
        +---+---+---+---+---+---+---+---+---+---+
Table:  |   |   |   |   |   |   |   |   |   |   |
        +---+---+---+---+---+---+---+---+---+---+


Adding 'name' with value 'Alice':
Hash index for 'name': 328 % 10 = 8

Index:   0   1   2   3   4   5   6   7   8   9
        +---+---+---+---+---+---+---+---+---+---+
Table:  |   |   |   |   |   |   |   |   |[name: Alice]|
        +---+---+---+---+---+---+---+---+---+---+


Adding 'age' with value 30:
Hash index for 'age': 478 % 10 = 8 (collision)

Index:   0   1   2   3   4   5   6   7   8   9
        +---+---+---+---+---+---+---+---+---+---+
Table:  |   |   |   |   |   |   |   |   |[name: Alice, age: 30]|
        +---+---+---+---+---+---+---+---+---+---+


Adding 'city' with value 'Wonderland':
Hash index for 'city': 735 % 10 = 5

Index:   0   1   2   3   4   5   6   7   8   9
        +---+---+---+---+---+---+---+---+---+---+
Table:  |   |   |   |   |   |[city: Wonderland]|   |   |[name: Alice, age: 30]|
        +---+---+---+---+---+---+---+---+---+---+


Retrieving 'name':

Hash index for 'name': 328 % 10 = 8
Value: Alice
Checking if 'age' exists:

Hash index for 'age': 478 % 10 = 8 (collision)
Exists: true
Checking if 'gender' exists:

Hash index for 'gender': 642 % 10 = 2
Exists: false
Getting all keys:

Keys: ['name', 'age', 'city']
</div>

<div style="float: right; width: 45%;">
<h1> Code </h1>
 <pre><code>
class Hashtable {
    constructor(size) {
        this.size = size;
        this.table = new Array(size);
    }

    hash(key) {
        const asciiCodeSum = key.split("").reduce((acc, char) => {
            return acc + char.charCodeAt();
        }, 0);
        const multiPrime = asciiCodeSum * 599;
        const theIndex = multiPrime % this.size;
        return theIndex;
    }

    set(key, value) {
        const index = this.hash(key);

        if (!this.table[index]) {
            this.table[index] = [];
        }

        for (const entry of this.table[index]) {
            if (entry.hasOwnProperty(key)) {
                entry[key] = value;
                return;
            }
        }

        this.table[index].push({ [key]: value });
    }

    get(key) {
        const index = this.hash(key);

        if (!this.table[index]) {
            return undefined;
        }

        for (const entry of this.table[index]) {
            if (entry.hasOwnProperty(key)) {
                return entry[key];
            }
        }

        return undefined;
    }

    has(key) {
        const index = this.hash(key);

        if (!this.table[index]) {
            return false;
        }

        for (const entry of this.table[index]) {
            if (entry.hasOwnProperty(key)) {
                return true;
            }
        }

        return false;
    }

    keys() {
        const allKeys = [];
        for (const bucket of this.table) {
            if (bucket) {
                for (const entry of bucket) {
                    const key = Object.keys(entry)[0];
                    allKeys.push(key);
                }
            }
        }
        return allKeys;
    }

    hashIndex(key) {
        return this.hash(key);
    }
}

module.exports = Hashtable;
 </pre></code>
</div>



<div style="float: left; width: 45%;">
<h1> BigO </h1>
 time complexity of this algorithm is O(n) </br>
 space complexity of this algorithm is O(m+n)
</div>

_______________________

## Whiteboard screenshoot
<img src='../Assests/Screenshot 2023-09-01 033105(1).png'/>
<img src='../Assests/Screenshot 2023-09-01 033138(2).png'/>
<img src='../Assests/Screenshot 2023-09-01 033241(3).png'/>
<img src='../Assests/Screenshot 2023-09-01 033307(4).png'/>


