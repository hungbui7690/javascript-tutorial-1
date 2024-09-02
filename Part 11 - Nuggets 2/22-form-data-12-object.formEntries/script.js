/*
  Form Data API
  - inputs MUST have NAME ATTRIBUTE to use this

*/

const form = document.querySelector('.form')
const btn = document.querySelector('.btn')

form.addEventListener('submit', function (e) {
  e.preventDefault()
  const formData = new FormData(e.currentTarget) // NOT JSON
  console.log('entries: ', [...formData.entries()]) // Array of Arrays

  ////////////////////////////
  // BOTH ARE NOT JSON >> cannot send with HTTP Request (depends on Server)
  // axios.post('someURL', formData)

  const formObject = Object.fromEntries(formData) // convert to object
  console.log(formObject)

  ////////////////////////////
  // Will work
  // axios.post('someURL', formObject)

  // Reset
  e.currentTarget.reset() // reset to original values

  /*
  
  */
})
