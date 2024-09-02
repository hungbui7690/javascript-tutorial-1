/*
  for...of vs. for...in
  - The for...in iterates over all enumerable properties of an object. It doesn’t iterate over a collection such as Array, Map or Set.
  - Unlike the for...in loop, the for...of iterates a collection, rather than an object. In fact, the for...of iterates over elements of any collection that has the [Symbol.iterator] property.

*/

// The following example illustrates the differences between for...of and for...in
let scores = [10, 20, 30]
scores.message = 'Hi' // *** can add key:value pair to array
console.log(scores)

// In this example, the for…in statement iterates over the properties of the scores array:
console.log('for...in:')
for (let score in scores) {
  console.log(score)
}

// while the for…of iterates over the element of an array:
console.log('for...of:')
for (let score of scores) {
  console.log(score)
}
