/*
  Using callbacks to deal with an asynchronous operation
  - The following example adds a callback argument to the getUsers() and findUser() functions:

*/

function getUsers(callback) {
  setTimeout(() => {
    callback([
      { username: 'john', email: 'john@test.com' },
      { username: 'jane', email: 'jane@test.com' },
    ])
  }, 1000)
}

function findUser(username, callback) {
  getUsers((users) => {
    const user = users.find((user) => user.username === username)
    callback(user)
  })
}

findUser('john', console.log) // { username: 'john', email: 'john@test.com' }

/*
  In this example, the getUsers() function accepts a callback function as an argument and invokes it with the users array inside the setTimeout() function. Also, the findUser() function accepts a callback function that processes the matched user.

  The callback approach works very well. However, it makes the code more difficult to follow. Also, it adds complexity to the functions with callback arguments.

  If the number of functions grows, you may end up with the callback hell problem. To resolve this, JavaScript comes up with the concept of promises.

*/
