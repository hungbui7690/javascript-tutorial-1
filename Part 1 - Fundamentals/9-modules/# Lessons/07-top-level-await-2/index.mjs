/*
  Top-level await

*/

// (2) promise
import promise, { users } from './user.mjs'

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

// (3)
promise.then(() => {
  const container = document.querySelector('.container')
  try {
    container.innerHTML = render(users)
  } catch (e) {
    container.innerHTML = e
  }
})
