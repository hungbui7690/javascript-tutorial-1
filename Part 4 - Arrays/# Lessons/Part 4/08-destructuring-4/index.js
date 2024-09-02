/*
  Array Destructuring

*/

// Nested array destructuring
// The following function returns an array that contains an element which is another array, or nested array:
function getProfile() {
  return ['John', 'Doe', ['Red', 'Green', 'Blue']]
}

let [firstName, lastName, [color1, color2, color3]] = getProfile()
console.log(color1, color2, color3) // Red Green Blue
