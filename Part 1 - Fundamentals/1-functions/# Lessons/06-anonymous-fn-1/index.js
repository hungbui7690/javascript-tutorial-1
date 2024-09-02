/*
  JavaScript Anonymous Functions

*/

////////////////////////////
// An anonymous function is a function without a name. The following shows how to define an anonymous function:
;(function () {
  //...
})
// Note that if you don’t place the anonymous function inside the parentheses (), you’ll get a syntax error. The parentheses () make the anonymous function an expression that returns a function object.
// An anonymous function is not accessible after its initial creation. Therefore, you often need to assign it to a variable.

////////////////////////////
// For example, the following shows an anonymous function that displays a message:
// In this example, the anonymous function has no name between the function keyword and parentheses ().
// Because we need to call the anonymous function later, we assign the anonymous function to the show variable.
// Since the whole assignment of the anonymous function to the show variable makes a valid expression, you don’t need to wrap the anonymous function inside the parentheses ().
let show = function () {
  console.log('Anonymous function')
}

show()

////////////////////////////
