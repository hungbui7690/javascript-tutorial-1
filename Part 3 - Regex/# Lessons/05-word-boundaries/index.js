/*
  Word Boundaries
  - The (\b) is an anchor like the caret (^) and the dollar sign ($). It matches a position that is called a “word boundary”. The word boundary match is zero-length.

  - The following three positions are qualified as word boundaries:

      Before the first character in a string if the first character is a word character.
      After the last character in a string if the last character is a word character.
      Between two characters in a string if one is a word character and the other is not.

  - Simply put, the word boundary \b allows you to carry the match the whole word using a regular expression in the following form:
      \bword\b

  *** It’s important to note that the \b doesn’t work for non-Latin alphabets.
  *** It’ll be easier and more flexible if you use quantifiers that will be covered in the quantifiers tutorial. Basically, you can use \d{4} instead of \d\d\d\d, which is much shorter.

*/

// 1) The following example returns 'JS' because 'Hello, JS!' matches the regular expression /\bJS\b/:
console.log('Hello, JS!'.match(/\bJS\b/)) // true

// However, the 'Hello, JScript' doesn’t match /\bJS\b/:
console.log('Hello, JSscript!'.match(/\bJS\b/)) // null

// Note that without \b, the /JS/ matches both 'Hello, JS' and 'Hello, JScript':
console.log('Hello, JSscript!'.match(/JS/)) // ["JS"]
console.log('Hello, JS!'.match(/JS/)) // ["JS"]

// It’s possible to use the word boundary with digits.
// For example, the regular expression \b\d\d\d\d\b matches a 4-digit number surrounded by characters different from \w:
console.log('ES 2015'.match(/\b\d\d\d\d\b/)) // ["2015"]

// The following example uses the word boundary to find the time that has the format hh:mm e.g., 09:15:
let str = 'I start coding JS at 05:30 AM'
let re = /\b\d\d:\d\d\b/
let result = str.match(re)
console.log(result) // ["05:30"]
