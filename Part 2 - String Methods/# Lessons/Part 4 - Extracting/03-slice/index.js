/*
  slice
  - extracts a portion of a string and returns it as a substring

        slice(start, end)

  - 


*/

// The start parameter is a zero-based index at which the method starts the extraction. For example:
let str = 'Hello'
let substr = str.slice(3)
console.log({ substr }) // 'lo'

// If the start is negative, the slice() method starts extraction from the str.length + start. For example:
str = 'Hello'
substr = str.slice(-3) // -3 + 5 = 2 > starts from index 2
console.log({ substr }) // 'llo'

// If the start is omitted, undefined, or cannot be converted to a number, the slice() method starts extraction from the beginning of the string:
// Copy string
str = 'Hello'
substr = str.slice()
console.log({ substr }) // 'Hello'

// If the start is greater than or equal to the length of the string, the slice() method returns an empty string. For example:
str = 'Hello'
substr = str.slice(5)
console.log({ substr }) // ''

// The end is a zero-based index that specifies the position before the slice() method ends the extraction. The result string will not include the character at the end index. For example:
str = 'Hello'
substr = str.slice(0, 2)
console.log({ substr }) // 'He'

// If the end is negative, the slice() method treats it as str.length + end. For example:
str = 'Hello'
substr = str.slice(0, -2) // -2 + 5 = 3 > from 0 to 3
console.log({ substr }) // 'Hel'

// If the end is greater than the length of the string, the slice() method extracts to the end of the string. For example:
str = 'Hello'
substr = str.slice(2, 6)
console.log({ substr }) // 'llo'

// If the end is omitted, undefined, or cannot be converted to a number, the slice() method also extracts to the end of the string. For example:
str = 'Hello'
substr = str.slice(3)
console.log({ substr }) // 'lo'

// If the end represents a position that is before the one represented by the start, the slice() method returns an empty string. For example:
str = 'Hello'
substr = str.slice(3, 2)
console.log({ substr }) // ''

// The following example uses the slice() method to get the local part of an email address:
let email = 'john@example.com'
let localPart = email.slice(0, email.indexOf('@'))
console.log(localPart) // john
