/*
  The async keyword
    > The async keyword allows you to define a function that handles asynchronous operations.

  *** Asynchronous functions execute asynchronously via the event loop. It always returns a Promise.
*/

/////////////////////
// To define an async function, you place the async keyword in front of the function keyword as follows:
async function sayHi() {
  // Method 1
  // return 'Hi'

  // Method 2: You can also explicitly return a Promise from the sayHi() function as shown in the following code:
  return Promise.resolve('Hi')
}

// In this example, because the sayHi() function returns a Promise, you can consume it, like this:
sayHi().then(console.log)

/////////////////////
// Besides the regular functions, you can use the async keyword in the function expressions:
let sayHi1 = async function () {
  return 'Hi'
}

/////////////////////
// arrow functions:
let sayHi2 = async () => 'Hi'

/////////////////////
// and methods of classes:
class Greeter {
  async sayHi3() {
    return 'Hi'
  }
}
