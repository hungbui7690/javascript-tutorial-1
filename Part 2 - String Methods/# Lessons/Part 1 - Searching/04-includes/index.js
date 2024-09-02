/*
  includes
  - determines whether a string contains another string

        string.includes(searchString [,position])

  - The includes() method returns true if the searchString found in the string; otherwise false.
  - The optional position parameter specifies the position within the string at which to begin searching for the searchString. The position defaults to 0.
  - The includes() matches string case-sensitively.

*/

// This example uses the includes() method to check if the string @ is in the string 'admin@example.com':
let email = 'admin@example.com'
console.log(email.includes('@')) // true

// The following example checks if the str contains the Script:
let str = 'JavaScript String'
console.log(str.includes('Script')) // true

// As mentioned earlier, the includes() matches the string case-sensitively, therefore, the following example returns false:
str = 'JavaScript String'
console.log(str.includes('script')) // false

// The following example uses the includes() method with the second parameter:
str = 'JavaScript String'
console.log(str.includes('Script', 5)) // false
