/*
  Consuming a Promise: then, catch
  1) The then() method
    > In this example, the getUsers() function always succeeds. To simulate the error, we can use a success flag like the following:

*/

let success = true

function getUsers() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve([
          { username: 'john', email: 'john@test.com' },
          { username: 'jane', email: 'jane@test.com' },
        ])
      } else {
        reject('Failed to the user list')
      }
    }, 1000)
  })
}

// METHOD 1
// function onFulfilled(users) {
//   console.log(users)
// }
// function onRejected(error) {
//   console.log(error)
// }
// const promise = getUsers()
// promise.then(onFulfilled, onRejected)

// METHOD 2
const promise = getUsers()
promise.then(
  (users) => console.log(users),
  (error) => console.log(error)
)

/*
  How it works.
  - First, define the success variable and initialize its value to true.
    > If the success is true, the promise in the getUsers() function is fulfilled with a user list. Otherwise, it is rejected with an error message.

  - Second, define the onFulfilled and onRejected functions.

  - Third, get the promise from the getUsers() function and call the then() method with the onFulfilled and onRejected functions.

*/
