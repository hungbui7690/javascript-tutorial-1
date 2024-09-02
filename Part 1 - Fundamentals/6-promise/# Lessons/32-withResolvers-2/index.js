/*
  Promise.withResolvers method

*/

///////////////////////////////
// OLD
function getUsers() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        { username: 'john', email: 'john@test.com' },
        { username: 'jane', email: 'jane@test.com' },
      ])
    }, 1000)
  })
}

///////////////////////////////
// NEW: the Promise.withResolvers() function, you can simplify the code like this:
function getLoginUser() {
  const { promise, resolve, reject } = Promise.withResolvers()

  setTimeout(() => {
    resolve([
      { username: 'john', email: 'john@test.com' },
      { username: 'jane', email: 'jane@test.com' },
    ])
  }, 1000)

  return { promise, resolve, reject } // *** MUST
}

console.log(getLoginUser().promise.then((user) => console.log(user)))
