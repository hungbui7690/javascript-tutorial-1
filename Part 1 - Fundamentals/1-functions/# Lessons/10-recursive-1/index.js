/*
  Recursive Function
  - A recursive function is a function that calls itself until it doesn’t. This technique is called recursion.

*/

//////////////////////////
// 1) Suppose that you have a function called recurse(). The recurse() is a recursive function if it calls itself inside its body, like this:
// A recursive function always has a condition to stop calling itself. Otherwise, it will call itself indefinitely. So a recursive function typically looks like the following:
function recurse() {
  if (condition) {
    // stop calling itself
    //...
  } else {
    recurse()
  }
}
// Generally, you use recursive functions to break down a big problem into smaller ones. Typically, you will find the recursive functions in data structures like binary trees and graphs and algorithms such as binary search and quicksort.

//////////////////////////
// 2) A simple JavaScript recursive function example
// Suppose that you need to develop a function that counts down from a specified number to 1. For example, to count down from 3 to 1:
// The countdown will stop when the next number is zero.
// function countDown(fromNumber) {
//   console.log(fromNumber)

//   let nextNumber = fromNumber - 1

//   if (nextNumber > 0) {
//     countDown(nextNumber)
//   }
// }
// countDown(3)

//////////////////////////
// 3) However, as mentioned in the Function type tutorial, the function’s name is a reference to the actual function object.
// // If the function name is set to null somewhere in the code, the recursive function will stop working.
// let newYearCountDown = countDown
// // somewhere in the code
// countDown = null
// // the following function call will cause an error
// newYearCountDown(10)
// // The code causes an error because the body of the countDown() function references the countDown function name, which was set to null at the time of calling the function.

//////////////////////////
// 4) To fix it, you can use a named function expression as follows:
let countDown = function f(fromNumber) {
  console.log(fromNumber)

  let nextNumber = fromNumber - 1

  if (nextNumber > 0) {
    f(nextNumber)
  }
}

let newYearCountDown = countDown
countDown = null
newYearCountDown(10)
