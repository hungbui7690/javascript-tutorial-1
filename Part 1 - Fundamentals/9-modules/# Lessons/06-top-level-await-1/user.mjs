const url = 'https://jsonplaceholder.typicode.com/users'

let users

  // Because we can only use the await keyword inside an async function (before ES2020), we need to wrap the API call inside an immediately invoked async function expression (IIAFE).
;(async () => {
  const response = await fetch(url)

  users = await response.json()
  console.log(users)
})()

console.log(users) // because here is sync code > at this time, "users" haven't being loaded

export { users }
