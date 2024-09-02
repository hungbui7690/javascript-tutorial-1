/*
  async/await
  - In the past, to handle asynchronous operations, you used the callback functions. However, nesting many callback functions can make your code more difficult to maintain, resulting in a notorious issue known as callback hell.

  - Suppose that you need to perform three asynchronous operations in the following sequence:
    > Select a user from the database.
    > Get the user’s services from an API.
    > Calculate the service cost based on the services from the server. 

  - The following functions illustrate the three tasks. Note that we use the setTimeout() function to simulate the asynchronous operation.


*/

function getUser(userId, callback) {
  console.log('Get user from the database.')
  setTimeout(() => {
    callback({
      userId: userId,
      username: 'john',
    })
  }, 1000)
}

function getServices(user, callback) {
  console.log(`Get services of  ${user.username} from the API.`)
  setTimeout(() => {
    callback(['Email', 'VPN', 'CDN'])
  }, 2 * 1000)
}

function getServiceCost(services, callback) {
  console.log(`Calculate service costs of ${services}.`)
  setTimeout(() => {
    callback(services.length * 100)
  }, 3 * 1000)
}

// The following shows the nested callback functions:
getUser(100, (user) => {
  getServices(user, (services) => {
    getServiceCost(services, (cost) => {
      console.log(`The service cost is ${cost}`)
    })
  })
})
