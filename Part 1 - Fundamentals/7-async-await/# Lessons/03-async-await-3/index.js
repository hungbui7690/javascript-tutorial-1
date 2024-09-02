/*
  async/await
  - ES2017 introduced the async/await keywords that build on top of promises, allowing you to write asynchronous code that looks more like synchronous code and is more readable. 
  - Technically speaking, the async / await is syntactic sugar for promises.
  - The await will wait for the Promise returned from the f() to settle. The await keyword can be used only inside the async functions.

*/

function getUser(userId) {
  return new Promise((resolve, reject) => {
    console.log('Get user from the database.')
    setTimeout(() => {
      resolve({
        userId: userId,
        username: 'john',
      })
    }, 1000)
  })
}

function getServices(user) {
  return new Promise((resolve, reject) => {
    console.log(`Get services of  ${user.username} from the API.`)
    setTimeout(() => {
      resolve(['Email', 'VPN', 'CDN'])
    }, 2 * 1000)
  })
}

function getServiceCost(services) {
  return new Promise((resolve, reject) => {
    console.log(`Calculate service costs of ${services}.`)
    setTimeout(() => {
      resolve(services.length * 100)
    }, 3 * 1000)
  })
}

// As you can see, the asynchronous code now looks like the synchronous code.
// The following defines an async function that calls the three asynchronous operations in sequence:
async function showServiceCost() {
  let user = await getUser(100)
  let services = await getServices(user)
  let cost = await getServiceCost(services)
  console.log(`The service cost is ${cost}`)
}

showServiceCost()
