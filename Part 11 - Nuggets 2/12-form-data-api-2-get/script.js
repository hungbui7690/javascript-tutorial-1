/*
  Form Data API
  - get()
  - getAll()


*/

let form = document.querySelector('form')
let formData = new FormData(form) // Get all field data from the form >>returns a FormData object

//////////////////////////
// The FormData.get() method accepts the name of the field as an argument and returns its value. Here, we would get the value of the [name="title"] field.
//////////////////////////
let title = formData.get('title')
console.log(title) // returns "Go to the beach"

// If you had multiple fields with the same name, you might instead use the FormData.getAll() method. It returns an array of values instead.
let titles = formData.getAll('title') // returns ["Go to the beach"]
console.log(titles)
