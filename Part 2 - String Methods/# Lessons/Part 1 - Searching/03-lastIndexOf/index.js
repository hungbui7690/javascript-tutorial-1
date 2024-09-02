/*
  lastIndexOf
  - locate the last occurrence of a substring in a string

      str.lastIndexOf(substr, [, fromIndex])

  - The lastIndexOf() method searches for the substring backward from the fromIndex. The fromIndex is optional and defaults to +Infinity. It means that if you omit the fromIndex, the search starts from the end of the string.
  - If the fromIndex is greater or equal to str.length, the lastIndexOf() will search for the substr in the whole string.
  - If the fromIndex is less than zero, the search behavior is the same as if the fromIndex were zero.

*/

// This example uses the lastIndexOf() method to locate the last occurrence of the substring 'a' in the string 'JavaScript':
let str = 'JavaScript'
let index = str.lastIndexOf('a')
console.log(index) // 3

// If you pass the fromIndex argument to the string, the lastIndexOf() method will start searching backward from the fromIndex as shown in the following example:
str = 'JavaScript'
index = str.lastIndexOf('a', 2)
console.log(index) // 1
