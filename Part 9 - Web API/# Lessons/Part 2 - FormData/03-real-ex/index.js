/*
  FormData API

*/

const btn = document.querySelector('#submit')
const form = document.querySelector('#form')
const messageEl = document.querySelector('#message')

const showMessage = (message, type = 'success') => {
  messageEl.innerHTML = `
        <div class="alert alert-${type}">
        ${message}
        </div>
    `
}

const createUser = async () => {
  let response = await fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'POST',
    body: new FormData(form),
  })

  const result = await response.json()
  console.log(result)

  showMessage(
    `user with id ${result.id} has been created`,
    response.status == 201 ? 'success' : 'error'
  )
}

btn.addEventListener('click', (e) => {
  e.preventDefault()
  createUser()
})
