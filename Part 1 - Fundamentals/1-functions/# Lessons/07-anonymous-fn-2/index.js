/*
  JavaScript Anonymous Functions

*/

// 1) Using anonymous functions as arguments
// In practice, you often pass anonymous functions as arguments to other functions. For example:
// In this example, we pass an anonymous function into the setTimeout() function. The setTimeout() function executes this anonymous function one second later.
setTimeout(function () {
  console.log('Execute later after 1 second')
}, 1000)

// 2) Immediately invoked function execution
// If you want to create a function and execute it immediately after the declaration, you can declare an anonymous function like this:
;(function () {
  console.log('IIFE')
})()

// 3) Sometimes, you may want to pass arguments into an anonymous function, like this:
let person = {
  firstName: 'John',
  lastName: 'Doe',
}

;(function () {
  console.log(person.firstName + ' ' + person.lastName)
})(person)
