/*
  Promise.all()
  - The Promise.all() method accepts a list of promises and returns a new promise that resolves to an array of results of the input promises if all the input promises are resolved, or rejected with an error of the first rejected promise.
  - Use the Promise.all() method to aggregate results from multiple asynchronous operations.

  
  2) Rejected promises example
      - The Promise.all() returns a Promise that is rejected if any of the input promises are rejected.

*/

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('The first promise has resolved')
    resolve(10)
  }, 1 * 1000)
})
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('The second promise has rejected')
    reject('Failed') // ***
  }, 2 * 1000)
})
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('The third promise has resolved')
    resolve(30)
  }, 3 * 1000)
})

Promise.all([p1, p2, p3])
  .then(console.log) // never execute
  .catch(console.log)

/*
  In this example, we have three promises: the first one is resolved after 1 second, the second is rejected after 2 seconds, and the third one is resolved after 3 seconds.

  As a result, the returned promise is rejected because the second promise is rejected. The catch() method is executed to display the reason for the rejected promise.
*/

/*
  Summary

    The Promise.all() method accepts a list of promises and returns a new promise that resolves to an array of results of the input promises if all the input promises are resolved, or rejected with an error of the first rejected promise.
    Use the Promise.all() method to aggregate results from multiple asynchronous operations.
*/
