/*
  Form Data API
  - entries()
  - keys()
  - values()
  - Array.from()

*/

let form = document.querySelector('form')
let formData = new FormData(form) // Get all field data from the form >>returns a FormData object

//////////////////////////
// You can loop them with a for…of loop, or convert them into an array using the Array.from() method.
//////////////////////////
for (let key of formData.keys()) {
  console.log('> keys: ', key)
}

for (let val of formData.values()) {
  console.log('+ values: ', val)
}

for (let entry of formData.entries()) {
  console.log('- entries: ', entry)
}

//////////////////////////
// Convert to an array
//////////////////////////
let arr = Array.from(formData.keys())
console.log('arr: ', arr)
