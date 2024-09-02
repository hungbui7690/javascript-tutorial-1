/*
  Error handling
  - If a promise resolves, the await promise returns the result. 
  - However, when the promise is rejected, the await promise will throw an error as if there were a throw statement.

  - the 2 methods below generate error for async function

*/

////////////////////////
// METHOD 1
async function getUser(userId) {
  await Promise.reject(new Error('Invalid User Id'))
}

// METHOD 2
async function getUser(userId) {
  throw new Error('Invalid User Id')
}

////////////////////////
// In a real scenario, it will take a while for the promise to throw an error.
// You can catch the error by using the try...catch statement, the same way as a regular throw statement:
async function getCurrentUser(userId) {
  try {
    const user = await Promise.reject(new Error('Invalid User Id'))
  } catch (error) {
    console.log(error)
  }
}

////////////////////////
// It’s possible to catch errors caused by one or more await promise‘s:
async function showServiceCost() {
  try {
    let user = await getUser(100)
    let services = await getServices(user)
    let cost = await getServiceCost(services)
    console.log(`The service cost is ${cost}`)
  } catch (error) {
    console.log(error)
  }
}
