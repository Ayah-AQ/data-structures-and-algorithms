<div style="float: left; width: 45%;">
<h1> Problem Domain </h1>
<p>
Write a function called tree_intersection that takes two binary trees as parameters. Using your Hashmap implementation as a part of your algorithm, return a set of values found in both trees.
</p>

<ul> <li>Input:  two trees </li>
<li> Output: new array of trees equal values</li>
 </ul> </div>

<div style="float: right; width: 45%;">
<h1> Algorithm </h1>
<ol>

1. Initialize an array arr1 to store the pre-order traversal of tree1.

2. Create a new set set2 to store the pre-order traversal of tree2.

3. Use the filter method to create a new array called commonValues by iterating through arr1. For each value in arr1, check if it exists in set2. If it does, add it to the commonValues array.

4. Check if the commonValues array has any elements (i.e., its length is greater than 0). If it does, return commonValues as the result, which contains the common values between the two trees.

5. If commonValues is empty (i.e., no common values were found), return the message 'There are no common values' as the result.

</ol>
</div>

<div style="float: left; width: 45%;">
<h1> Test Cases </h1>
the tree is empty 
there is no common values
</div>

<div style="float: left ; width: 40%;">
<h1> Visiulization </h1> 

        10                                                             
       /  \
      5    20
     / \     \
    3   8     30        


        5
       /  \
      3    15
     / \     \
    2   8     25



tree1.preOrder() would return [10, 5, 3, 8, 20, 30] </br>

tree2.preOrder() would return [5, 3, 2, 8, 15, 25] </br>

The function then creates a Set set2 containing the values [5, 3, 2, 8, 15, 25] from tree2.

It filters the values from tree1.preOrder() ([10, 5, 3, 8, 20, 30]) and checks for common values in set2. The common values are [5, 3, 8]. </br>

Since there are common values, the function returns [5, 3, 8]. </br>

<strong> output [5, 3, 8] </strong>
 </pre></code>
</div>

<div style="float: right; width: 40%;">
<h1> Code </h1> 
function treeIntersection(tree1, tree2) {
    const arr1 = tree1.preOrder();
    const set2 = new Set(tree2.preOrder());

    const commonValues = arr1.filter((value) => set2.has(value));

    if (commonValues.length > 0) {
        return commonValues;
    } else {
        return 'There are no common values';
    }
}
 </pre></code>
</div>



<div style="float: right; width: 45%;">
<h1> BigO </h1>
 time complexity of this algorithm is O(n^2) </br>
 space complexity of this algorithm is O(1)
</div>
