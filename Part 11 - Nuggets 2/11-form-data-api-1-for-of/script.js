/*
  Form Data API
  - Form fields MUST have a NAME ATTRIBUTE to be included in the object.

*/

let form = document.querySelector('form')

let formData = new FormData(form) // Get all field data from the form >>returns a FormData object

////////////////////////////
// Method 1: You can loop through it using a for...of loop. Each entry is an array of key/value pairs.
////////////////////////////
for (let entry of formData) {
  console.log(entry)
}

console.log('===============')
////////////////////////////
// Method 2: You can also use array destructuring to assign the key and value to their own variables within the for...of loop.
////////////////////////////
for (let [key, value] of formData) {
  console.log('key: ', key)
  console.log('value: ', value)
  console.log('//////////////')
}
