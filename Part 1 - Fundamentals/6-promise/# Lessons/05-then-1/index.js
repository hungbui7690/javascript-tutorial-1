/*
  Consuming a Promise: then, catch
  1) The then() method
    > To get the value of a promise when it’s fulfilled, you call the then() method of the promise object. The following shows the syntax of the then() method:

        promise.then(onFulfilled,onRejected);


    > The then() method accepts two callback functions: onFulfilled and onRejected.

    > The then() method calls the onFulfilled() with a value, if the promise is fulfilled or the onRejected() with an error if the promise is rejected.

    > Note that both onFulfilled and onRejected arguments are optional.

    > The following example shows how to use then() method of the Promise object returned by the getUsers() function:

*/

function getUsers() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        { username: 'john', email: 'john@test.com' },
        { username: 'jane', email: 'jane@test.com' },
      ])
    }, 1000)
  })
}

// METHOD 1
// const promise = getUsers()
// promise.then((users) => {
//   console.log(users)
// })

// METHOD 2
// Because the getUsers() function returns a promise object, you can chain the function call with the then() method like this:
getUsers().then((users) => {
  console.log(users)
})
