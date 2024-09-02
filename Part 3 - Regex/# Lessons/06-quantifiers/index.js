/*
  Quantifiers
  - match a number of instances of a character, group, or character class in a string.

*/

// I. Quantity
// 1) Exact count {n}
// A number in curly braces {n}is the simplest quantifier. When you append it to a character or character class, it specifies how many characters or character classes you want to match.
// For example, the regular expression /\d{4}/ matches a four-digit number. It is the same as /\d\d\d\d/:
let str = 'ECMAScript 2020'
let re = /\d{4}/
let result = str.match(re)
console.log(result) // ["2020"]

// 2) The range {n,m}
// The range matches a character or character class from n to m times.
// For example, to find numbers that have two, three, or four digits, you use the regular expression /\d{2,4}/g:
str = 'The official name of ES11 is ES2020'
re = /\d{2,4}/g
result = str.match(re)
console.log(result) // ['11', '2020']

// Because the upper limit is optional, the {n,} searches for a sequence of n or more times. For example, the regular expression /\d{2,}/ will match any number that has two or more digits.
str = 'The official name of ES6 is ES2015'
re = /\d{2,}/g
result = str.match(re)
console.log(result) // ["2015"]

// The following example uses the regular expression /\d{1,}/g to match any numbers that have one or more digits in a phone number:
let numbers = '+1-(408)-555-0105'.match(/\d{1,}/g)
console.log(numbers) // ["1", "408", "555", "0105"]

// II. Shorthands
// 1) The quantifier {1,} means one or more which has the shorthand as +. For example, the \d+ searches for numbers:
let phone = '+1-(408)-555-0105'
result = phone.match(/\d+/g)
console.log(result) // ['1', '408', '555', '0105']

// 2) The quantifier ? means zero or one. It is the same as {0,1}. For example, /colou?r/ will match both color and colour:
str = 'Is this color or colour?'
result = str.match(/colou?r/g)
console.log(result) // ['color', 'colour']

// 3) The quantifier * means zero or more. It is the same as {0,}. The following example shows how to use the quantifier * to match the string Java followed by any word character:
str = 'JavaScript is not Java'
re = /Java\w*/g
let results = str.match(re)
console.log(results) // ['JavaScript', 'Java']

/*
  We often use the quantifiers to form complex regular expressions. The following shows some regular expression examples that include quantifiers:

      Whole numbers:/^\d+$/
      Decimal numbers:/^\d*.\d+$/
      Whole numbers and decimal numbers:/^\d*(.\d+)?$/
      Negative, positive whole numbers & decimal numbers:/^-?\d*(.\d+)?$/

*/
