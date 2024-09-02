/*
  Promise Chaining
  - Returning a Promise
    > When you return a value in the then() method, the then() method returns a new Promise that immediately resolves to the return value.

*/

///////////////////////////////
// V1
///////////////////////////////
let p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10)
  }, 3 * 100)
})

// Also, you can return a new promise in the then() method, like this:
// p.then((result) => {
//   console.log(result)
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(result * 2)
//     }, 3 * 1000)
//   })
// })
//   .then((result) => {
//     console.log(result)
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(result * 3)
//       }, 3 * 1000)
//     })
//   })
//   .then((result) => console.log(result))

// This example shows 10, 20, and 60 after every 3 seconds. This code pattern allows you to execute some tasks in sequence.

///////////////////////////////
// V2
///////////////////////////////
function generateNumber(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(num)
    }, 2 * 1000)
  })
}

generateNumber(10)
  .then((result) => {
    console.log(result) // 10
    return generateNumber(result * 2)
  })
  .then((result) => {
    console.log(result) // 20
    return generateNumber(result * 3)
  })
  .then((result) => console.log(result)) // 60
