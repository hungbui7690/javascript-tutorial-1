/*
  Promise.any
  - take a list of promises 
  - return a promise that is fulfilled first.

  3) All promises rejected example

*/

// The following example demonstrates how to use the Promise.any() method with all promises rejected:
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('Promise 1 rejected')
    reject('error1')
  }, 1000)
})

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('Promise 2 rejected')
    reject('error2')
  }, 2000)
})

const p = Promise.any([p1, p2])
p.catch((e) => {
  console.log('Returned Promise')
  console.log(e, e.errors)
})

// In this example, both p1 and p2 were rejected with the string error1 and error2. Therefore, the Promise.any() method was rejected with an AggregateError object that has the errors property containing all the errors of the rejected promises.
