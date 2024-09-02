/*
  Top-level await
  - this won't work > fix in next lesson

  *** mjs extension

*/

// The user.mjs fetches the user data in JSON format from an API with the URL endpoint https://jsonplaceholder.typicode.com/users
import { users } from './user.mjs'

// this won't work > users take sometimes to get
function render(users) {
  if (!users) {
    throw 'The user list is not available'
  }

  const list = users
    .map((user) => {
      return `<li> ${user.name}(<a href="email:${user.email}">${user.email}</a>)</li>`
    })
    .join('')

  return `<ol>${list}</ol>`
}

const container = document.querySelector('.container')
try {
  container.innerHTML = render(users)
} catch (e) {
  container.innerHTML = e
}
