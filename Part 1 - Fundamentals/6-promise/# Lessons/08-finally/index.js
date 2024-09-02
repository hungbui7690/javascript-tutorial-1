/*
  Consuming a Promise: then, catch
  3) The finally() method
      > Sometimes, you want to execute the same piece of code whether the promise is fulfilled or rejected. For example:

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

const render = () => {
  //...
}

// As you can see, the render() function call is duplicated in both then() and catch() methods.
// getUsers()
//   .then((users) => {
//     console.log(users)
//     render()
//   })
//   .catch((error) => {
//     console.log(error)
//     render()
//   })

// To remove this duplicate and execute the render() whether the promise is fulfilled or rejected, you use the finally() method, like this:
getUsers()
  .then((users) => {
    console.log(users)
  })
  .catch((error) => {
    console.log(error)
  })
  .finally(() => {
    render()
  })
