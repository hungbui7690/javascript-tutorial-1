/*
  Inverse Classes
  - A character class has an inverse class with the same letter but in the uppercase e.g., \D is the inverse of \d.

  - The inverse class matches all the other characters. For example, the \D match any character except a digit (or \d). The following are the inverse classes:

      \D – matches any character except a digit e.g., a letter.
      \S – matches any character except a whitespace e.g., a letter
      \W – matches any character except a word character e.g., non-Latin letter or space.

*/

// 1) Back to the phone number example, you can use the \d with the global flag (g):
let phone = '+1-(408)-555-0105'
let re = /\d/g
console.log(phone.match(re).join(''))

// Or you can remove the non-digit using the \D inverse class and replace all non-digit characters with blank, like this:
phone = '+1-(408)-555-0105'
re = /\D/g
console.log(phone.replace(re, ''))

// 2) The dot (.) character class
// The dot (.) is a special character class that matches any character except a newline:
re = /E.6/
console.log('ES6'.match(re))

// However, the following example returns null:
re = /ES.6/
console.log('ES\n6'.match(re))

// If you want to use the dot (.) character class to match any character including the newline, you can use the s flag:
re = /ES.6/s
console.log('ES\n6'.match(re))
