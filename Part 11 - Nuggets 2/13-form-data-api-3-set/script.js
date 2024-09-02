/*
  Form Data API
  - set()

*/

let form = document.querySelector('form')
let formData = new FormData(form) // Get all field data from the form >>returns a FormData object

//////////////////////////
// You can use the FormData.set() method to add a new value to your FormData object. If an entry with that name already exists, the FormData.set() method overwrites it.
// Pass in a name and value as arguments.
//////////////////////////
formData.set('date', '2022-12-25') // Add a new entry, "date", to the FormData object
formData.set('id', '42') // Overwrite the "id" entry

const date = formData.get('date')
const id = formData.get('id')
console.log(date, id)
