/*
  JavaScript yield
  - The yield keyword allows you to pause and resume a generator function (function*).

*/

// E) Using yield to return an array
// The following generator function uses the yield keyword to return an array:
function* yieldArray() {
  yield 1
  yield [20, 30, 40]
}

let y = yieldArray()

// The first call y.next() returns the following object:
console.log(y.next()) // { value: 1, done: false }

// The second call y.next() returns the following object:
// In this case, yield sets the array [ 20, 30, 40 ] as the value of the value property of the return object.
console.log(y.next()) // { value: [ 20, 30, 40 ], done: false }

// The third call y.next() returns the following object:
console.log(y.next()) // { value: undefined, done: true }
