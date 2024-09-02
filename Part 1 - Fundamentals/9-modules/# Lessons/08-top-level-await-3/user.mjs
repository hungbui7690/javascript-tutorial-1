const url = 'https://jsonplaceholder.typicode.com/users'

// In this module, you can use the await keyword without placing a statement inside an async functio
const response = await fetch(url)
let users = await response.json()

export { users }
