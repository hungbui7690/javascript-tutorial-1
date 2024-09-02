/*
  Why JavaScript promises
  - In practice, the getUsers() function may access a database or call an API to get the user list. Therefore, the getUsers() function will have a delay.

*/

//////////////////////////////
// To simulate the delay, you can use the setTimeout() function. For example:
function getUsers() {
  let users = []

  // delay 1 second (1000ms)
  setTimeout(() => {
    users = [
      { username: 'john', email: 'john@test.com' },
      { username: 'jane', email: 'jane@test.com' },
    ]
  }, 1000)

  return users // *** []
}
/*
  How it works.
  - First, define an array users and initialize its value with an empty array.
  - Second, assign an array of the users to the users variable inside the callback of the setTimeout() function.
  - Third, return the users array
*/

//////////////////////////////
// The getUsers() won’t work properly and always returns an empty array. Therefore, the findUser() function won’t work as expected:
function findUser(username) {
  const users = getUsers() // A
  const user = users.find((user) => user.username === username) // B
  return user
}

console.log(findUser('john')) // undefined

/*
  Because the getUsers() returns an empty array, the users array is empty (line A). When calling the find() method on the users array, the method returns undefined (line B)

  The challenge is how to access the users returned from the getUsers() function after one second. One classical approach is to use the callback.
*/
