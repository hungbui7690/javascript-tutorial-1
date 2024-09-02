/*
  Promise Chaining - real example
  - Suppose that you want to perform the following asynchronous operations in sequence:
    > First, get the user from the database.
    > Second, get the services of the selected user.
    > Third, calculate the service cost from the user’s services.

  - The following functions illustrate the three asynchronous operations:

*/

function getUser(userId) {
  return new Promise((resolve, reject) => {
    console.log('Get the user from the database.')
    setTimeout(() => {
      resolve({
        userId: userId,
        username: 'admin',
      })
    }, 1000)
  })
}

function getServices(user) {
  return new Promise((resolve, reject) => {
    console.log(`Get the services of ${user.username} from the API.`)
    setTimeout(() => {
      resolve(['Email', 'VPN', 'CDN'])
    }, 3 * 1000)
  })
}

function getServiceCost(services) {
  return new Promise((resolve, reject) => {
    console.log(`Calculate the service cost of ${services}.`)
    setTimeout(() => {
      resolve(services.length * 100)
    }, 2 * 1000)
  })
}

// The following uses the promises to serialize the sequences:
getUser(100).then(getServices).then(getServiceCost).then(console.log)
