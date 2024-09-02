const url = 'https://jsonplaceholder.typicode.com/users'

let users

// (1a) add export default > this will export "promise"
export default (async () => {
  const response = await fetch(url)

  users = await response.json()
})()

export { users } // (1b) we don't explicitly export "promise" here, but in step a
