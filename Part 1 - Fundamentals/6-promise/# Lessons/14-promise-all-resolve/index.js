/*
  Promise.all()
  - The Promise.all() method accepts a list of promises and returns a new promise that resolves to an array of results of the input promises if all the input promises are resolved, or rejected with an error of the first rejected promise.
  - Use the Promise.all() method to aggregate results from multiple asynchronous operations.


  1) Resolved promises example
      - The following promises resolve to 10, 20, and 30 after 1, 2, and 3 seconds. We use the setTimeout() to simulate the asynchronous operations:

*/

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('The first promise has resolved')
    resolve(10)
  }, 1 * 555)
})
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('The second promise has resolved')
    resolve(20)
  }, 2 * 555)
})
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('The third promise has resolved')
    resolve(30)
  }, 3 * 555)
})

Promise.all([p1, p2, p3]).then((results) => {
  const total = results.reduce((p, c) => p + c)

  console.log(`Results: ${results}`)
  console.log(`Total: ${total}`)
})

/*
  When all promises have been resolved, the values from these promises are passed into the callback of the then() method as an array.

  Inside the callback, we use the Array’s reduce() method to calculate the total value and use the console.log to display the array of values as well as the total.
*/
