/*
  JavaScript yield
  - The yield keyword allows you to pause and resume a generator function (function*).

*/

// B) Returning undefined
// This example illustrates how to use the yield keyword to return undefined:
function* bar() {
  yield
}

let b = bar()
console.log(b.next()) // { value: undefined, done: false }
