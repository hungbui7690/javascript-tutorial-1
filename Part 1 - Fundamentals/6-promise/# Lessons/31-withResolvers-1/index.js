/*
  Promise.withResolvers method

*/

///////////////////////////////
// When creating a new Promise object, you typically pass resolve and reject functions to the promise constructor like this:
// This allows you to call the resolve and reject functions inside the promise constructor only.
const p = new Promise((resolve, reject) => {
  // ...
})

///////////////////////////////
// To call these functions outside of the promise constructor, you often have to write the following boilerplate code:
let resolve, reject

const promise = new Promise((res, rej) => {
  resolve = res
  reject = rej
})

Math.random() > 0.5 ? resolve('Success') : reject('Error')

/*
  In this code:
  - First, declare variables that hold the resolve and reject functions of the promise.
  - Second, create a new Promise object using the promise constructor and assign the resolve and reject functions to these variables. This makes the resolve and reject functions available outside the promise constructor.
  - Third, call the resolve and reject functions outside the promise constructor.
*/
