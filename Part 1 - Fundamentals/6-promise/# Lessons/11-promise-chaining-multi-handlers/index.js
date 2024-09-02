/*
  Promise Chaining
  - Multiple handlers for a promise

*/

let p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10)
  }, 3 * 100)
})

// When you call the then() method multiple times on a promise, it is not the promise chaining. For example:
p.then((result) => {
  console.log(result) // 10
  return result * 2
})

p.then((result) => {
  console.log(result) // 10
  return result * 3
})

p.then((result) => {
  console.log(result) // 10
  return result * 4
})

// In practice, you will rarely use multiple handlers for one promise.
