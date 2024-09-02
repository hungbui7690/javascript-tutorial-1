/*
  indexOf
  - returns the index of the first occurrence of substring (substr) in a string (str):

        let index = str.indexOf(substr, [, fromIndex])

  - It returns -1 if the str does not contain the substr.
  - The fromIndex is an optional parameter that specifies the index at which the search starts. It defaults to zero (0), meaning that if you omit the fromIndex, the search will start from the beginning of the string.
  - The indexOf() always perform a case-sensitive search.

*/

// The following example uses the indexOf() to get the index of the first occurrence of the substring 'str' in the string 'finding substring in string':
let str = 'finding substring in string'
let index = str.indexOf('str')
console.log(index) // 11

// The following example uses the indexOf() method to count the number of occurrences of the substring 'know' in the string 'You do not know what you do not know until you know.':
str = 'You do not know what you do not know until you know.'
substr = 'know'
let count = 0
index = str.indexOf(substr)
while (index !== -1) {
  count++
  index = str.indexOf(substr, index + 1)
}
console.log(count) // 3

// The indexOf() is case-sensitive. See the following example:
str = 'JS indexOf'
substr = 'js'
index = str.indexOf(substr)
console.log(index) // -1

// To perform a case-insensitive search for the index of a substring within a string, you can convert both substring and string to lowercase before using the indexOf() method as follows:
str = 'JS indexOf'
substr = 'js'
index = str.toLocaleLowerCase().indexOf(substr.toLocaleLowerCase())
console.log(index) // 0
