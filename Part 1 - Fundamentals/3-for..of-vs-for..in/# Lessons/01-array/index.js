/*
  for…of 
  - ES6 introduced a new statement for...of that iterates over an iterable object such as:

      Built-in Array, String, Map, Set, …
      Array-like objects such as arguments or NodeList
      User-defined objects that implement the iterator protocol.

  - can use any of these
    > let score of scores
    > const score of scores


  1) Iterating over arrays

*/

// 1. The following example shows how to use the for...of to iterate over elements of an array:
let scores = [80, 90, 70]
console.log(scores) // check and we will see entries method

for (let score of scores) {
  score = score + 5
  console.log(score)
}

// 2. To access the index of the array elements inside the loop, you can use the for...of statement with the entries() method of the array.
// The array.entries() method returns a pair of [index, element] in each iteration. For example:
let colors = ['Red', 'Green', 'Blue']

for (const [index, color] of colors.entries()) {
  console.log(`${color} is at index ${index}`)
}
