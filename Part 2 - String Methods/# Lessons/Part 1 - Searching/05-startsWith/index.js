/*
  startsWith
  - check if a string starts with a substring.

        String.startsWith(searchString [,position])

  - searchString is the characters to be searched for at the start of this string.
  - position is an optional parameter that determines the start position to search for the searchString. It defaults to 0.

*/

const title = 'Jack and Jill Went Up the Hill'

console.log(title.startsWith('Jack')) // true
console.log(title.startsWith('jack')) // false
console.log(title.startsWith('Jill', 9)) // true

console.log(title.endsWith('Hill')) // true
console.log(title.endsWith('hill')) // false

// The following example uses the endsWith() method with the second parameter that determines the length of the string to search:
console.log(title.endsWith('Up', 21)) // true
