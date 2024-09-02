/*
  Promise.allSettled
  - accepts an iterable of promises
  - returns a new promise that resolves when every input promise has settled with an array of objects that describes the result of each promise in the iterable object.  

*/

// The following example uses the Promise.allSettled() to wait for all the input promises to settle:
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('The first promise has resolved')
    resolve(10)
  }, 1 * 1000)
})

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('The second promise has rejected')
    reject(20)
  }, 2 * 1000)
})

Promise.allSettled([p1, p2]).then((result) => {
  console.log(result)
})

/*
  How it works:

    The first promise p1 resolves to the value 10 after one second
    The second promise p2 rejects for a reason with a value 20 after two seconds.
    The Promise.allSettled() returns a promise that resolves to the result array that has two elements. The first element is an object resolved by the p1 promise and the second one is another object which is rejected by the p2 promise.

  Summary

      The Promise.allSettled() method accepts an iterable of promises and returns a new promise that resolves when every input promise has settled with an array of objects that describes the result of each promise in the iterable object.

*/
