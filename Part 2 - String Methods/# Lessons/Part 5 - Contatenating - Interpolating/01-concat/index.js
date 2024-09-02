/*
  concat

*/

let greeting = 'Hi'
let message = greeting.concat(' ', 'John')
console.log(message) // Hi John

// The following example uses the concat() method to concatenate strings in an array:
let colors = ['Blue', ' ', 'Green', ' ', 'Teal']
let result = ''.concat(...colors)
console.log(result) // Blue Green Teal

let str = ''.concat(1, 2, 3)
console.log(str) // 123
