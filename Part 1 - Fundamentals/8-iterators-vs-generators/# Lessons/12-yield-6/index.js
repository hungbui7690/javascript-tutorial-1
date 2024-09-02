/*
  JavaScript yield
  - The yield keyword allows you to pause and resume a generator function (function*).

*/

// F) Using the yield to return individual elements of an array
// See the following generator function:
function* yieldArrayElements() {
  yield 1
  yield* [20, 30, 40]
}

let a = yieldArrayElements()

console.log(a.next()) // { value: 1, done: false }
console.log(a.next()) // { value: 20, done: false }
console.log(a.next()) // { value: 30, done: false }
console.log(a.next()) // { value: 40, done: false }

// In this example, yield* is the new syntax. The yield* expression is used to delegate to another iterable object or generator.
