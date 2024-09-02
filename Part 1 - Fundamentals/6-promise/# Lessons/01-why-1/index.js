/*
  Why JavaScript promises

*/

// The following example defines a function getUsers() that returns a list of user objects:
function getUsers() {
  return [
    { username: 'john', email: 'john@test.com' },
    { username: 'jane', email: 'jane@test.com' },
  ]
}
// Each user object has two properties username and email.

////////////////////////////
// To find a user by username from the user list returned by the getUsers() function, you can use the findUser() function as follows:
function findUser(username) {
  const users = getUsers()
  const user = users.find((user) => user.username === username)
  return user
}
// In the findUser() function:
// First, get a user array by calling the getUsers() function
// Second, find the user with a specific username by using the find() method of the Array object.
// Third, return the matched user.

////////////////////////////
// The following shows the complete code for finding a user with the username 'john':
console.log(findUser('john'))

// The code in the findUser() function is synchronous and blocking. The findUser() function executes the getUsers() function to get a user array, calls the find() method on the users array to search for a user with a specific username, and returns the matched user.
