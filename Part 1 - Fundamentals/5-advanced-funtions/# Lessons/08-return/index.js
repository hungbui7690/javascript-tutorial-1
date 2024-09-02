/*
  Return

*/

//////////////////////////////
// 1) Returning multiple values from a function using an array
// Suppose the following getNames() function retrieves the first name and last name from a database in the backend or from the result of a third-party API call and returns them as elements of an array:
function getNamesX() {
  // get names from the database or API
  let firstNameX = 'John',
    lastNameX = 'Doe'

  // return as an array
  return [firstNameX, lastNameX]
}

// In ES6, you can use the destructuring assignment syntax to unpack values from an array more intuitively, like this:
const [firstNameX, lastNameX] = getNamesX()

//////////////////////////////
// 2) Returning multiple values from an function using an object
// If you want to assign a name to each returned value to make it more readable and easier to maintain, you can use an object:
function getNamesY() {
  let firstNameY = 'John',
    lastNameY = 'Doe'

  return {
    firstNameY,
    lastNameY, // shorten using the object literal syntax extensions in ES6
  }
}

// If you want to unpack properties from an object, you can use the object destructuring syntax as follows:
let { firstNameY, lastNameY } = getNamesY()

/*
  Summary

    - JavaScript doesn’t support functions that return multiple values. However, you can wrap multiple values into an array or an object and return the array or the object.
    - Use destructuring assignment syntax to unpack values from the array, or properties from objects.
*/
