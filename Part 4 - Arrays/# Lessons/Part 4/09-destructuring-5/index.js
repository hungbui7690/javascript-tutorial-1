/*
  Array Destructuring

*/

// 1) Swapping variables
// The array destructuring makes it easy to swap values of variables without using a temporary variable:
let a = 10,
  b = 20

;[a, b] = [b, a]

console.log(a) // 20
console.log(b) // 10

// 2) Functions that return multiple values
// In JavaScript, a function can return a value. However, you can return an array that contains multiple values, for example:
function stat(a, b) {
  return [a + b, (a + b) / 2, a - b]
}
let [sum, average, difference] = stat(20, 10)
console.log(sum, average, difference) // 30, 15, 10
