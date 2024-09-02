/*
  search
  - locate a substring within a string using a regular expression.

      let index = str.search(regexp)

*/

// The following example uses the search() method to return the first occurrence of any capital letter:
let re = /[A-Z]/
let str = 'hi There! How are you?'
let index = str.search(re)
console.log(index) // It returns 3 which is the index of the capital letter T.

// The following example returns -1 because there is no number in the string:
re = /[0-9]/
str = 'Hello, JavaScript!'
index = str.search(re)
console.log(index) // -1
