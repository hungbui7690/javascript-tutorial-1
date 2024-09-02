/*
  JavaScript Array shift
  - The Array.prototype.shift() method removes the first element from an array and returns that element.

*/

const numbers = [10, 20, 30]
let first = numbers.shift()

console.log(first)
console.log(numbers)
console.log({ length: numbers.length })
