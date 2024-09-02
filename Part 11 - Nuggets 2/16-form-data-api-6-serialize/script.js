/*
  Form Data API - Serializing FormData into an object
  - You might intend to pass your FormData object along to an API.
  - While some APIs will accept a FormData object in its native form, many require you to pass along an object instead.
  

*/

let form = document.querySelector('form')
let formData = new FormData(form) // Get all field data from the form >>returns a FormData object

//////////////////////////
// Method 1: If your form does not contain multiple fields with the same name, you can use the Object.fromEntries() method to convert your FormData object into a plain object ({}).
//////////////////////////
let serialized = Object.fromEntries(formData)
console.log(serialized)

//////////////////////////
// However, if your form has multiple fields with the same name, only the value of the last field with that name will appear in the object.
// We instead need to loop through each entry with a for...of loop and add it to an object.
//////////////////////////
let obj = {}

for (let [key, value] of formData) {
  obj[key] = value
}
console.log(obj)

//////////////////////////
// To account for multiple fields with the same name, we need to check if the key already exists in the obj.
// If it does, we want to convert it to an array and Array.push() the new value into it.
//////////////////////////
let objX = {}

for (let [key, value] of formData) {
  if (objX[key] !== undefined) {
    if (!Array.isArray(objX[key])) {
      objX[key] = [objX[key]]
    }

    objX[key].push(value)
  } else {
    objX[key] = value
  }
}
console.log(objX)

/////////////////////////////
// If you find yourself doing this often, I’ve put together a helper method you can use.
// Once you have your object, you can pass it into the JSON.stringify() method to send along to an API.
/////////////////////////////
let stringified = JSON.stringify(objX)
console.log(stringified)
