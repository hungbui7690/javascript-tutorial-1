/*
  Form Data API - Serializing FormData into a query string
  
*/

let form = document.querySelector('form')
let formData = new FormData(form)

// Some APIs instead require data as a query string.
let str = 'key=some+value&another-key=some+other+value'

/*
  - To convert our FormData object into a query string, we’ll use the URLSearchParams(). 
  - It provides methods for getting, setting, and modifying query string values and has a similar API as the FormData object.
  - First, we’ll use the new URLSearchParams() constructor to create our query string object.
*/
let params = new URLSearchParams()
/*
  - Next, we’ll loop through each item in our FormData object with a for…of loop, and use the URLSearchParams.append() method to add the key and val to our query string.
  - The URLSearchParams.append() method automatically encodes the value for us.
*/
for (let [key, val] of formData) {
  params.append(key, val)
}
// Finally, we can use the URLSearchParams.toString() method to get the actual query string.
let strX = params.toString()
console.log(strX)
