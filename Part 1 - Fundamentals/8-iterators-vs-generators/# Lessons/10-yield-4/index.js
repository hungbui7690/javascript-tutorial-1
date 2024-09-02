/*
  JavaScript yield
  - The yield keyword allows you to pause and resume a generator function (function*).

*/

// D) Using yield in an array
// The following example uses the yield keyword as elements of an array:
function* baz() {
  let arr = [yield, yield]
  console.log(arr)
}

var z = baz()

// The first call z.next() sets the first element of the arr array to 1 and returns the following object:
console.log(z.next()) // { value: undefined, done: false }

// The second call z.next() sets the second of the arr array to 2 and returns the following object:
console.log(z.next(1)) // { value: undefined, done: false }

// The third call z.next() shows the contents of the arr array and returns the following object:
console.log(z.next(2))
