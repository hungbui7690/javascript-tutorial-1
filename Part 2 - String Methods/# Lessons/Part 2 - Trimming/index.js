/*
  trim
  - The following characters are the whitespace characters in JavaScript:

      A space character
      A tab character
      A carriage return character
      A new line character
      A vertical tab character
      A form feed character

*/

// The following example shows how to use the trim() to remove whitespace from both sides of a string:
let str = '  JS trim  '
let result = str.trim()
console.log(result) // "JS trim"

// The trimLeft() method is an alias of the trimStart() method. Therefore, the trimLeft() has the same functionality as the trimStart() method. It’s recommended that you use the trimStart() method.
str = '   JavaScript   '
result = str.trimStart()
console.log({ trimStart: result })

str = '   JavaScript   '
result = str.trimEnd()
console.log({ trimEnd: result })
