/*
  JavaScript Anonymous Functions
  - Arrow functions

*/

//////////////////////////
// 1) ES6 introduced arrow function expressions that provide a shorthand for declaring anonymous functions.
// For example, this function:
let show1 = function () {
  console.log('Anonymous function')
}
// … can be shortened using the following arrow function:
let show2 = () => console.log('Anonymous function')

//////////////////////////
// 2) Similarly, the following anonymous function:
let add1 = function (a, b) {
  return a + b
}

// … is functionally equivalent to the following arrow function:
let add2 = (a, b) => a + b
