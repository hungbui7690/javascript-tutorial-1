/*
  Promise Error Handling

*/

// NORMAL ERROR
// First, change the getUserById() function to throw an error outside the promise:
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

// Second, handle the promise by using both then() and catch() methods:
getUserById('a')
  .then((user) => console.log(user.username))
  .catch((err) => console.log(err))
