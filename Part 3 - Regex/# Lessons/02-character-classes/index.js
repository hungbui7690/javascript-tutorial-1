/*
  Character Classes
  - match a set of characters including digits, whitespace, and word characters.

*/

/*
  A character class allows you to match any symbol from a certain character set. A character class is also called a character set. Suppose that you have a phone number like this:
    +1-(408)-555-0105

  And you want to turn it into a plain number:
    14085550105

  Character classes in regular expressions can help you to do this.

  Let’s explore the digit character class first. The digit character class is denoted by \d which matches any single digit:
    
    \d

*/

// The following example uses the \d to match the first number in the phone number:
let phone = '+1-(408)-555-0105'
let re = /\d/
console.log(phone.match(re))

re = /\d/g
const numbers = phone.match(re)
console.log(numbers)

let phoneNo = numbers.join('')
console.log(phoneNo)

// To make it short, you can chain the match() and join() methods like this:
console.log('+1-(408)-555-0105'.match(/\d/g).join(''))

/*
  Besides the digit character class (\d), regular expressions support other character classes.

  The most commonly used character classes are:

      \d – match a single digit or a character from 0 to 9.
      \s – match a single whitespace symbol such a space, a tab (\t), a newline (\n).
      \w – w stands for word character. It matches the ASCII character [A-Za-z0-9_] including Latin alphabets, digits, and the underscore (_)

  In practice, you often combine the character classes to form a more powerful match.

*/

// For example \w\d matches any word followed by a digit like O2:
let str = 'O2 is oxygen'
re = /\w\d/g
console.log(str.match(re)) // ['O2']

// A pattern may contain both regular characters and character classes. For example, the ES\d regular expression matches ES followed by a digit like ES6:
str = 'ES6 Tutorial'
re = /ES\d/g
console.log(str.match(re)) // ['ES6']
