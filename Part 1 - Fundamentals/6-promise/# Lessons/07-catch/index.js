/*
  Consuming a Promise: then, catch
  2) The catch() method
    > If you want to get the error only when the state of the promise is rejected, you can use the catch() method of the Promise object:

        promise.catch(onRejected);


    > Internally, the catch() method invokes the then(undefined, onRejected) method.

    > The following example changes the success flag to false to simulate the error scenario:

*/

let success = false

function getUsers() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve([
          { username: 'john', email: 'john@test.com' },
          { username: 'jane', email: 'jane@test.com' },
        ])
      } else {
        reject('Failed to the user list')
      }
    }, 1000)
  })
}

const promise = getUsers()

promise.catch((error) => {
  console.log(error)
})
