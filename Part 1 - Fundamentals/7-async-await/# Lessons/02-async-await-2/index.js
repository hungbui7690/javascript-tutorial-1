/*
  async/await
  - To avoid this callback hell issue, ES6 introduced the promises that allow you to write asynchronous code in more manageable ways.

*/

// First, you need to return a Promise in each function:
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

// We then consume the promises
getUser(100).then(getServices).then(getServiceCost).then(console.log)
