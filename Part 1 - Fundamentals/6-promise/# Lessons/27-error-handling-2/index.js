/*
  Promise Error Handling

*/

function getUserById(id) {
  if (typeof id !== 'number' || id <= 0) {
    throw new Error('Invalid id argument')
  }
  return new Promise((resolve, reject) => {
    resolve({
      id: id,
      username: 'admin',
    })
  })
}

// When you raise an exception outside the promise, you must catch it with try/catch:
// Use try/catch when consume the promise, not when creating
try {
  getUserById('a')
    .then((user) => console.log(user.username))
    .catch((err) => console.log(`Caught by .catch ${err}`))
} catch (error) {
  console.log(`Caught by try/catch ${error}`)
}
