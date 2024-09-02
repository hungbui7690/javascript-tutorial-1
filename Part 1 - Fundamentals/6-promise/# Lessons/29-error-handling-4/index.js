/*
  Promise Error Handling

*/

let authorized = false

// Calling reject() function
// Throwing an error has the same effect as calling the reject() as illustrated in the following example:
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

// In this example, instead of throwing an error inside the promise, we called the reject() explicitly. The catch() method also handles the error in this case.
try {
  getUserById(10)
    .then((user) => console.log(user.username))
    .catch((err) => console.log(`Caught by .catch ${err}`))
} catch (error) {
  console.log(`Caught by try/catch ${error}`)
}
