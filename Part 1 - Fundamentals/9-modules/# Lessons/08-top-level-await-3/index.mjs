/*
  Top-level await

*/

// In this case, the app.mjs module will wait for the user.mjs module to complete before executing its body.
import { users } from './user.mjs'

function render(users) {
  if (!users) {
    throw 'The user list is not available.'
  }
  let list = users
    .map((user) => {
      return `<li> ${user.name}(<a href="email:${user.email}">${user.email}</a>)</li>`
    })
    .join(' ')

  return `<ol>${list}</ol>`
}

let container = document.querySelector('.container')

try {
  container.innerHTML = render(users)
} catch (error) {
  container.innerHTML = error
}

///////////////////////////////
// Use Case
/*

  In this example, the top-level await allows modules to use runtime values to decide the dependencies, which is useful for the following scenarios:
  - Internationalization (i18n)
  - Development/production environment splits.
*/

// In this case, you can use the top-level await to load a module from a server (cdn1). And if it fails, you can load it from a backup server (cdn2):
let module
try {
  module = await import('https://cdn1.com/module')
} catch {
  module = await import('https://cdn2.com/module')
}
