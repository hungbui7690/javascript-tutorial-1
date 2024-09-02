/*
  Form Data API
  - inputs MUST have NAME ATTRIBUTE to use this

*/

const form = document.querySelector('.form')
const btn = document.querySelector('.btn')

form.addEventListener('submit', function (e) {
  e.preventDefault()
  const formDataX = new FormData(e.currentTarget)

  // check for value
  const name = formDataX.get('name')
  console.log('name: ', name) // huron

  const email = formDataX.get('email')
  console.log('email: ', email) // huron@gmail.com

  // append
  formDataX.append('test', 'test123')
  console.log('append: ', [...formDataX.entries()])

  // delete
  formDataX.delete('test')
  formDataX.delete('email')
  console.log('delete: ', [...formDataX.entries()])

  // has
  const checkName = formDataX.has('name')
  console.log(checkName) // true
  console.log(formDataX.has('email')) // false
})
