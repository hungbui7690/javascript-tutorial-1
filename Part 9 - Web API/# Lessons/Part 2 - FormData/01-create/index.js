/*
  FormData API
  - When you click the submit button, the web browser submits the values of the name and email fields in the form to the server.
  - Similarly, the FormData interface allows you to construct a set of key/value pairs representing form fields and their values in JavaScript.
  - Once having a FormData object, you can post it to the server using the fetch API. If you want to submit the form as if it were like the GET request, you can pass the FormData object to the URLSearchParams constructor.

  *** entries() method returns an iterator > we need to use spread operator

*/

const btn = document.querySelector('#submit')
const form = document.querySelector('#subscription')

btn.addEventListener('click', (e) => {
  e.preventDefault()

  // creates a new FormData object from an HTML form element:
  const formData = new FormData(form)
  const values = [...formData.entries()]
  console.log(values)
})
