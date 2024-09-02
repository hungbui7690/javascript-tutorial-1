/*
  Promise Error Handling

*/

// Errors inside the Promises
// We change the getUserById() function to throw an error inside the promise:
let authorized = false

function getUserById(id) {
  return new Promise((resolve, reject) => {
    if (!authorized) {
      throw new Error('Unauthorized access to the user data')
    }

    resolve({
      id: id,
      username: 'admin',
    })
  })
}

// If you throw an error inside the promise, the catch() method will catch it, not the try/catch.
// If you chain promises, the chaining catch() method will catch errors that occur in any promise.
try {
  getUserById(10)
    .then((user) => console.log(user.username))
    .catch((err) => console.log(`Caught by .catch ${err}`))
} catch (error) {
  console.log(`Caught by try/catch ${error}`)
}

// In this example, if any error in the promise1, promise2, or promise4, the catch() method will handle it.
// promise1
//     .then(promise2)
//     .then(promise3)
//     .then(promise4)
//     .catch(err => console.log(err))
