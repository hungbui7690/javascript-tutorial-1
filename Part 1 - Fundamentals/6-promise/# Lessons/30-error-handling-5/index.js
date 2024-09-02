/*
  Promise Error Handling

*/

let authorized = false

// Missing the catch() method
// The following example does not provide the catch() method to handle the error inside the promise. It will cause a runtime error and terminate the program:
function getUserById(id) {
  return new Promise((resolve, reject) => {
    if (!authorized) {
      reject('Unauthorized access to the user data')
    }
    resolve({
      id: id,
      username: 'admin',
    })
  })
}

// If the promise is resolved, you can omit the catch() method. In the future, a potential error may cause the program to stop unexpectedly.
try {
  getUserById(10).then((user) => console.log(user.username))
  // the following code will not execute
  console.log('next')
} catch (error) {
  console.log(`Caught by try/catch ${error}`)
}

/**
 * Summary

    - Inside the promise, the catch() method will catch the error caused by the throw statement and reject().
    - If an error occurs and you don’t have the catch() method, the JavaScript engine issues a runtime error and stops the program.

 */
