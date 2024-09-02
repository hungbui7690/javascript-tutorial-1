/*
  var vs let


*/

// 3) Re-declaration
// The var keyword allows you to redeclare a variable without any issue:
var counter = 0
var counter
console.log(counter) // 0

// However, re-declaring a variable using the let keyword will result in an error:
let counter = 0
// let counter // err
console.log(counter)

// 4) let variables and hoisting
{
  console.log(counter)
  let counter = 10
}
// In this example, accessing the counter variable before declaring it causes a ReferenceError. You may think that a variable declaration using the let keyword does not hoist, but it does.
// In fact, the JavaScript engine will hoist a variable declared by the let keyword to the top of the block. However, the JavaScript engine does not initialize the variable. Therefore, when you reference an uninitialized variable, you’ll get a ReferenceError.
