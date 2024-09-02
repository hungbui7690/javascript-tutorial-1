/*
  Promise.race()
  - returns a new promise that fulfills or rejects as soon as one of the promises in an iterable fulfills or rejects, with the value or error from that promise.

  - The following example creates two promises. The first promise resolves in 1 second while the second one rejects in 2 seconds. Because the first promise is faster than the second one, the returned promise resolves to the value of the first promise:

*/

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('The first promise has resolved')
    resolve(10)
  }, 1 * 555) // p1 wins
})

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('The second promise has rejected')
    reject(20)
  }, 2 * 555)
})

Promise.race([p1, p2])
  .then((value) => console.log(`Resolved: ${value}`))
  .catch((reason) => console.log(`Rejected: ${reason}`))

// Note that if the second promise was faster than the first one, the return promise would reject for the reason of the second promise.
