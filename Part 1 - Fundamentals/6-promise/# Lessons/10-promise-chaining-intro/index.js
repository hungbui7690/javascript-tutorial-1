/*
  Promise Chaining
  - Introduction to the JavaScript promise chaining
    > Sometimes, you want to execute two or more related asynchronous operations, where the next operation starts with the result from the previous one. For example:

*/

// First, create a new promise that resolves to the number 10 after 3 seconds:
// Note that the setTimeout() function simulates an asynchronous operation.
let p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10)
  }, 3 * 100)
})

// Then, invoke the then() method of the promise:
p.then((result) => {
  console.log(result)
  return result * 2
})

/*
  The callback passed to the then() method executes once the promise is resolved. In the callback, we show the result of the promise and return a new value multiplied by two (result*2).

  Because the then() method returns a new Promise with a value resolved to a value, you can call the then() method on the return Promise.

  In this example, the return value in the first then() method is passed to the second then() method. You can keep calling the then() method successively as follows:
*/
p.then((result) => {
  console.log(result) // 10
  return result * 2
})
  .then((result) => {
    console.log(result) // 20
    return result * 3
  })
  .then((result) => {
    console.log(result) // 60
    return result * 4
  })

// The way we call the then() method like this is often referred to as a promise chain.
