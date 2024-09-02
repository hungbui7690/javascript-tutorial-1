/*
  JavaScript Iterators

*/

/////////////////////////////
// The for loop issues
let ranks = ['A', 'B', 'C']

for (let i = 0; i < ranks.length; i++) {
  console.log(ranks[i])
}
/*
  - The for loop uses the variable  i to track the index of the ranks array. The value of  i increments each time the loop executes as long as the value of i is less than the number of elements in the ranks array.

  - This code is straightforward. However, its complexity grows when you nest a loop inside another loop. In addition, keeping track of multiple variables inside the loops is error-prone.
*/

/////////////////////////////
// for..of
// The for...of is far more elegant than the for loop because it shows the true intent of the code – iterate over an array to access each element in the sequence.
// On top of this, the for...of loop has the ability to create a loop over any iterable object, not just an array.
for (let rank of ranks) {
  console.log(rank)
}
