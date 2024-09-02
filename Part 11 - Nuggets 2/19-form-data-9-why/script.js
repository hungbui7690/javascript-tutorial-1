/*
  Form Data API - Why We Need Form Data API
  - below is ok 
  - but if we have more and more inputs (15 inputs for example) >> then we have to repeat a lot (select the elements, get the values...)
    > this is where Form Data API shines 

*/

const form = document.querySelector('.form')
const nameInput = document.querySelector('.name-input')
const emailInput = document.querySelector('.email-input')
const passwordInput = document.querySelector('.password-input')

form.addEventListener('click', function (e) {
  e.preventDefault()
  const nameValue = nameInput.value
  const emailValue = emailInput.value
  const passwordValue = passwordInput.value

  if (!nameValue || !emailInput || !passwordInput) {
    console.log('Please provide infos')
    return
  }

  console.log(nameValue, emailValue, passwordValue)

  nameInput.value = ''
  emailInput.value = ''
  passwordInput.value = ''
})
