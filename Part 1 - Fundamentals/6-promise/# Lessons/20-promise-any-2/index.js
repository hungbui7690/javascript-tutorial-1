/*
  Promise.any
  - take a list of promises 
  - return a promise that is fulfilled first.

  2) One promise rejected example

*/

// The following example uses the Promise.any() method with a list of promises that have a rejected promise:
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('Promise 1 rejected')
    reject('error')
  }, 1000)
})

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('Promise 2 fulfilled')
    resolve(2)
  }, 2000)
})

const p = Promise.any([p1, p2])
p.then((value) => {
  console.log('Returned Promise')
  console.log(value)
})

// In this example, the Promise.any() ignores the rejected promise. When the p2 resolves with the value 2, the Promise.any() returns a promise that resolves to the same value as the result of the p2.
