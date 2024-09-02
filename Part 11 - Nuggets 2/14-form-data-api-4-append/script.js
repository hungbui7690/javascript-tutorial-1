/*
  Form Data API
  - append()
  - delete()
  - has()

*/

let form = document.querySelector('form')
let formData = new FormData(form) // Get all field data from the form >>returns a FormData object

//////////////////////////
// The FormData.append() method adds an additional value for an existing entry if one with that name already exists. If not, it creates a new entry.
// Pass in a name and value as arguments.
//////////////////////////
formData.append('id', '123') // Adds an additional "id" value
formData.append('tags', 'vacations') // Creates a new entry, "tags"

//////////////////////////
// The FormData.delete() method deletes all values for an entry.
// Pass in the name of the item to delete as an argument.
//////////////////////////
formData.delete('body') // Deletes the "body" entry

//////////////////////////
// The FormData.has() method can be used to check if a FormData object contains an entry with a specific name.
//////////////////////////
let hasID = formData.has('id')
console.log(hasID) // true
