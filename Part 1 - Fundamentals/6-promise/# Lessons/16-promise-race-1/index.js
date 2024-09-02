/*
  Promise.race()
  - returns a new promise that fulfills or rejects as soon as one of the promises in an iterable fulfills or rejects, with the value or error from that promise.

  - The following creates two promises: one resolves in 1 second and the other resolves in 2 seconds. Because the first promise resolves faster than the second one, the Promise.race() resolves with the value from the first promise:

*/

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('The first promise has resolved')
    resolve(10)
  }, 1 * 555) // p1 wins the race
})

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('The second promise has resolved')
    resolve(20)
  }, 2 * 555)
})

Promise.race([p1, p2])
  .then((value) => console.log(`Resolved: ${value}`))
  .catch((reason) => console.log(`Rejected: ${reason}`))
