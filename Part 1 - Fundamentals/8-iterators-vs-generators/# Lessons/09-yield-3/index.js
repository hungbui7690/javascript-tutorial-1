/*
  JavaScript yield
  - The yield keyword allows you to pause and resume a generator function (function*).

*/

// C) Passing a value to the next() method
// In the following example, the yield keyword is an expression that evaluates the argument passed to the next() method:
function* generate() {
  let result = yield
  console.log(`result is ${result}`)
}

let g = generate()
console.log(g.next()) // { value: undefined, done: false }

console.log(g.next(1000))
/*
  The second call g.next() carries the following tasks:
  - Evaluate yield to 1000.
  - Assign result the value of yield, which is 1000.
  - Output the message and return the object
*/
