/*
  pad
  - pad()
  - padStart() 
  - padEnd()


*/

// Suppose, you want a numeric string with 8 characters. For the string whose length is less than 8, it will be padded with zeros (0).
let str = '1234'.padStart(8, '0')
console.log(str) // "00001234"

// The following example pads a string by spaces because we don’t pass the pad string.
str = 'abc'.padStart(5)
console.log({ padStart: str }) // "  abc"

str = 'abc'.padEnd(5, '*')
console.log(str) // "abc**"

// In this example, the length of the resulting string must be 5, therefore, the pad string was truncated ("f") and only its left-most part ("de") was padded.
str = 'abc'.padEnd(5, 'def')
console.log(str) // "abcde"
